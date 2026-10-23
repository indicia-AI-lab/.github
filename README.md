# .github

Organization-wide defaults, maintained by Hari.

| Path | What |
|-|-|
| `.github/workflows/security.yml` | Required on every PR to a default branch (org ruleset `golf2`): gitleaks, osv-scanner, trivy config, zizmor, semgrep, bandit. |
| `.github/workflows/nuclei.yml` | Reusable post-deploy nuclei check of a live URL. |
| `.github/PULL_REQUEST_TEMPLATE.md` | Default PR template for every repo without its own. |
| `workflow-templates/` | Starter workflows: Actions tab, "New workflow", section "By Indicia". |
| `templates/dependabot.yml` | Copy to `.github/dependabot.yml` in a repo. |

Rules in this organization: release tags `X.Y.Z` and `v*` only by team `release`; no force-push or deletion of a default branch; actions must be pinned to a full commit SHA; checks and builds run on GitHub-hosted `ubuntu-latest`.

Changing this repo changes every repo in the organization. Open a PR.
