# Água Lila — full deploy runbook

End-to-end cutover for the Água Lila network: the static **agualila.earth** site
off GitHub Pages onto the Hetzner box, the **work.agualila.earth** Node app behind
Caddy, and the Cloudflare **Worker** that powers Stripe checkout + the shared
Substack feed. Ordered so nothing depends on something that isn't live yet.

**Box:** `ssh truman@89.167.41.185` (Hetzner CPX22, non-root sudo, `ufw` 22/80/443
only, Caddy 2.11.4). **Always append to `/etc/caddy/Caddyfile`, never replace it** —
it already serves templesofrefuge.earth + syncengine.earth.

Three repos (all `git@github.com:trumanellis/…`): `agualila.earth`,
`work.agualila.earth`, `templesofrefuge.earth` (holds `checkout-worker/` + the
shared JS). Push all three before starting — the box clones from GitHub.

---

## Phase 0 — Prereqs (local)

- [ ] `git push` all three repos so the box clones current code.
- [ ] Confirm Stripe **live** publishable + secret keys are on hand.
- [ ] Decide the Worker's public host (you get it after the first deploy in Phase 1).

---

## Phase 1 — Cloudflare Worker (Stripe checkout + Substack CORS proxy)

The Worker serves `/create-session`, `/session-status`, and `/substack-posts`
(the CORS proxy — browsers can't call Substack directly). `ALLOWED_ORIGINS` in
`wrangler.toml` already includes agualila, templesofrefuge, syncengine.

```bash
cd templesofrefuge.earth/checkout-worker
npx wrangler secret put STRIPE_SECRET_KEY      # paste sk_live_… (never in the repo)
npx wrangler deploy
```

Note the deployed URL, e.g. `https://tor-checkout.<subdomain>.workers.dev`. Smoke-test:

```bash
curl -s -H "Origin: https://agualila.earth" \
  https://tor-checkout.<subdomain>.workers.dev/substack-posts | head -c 200
# expect a JSON array of posts, with an Access-Control-Allow-Origin header
```

---

## Phase 2 — Wire the shared JS to the live Worker, then publish

Both files live in `templesofrefuge.earth/shared/` and are loaded cross-origin by
all sites (including agualila). Replace the two placeholders with the Phase 1 URL:

- [ ] `shared/substack-feed.js` → `DEFAULT_PROXY_URL`: replace the `CHANGE-ME`
  host with `https://tor-checkout.<subdomain>.workers.dev/substack-posts`.
- [ ] `shared/cta-widgets.js` → `CHECKOUT_API_URL`: replace `http://localhost:8787`
  with `https://tor-checkout.<subdomain>.workers.dev` (no trailing slash).
- [ ] `shared/cta-widgets.js` → `STRIPE_PUBLISHABLE_KEY`: swap the `pk_test_…` for `pk_live_…`.

Commit + push templesofrefuge, then deliver it on the box (it's a git clone under
`/var/www/templesofrefuge` — see its own `infra/RUNBOOK.md`):

```bash
ssh truman@89.167.41.185 'git -C /var/www/templesofrefuge pull --ff-only'
```

Sites that load `cta-widgets.js` (templesofrefuge, syncengine) auto-pick the Worker
from `CHECKOUT_API_URL`; agualila (no cta-widgets) uses `DEFAULT_PROXY_URL`.

---

## Phase 3 — Box: static site + work app

Full command detail is in **`work.agualila.earth/infra/RUNBOOK.md`** — follow it.
Summary of the order:

1. **Node 22** (once): NodeSource `setup_22.x` → `apt-get install -y nodejs`.
2. **agualila static** → clone to `/var/www/agualila`, `chown -R truman:truman`.
3. **work app** → clone to `/var/www/work-agualila`, `npm ci` (compiles
   `better-sqlite3`; `build-essential` is present), create the `agualila` service
   user, install `/etc/work-agualila/env` (generate a real `SESSION_SECRET`),
   install + `enable --now work-agualila.service`.
4. **Seed admins** → `scripts/create-admin.js` run as the `agualila` user against
   `/var/lib/work-agualila/data.db`.

Keep clones owned `truman:truman` (git refuses "dubious ownership"). The SQLite DB
lives in `/var/lib/work-agualila` (systemd `StateDirectory`), never in the clone.

> Private-repo clone auth: these repos are private, so `git clone` over HTTPS will
> prompt. Use a deploy key or a GitHub token on the box, or clone over SSH.

---

## Phase 4 — Caddy (append two blocks, reload)

The blocks are in `templesofrefuge.earth/infra/Caddyfile` **and**
`work.agualila.earth/infra/Caddyfile` (identical). Append to the box's file:

```
agualila.earth, www.agualila.earth {
    root * /var/www/agualila
    file_server
    encode zstd gzip
    header { ?Cache-Control "public, max-age=3600" }
}

work.agualila.earth {
    reverse_proxy 127.0.0.1:3200
}
```

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy      # certs auto-issue on first request once DNS resolves
```

---

## Phase 5 — Verify on the box BEFORE touching DNS

```bash
sudo systemctl status work-agualila --no-pager
sudo journalctl -u work-agualila -n 40 --no-pager   # "listening at http://127.0.0.1:3200"
sudo ss -tlnp | grep 3200                            # localhost only — never 0.0.0.0
sudo ss -tlnp | grep -E ':80|:443'                   # caddy still up
sudo ufw status                                      # still 22/80/443
```

---

## Phase 6 — DNS cutover at Namecheap (last)

Advanced DNS → Host Records. **The record TYPE matters** — an IP target must be an
**A record**, a hostname target a **CNAME** (that's the "enter a fully qualified
domain name" error: a CNAME can't point at an IP).

| Type | Host | Value | Note |
|------|------|-------|------|
| A | `@` | `89.167.41.185` | replaces the four `185.199.108–111.153` Pages records |
| A | `work` | `89.167.41.185` | **A, not CNAME** — points at an IP |
| CNAME | `www` | `agualila.earth.` | trailing dot; A → `89.167.41.185` also fine |
| CNAME | `biodome` | `trumanellis.github.io.` | **leave untouched** — stays on Pages |

Delete the old GitHub Pages `@` A records. Then verify TLS:

```bash
curl -I https://agualila.earth
curl -I https://work.agualila.earth
# and confirm the Writings feed loads real cards (not the fallback link)
```

**Rollback:** revert `@`/`www` to the GitHub Pages IPs (185.199.108–111.153). Keep
Pages live until the box is verified so rollback is instant.

---

## Phase 7 — Backups + ongoing releases

- Cron the SQLite backup: `15 3 * * * /var/www/work-agualila/infra/backup-db.sh`.
- **Static site release:** `git -C /var/www/agualila pull --ff-only`.
- **Work app release:** `git -C /var/www/work-agualila pull --ff-only && npm ci && sudo systemctl restart work-agualila`.
- **Shared JS / Worker change:** redeploy the Worker (`wrangler deploy`) and/or
  `git -C /var/www/templesofrefuge pull --ff-only`.
