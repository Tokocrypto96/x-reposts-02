# x-reposts-02 — make.fun $500 X Reposts Bounty

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/Tokocrypto96/x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/Tokocrypto96/x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the [make.fun](https://make.fun/bounty/makefun-x-reposts-02?ref=zxv8k0jn) bounty **makefun-x-reposts-02** — "Get the most reposts and likes on make.fun's newest X posts", $500 prize pool, top 50 share it.

## How it works

My posts on X (account [@semigajepe](https://x.com/semigajepe)) each quote or directly reply to a different one of [@makefunai](https://x.com/makefunai)'s newest posts. Every repost and quote of my posts scores 2 points, every like 1 point. The list of my posts lives in [`POSTS.json`](POSTS.json).

## Files

- [`POSTS.json`](POSTS.json) — the list of my X posts entered in this bounty (1–15 posts)
- [`main.ts`](main.ts) — entrypoint: copies `POSTS.json` to `/output` (Node 22)
- [`X-POST.txt`](../X-POST.txt) — the drafted X post text (in the workspace, not the repo)
- [`promo.png`](../promo.png) — promo image for the X post (in the workspace, not the repo)

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Links

- Bounty: https://make.fun/bounty/makefun-x-reposts-02
- make.fun (referral code `zxv8k0jn`): https://make.fun/?ref=zxv8k0jn
- X account: https://x.com/semigajepe

## License

MIT — see [LICENSE](LICENSE).
