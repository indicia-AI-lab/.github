# .github

Organization-wide defaults, maintained by Hari.

| Path | What |
|-|-|
| `.github/workflows/security.yml` | Required on every PR to a default branch (org ruleset `golf2`): gitleaks, osv-scanner, trivy config, zizmor, semgrep, bandit. |
| `.github/workflows/nuclei.yml` | Reusable post-deploy nuclei check of a live URL. Pin it to a tag SHA (current: `v1.0.2`). |
| `.github/PULL_REQUEST_TEMPLATE.md` | Default PR template for every repo without its own. |
| `workflow-templates/` | Starter workflows: Actions tab, "New workflow", section "By Indicia". |
| `templates/dependabot.yml` | Copy to `.github/dependabot.yml` in a repo. |

## Releasing

| Tag | Who can create it | Branch | Environment | Image tags |
|-|-|-|-|-|
| `X.Y.Z` | team `release` | default branch only | `production` (prod VPS) | `:X.Y.Z`, `:latest` |
| `X.Y.Z-rc.N` | teams `developers` and `release` | any branch | `acceptance` (test VPS) | `:X.Y.Z-rc.N`, `:acc` |

The starter workflow "Indicia release naar Dokploy" routes on the tag name. To set up a repo:

1. Add the starter workflow and remove any older deploy workflow.
2. Create the environments `acceptance` (deployment tags `*-rc*`) and `production` (deployment tags `[0-9]*`).
3. Per environment, add the secret `DOKPLOY_WEBHOOK_URLS` (one URL per line, fired in order) or `DOKPLOY_WEBHOOK_URL`, and the variable `LIVE_URL`. Do not keep a repo-level webhook secret: an empty environment would use it.
4. Point the Dokploy app on the test VPS at `:acc` and the app on the prod VPS at `:latest`.

A repo that only runs in one environment leaves the other one empty. A tag for that environment builds, but the deploy job fails. The custom property `deploy_target` (`prod-vps`, `test-vps`, `mac-mini`, `none`) records where each repo deploys. Only org admins can set it.

`v*` tags and rc tags without the dot (`1.4.0-rc1`) do not start the release workflow.

## Rules

- Release tags as in the table above (org rulesets `golf1-release-tags` and `golf1-rc-tags`).
- No force-push or deletion of a default branch. Changes reach it only through a PR with a green `security` check.
- Only team `release` can change `.github/workflows/**`.
- Actions must be pinned to a full commit SHA.
- Checks and builds run on GitHub-hosted `ubuntu-latest`.

Full process: Indicia kennisbank, `processes/release-tags-acc-prod.md`.

Changing this repo changes every repo in the organization. Open a PR.
