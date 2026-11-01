# Heart of the Forest Dramatic Society

Website for the Heart of the Forest Dramatic Society, a community panto charity group.

Built with Next.js, Tailwind CSS and shadcn/ui. Hosted on our own server with Dokploy.

## Run it locally

You need Node.js 24 (`nvm use` picks it up from `.nvmrc`).

```bash
cp .env.example .env.local   # then fill in the values
npm ci
npm run dev
```

Open http://localhost:3000.

Before pushing, run the same checks as CI:

```bash
npm run lint
npm run build
```

## Branches

- `main` is always deployable. Changes reach it only through pull requests.
- Work on a short-lived branch named by type:

| Prefix | For |
| --- | --- |
| `feat/` | New pages or features |
| `fix/` | Bug fixes |
| `content/` | Show listings, text and photo updates |
| `chore/` | Dependencies, config, tidying |

```bash
git checkout main && git pull
git checkout -b content/spring-panto
# ...make changes, commit...
git push -u origin content/spring-panto
```

Open a pull request, wait for the **build** check to pass, then squash-merge.

## Releases

Merging to `main` does not change the live site. Pushing a tag does.

Tags use the date: `vYYYY.MM.N`, e.g. `v2026.11.0`, then `v2026.11.1` for the next release that month.

```bash
git checkout main && git pull
git tag v2026.11.0
git push origin v2026.11.0
```

The **Release** workflow builds a Docker image and pushes it to
`ghcr.io/deadpandev/heart-of-the-forest-dramatic-society-website-new:<tag>`.
It then points the Dokploy app at that tag and deploys it, so a tag push is all a release needs.

To roll back, set an earlier tag in Dokploy (Provider → Docker Image) and press Deploy.

The deploy step uses these secrets, stored in the `DOKPLOY` environment (Settings → Environments → DOKPLOY):

| Secret | Value |
| --- | --- |
| `DOKPLOY_URL` | Dokploy dashboard address, e.g. `https://dokploy.example.com` |
| `DOKPLOY_API_KEY` | API key from your Dokploy profile settings |
| `DOKPLOY_APPLICATION_ID` | The ID at the end of the app's URL in Dokploy |
| `GHCR_USERNAME`, `GHCR_PULL_TOKEN` | Only if the GHCR package is private: your GitHub username and a classic token with `read:packages` |

If `DOKPLOY_URL` isn't set, the deploy step is skipped and you set the tag in Dokploy by hand.

## Environment variables

| Variable | Where it's set | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | GitHub → Settings → Secrets and variables → Actions → Variables | Baked in at build time |

`NEXT_PUBLIC_*` values are built into the image. Each one needs a GitHub repository
variable, an `ARG` + `ENV` pair in the `Dockerfile`, and an entry in both workflows.

Server-only secrets go in Dokploy → Environment. Never commit secrets; `.env*.local` is ignored by Git.
