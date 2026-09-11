# Releasing the Illinois Framework

This guide explains how to cut a release of the Illinois Framework Drupal distribution,
which spans three repositories. It is written for maintainers who trigger releases.

- **Theme** — [`web-illinois/illinois_framework_theme`](https://github.com/web-illinois/illinois_framework_theme)
- **Core module** — [`web-illinois/illinois_framework_core`](https://github.com/web-illinois/illinois_framework_core)
- **Profile / distribution** — [`web-illinois/illinois_framework_profile`](https://github.com/web-illinois/illinois_framework_profile)

Each repository ships a manual **"Create New Release"** GitHub Actions workflow
(`.github/workflows/create-release.yml`) that does the heavy lifting: it stamps the
version into the `.info.yml`, assembles release notes from the issues closed in the
release, commits, tags, and opens a **draft** GitHub Release for you to review and publish.

---

## How the repos fit together

```
illinois_framework_profile  (distribution / install profile)
├── requires web-illinois/illinois_framework_core   (composer.json)
└── requires web-illinois/illinois_framework_theme  (composer.json)
```

The profile pins its `core` and `theme` dependencies to the **major.minor** of the
release. Releasing profile `5.2.0` rewrites those two `composer.json` constraints to
`~5.2.0` (i.e. `>=5.2.0 <5.3.0`): the major.minor stays in sync while the patch level may
differ between the profile and the modules.

### ⭐ Golden rule: release order

> **Release the core and theme first (either order), then release the profile.**

The profile release refuses to run unless a matching `MAJOR.MINOR.*` release already
exists in **both** the core and theme repositories. This prevents publishing a profile
release that cannot `composer install`.

---

## What every "Create New Release" run does

All three repositories share the same base workflow. When you run it, it:

1. Verifies the target tag does **not** already exist.
2. Stamps a packaging block into the `.info.yml`
   (`version` / `project` / `datestamp`), mirroring Drupal.org's packaging script.
3. Builds the release body: a `## Release Notes` heading with a summary placeholder, an
   `### Issues Closed` list, and GitHub's generated `## What's Changed` pull-request list
   (see [How the notes are built](#how-the-release-notes-are-built)).
4. Commits the version bump, creates the tag, and **pushes only the tag** — the protected
   branch (e.g. `5.x`) is never pushed to, so branch protection is preserved. The tag is
   pushed using a short-lived **GitHub App** token that is on the tag ruleset's bypass list
   (see [Release GitHub App](#release-github-app-tag-pushes)).
5. Opens a **draft** GitHub Release with that body. You replace the summary placeholder,
   review, and publish it manually.

### How the release notes are built

The body is assembled deterministically — there is no AI involved and no third-party API
key required:

```markdown
## Release Notes

_Add a short summary of this release here before publishing._   <- you replace this

### Issues Closed
- Adjust spotlight paragraph field order to reflect order on front-end (#198)
- Add filter to News view for scheduled posts (web-illinois/illinois_framework_theme#1339)

## What's Changed
* ...one line per merged pull request...
**Full Changelog**: .../compare/5.2.0...5.2.1
```

- **Issues Closed** comes from the issues **linked to each merged pull request** — the
  ones listed in the PR sidebar's **Development** section, i.e. linked with a closing
  keyword (`Fixes #123`) or attached manually. Issues tracked in a *sibling* repository
  are included and rendered fully qualified
  (`web-illinois/illinois_framework_theme#1339`), which matters because core and profile
  work is often tracked in theme issues.
- **What's Changed** is GitHub's own generated pull-request list, so a PR with no linked
  issue is still listed there — nothing is silently dropped.
- The **previous release** that scopes both lists is computed by the workflow itself: the
  highest `MAJOR.MINOR.PATCH` tag **strictly below** the version being released (so
  releasing `5.2.2` compares against `5.2.1`, even if a `6.0.0` tag already exists). That
  tag is passed explicitly to GitHub's release-notes API — GitHub is never asked to guess
  it (see [wrong previous tag](#notes--troubleshooting)).

> **Tip:** the richness of "Issues Closed" depends entirely on PRs being linked to their
> issues. Linking an issue in the PR's **Development** panel is what makes it appear.

The **profile** workflow additionally: validates the version is strict
`MAJOR.MINOR.PATCH`, verifies matching core/theme releases exist, and pins the
`core`/`theme` constraints in `composer.json` to `~MAJOR.MINOR.0`.

### Common trigger steps

For any repo:

1. Open the repository on GitHub → **Actions** tab.
2. Select **"Create New Release"** in the left sidebar.
3. Click **Run workflow**.
4. **Choose the branch to release from** in the **"Use workflow from"** dropdown. This
   selection is what decides the release target (see
   [Which branch gets released?](#which-branch-gets-released) below) — leave it on the
   default (`5.x`) for a normal release.
5. Enter the **version** as `MAJOR.MINOR.PATCH` (e.g. `5.2.0`) — no `v` prefix, no suffix.
6. (Optional) Set **dry_run** to `true` to preview the generated `.info.yml`, the exact
   release notes (and, for the profile, the pinned `composer.json`) in the run summary
   **without** committing, tagging, or releasing.
7. Click **Run workflow** and wait for it to finish.
8. Go to **Releases**, open the new **draft**, review/edit the notes, and **Publish**.

### Which branch gets released?

The workflow is triggered with `workflow_dispatch`, so the target is **whichever branch you
pick in the "Use workflow from" dropdown** — it is *not* hardcoded in the workflow.

- The dropdown **defaults to the repository's default branch** (currently `6.x`), which is
  why a normal release is just "leave it on the default." Selecting a different branch (e.g. a
  maintenance `5.x`) would release from that branch instead.
- The **Checkout** step sets no explicit `ref:`, so it checks out the tip of the branch you
  selected. The workflow then commits the version bump **on top of that tip** and tags **that
  new commit**.
- **Only the tag is pushed** (`git push origin refs/tags/X.Y.Z`); the branch itself is never
  pushed to. The version-bump commit therefore exists *only* as the tagged commit — it is
  reachable through the tag, not through `5.x`. That is why `5.x` stays at `5.x-dev` and its
  history does not gain the bump commit, while Composer (which installs from the tag) still
  gets the correct pinned `version`/metadata.

> ⚠️ Because the branch comes from the dropdown, changing it releases from a **different**
> branch. Double-check the **"Use workflow from"** value before running — there is currently
> no guard that forces releases to originate from a specific branch.

---

## Step-by-step

### 1. Release the Theme — `illinois_framework_theme`

1. Decide the version (e.g. `5.2.0`).
2. In the theme repo: **Actions → "Create New Release" → Run workflow**, branch `5.x`,
   version `5.2.0`. Use **dry_run** first if you want to preview.
3. Run it. The workflow stamps `illinois_framework_theme.info.yml`, tags `5.2.0`, and
   opens a draft release.
4. Open the draft under **Releases**, review the notes, and **Publish**.

### 2. Release the Core module — `illinois_framework_core`

1. Use the **same** version you released for the theme (e.g. `5.2.0`) so the major.minor
   line up.
2. In the core repo: **Actions → "Create New Release" → Run workflow**, branch `5.x`,
   version `5.2.0`.
3. Run it. The workflow stamps `illinois_framework_core.info.yml`, tags `5.2.0`, and opens
   a draft release.
4. Open the draft, review, and **Publish**.

> The theme and core can be released in either order — both must be done **before** the
> profile.

### 3. Release the Profile — `illinois_framework_profile`

Only after core **and** theme have matching `MAJOR.MINOR.*` releases published.

1. In the profile repo: **Actions → "Create New Release" → Run workflow**, branch `5.x`,
   version `5.2.0`.
2. Before doing anything destructive, the workflow will:
   - Validate the version is strict `MAJOR.MINOR.PATCH`.
   - Derive the constraint `~5.2.0`.
   - **Verify** that a `5.2.*` release tag exists in **both** core and theme. If either is
     missing, the run **fails** with a clear message — go back and release the missing one.
3. It then pins `web-illinois/illinois_framework_core` and
   `web-illinois/illinois_framework_theme` in `composer.json` to `~5.2.0`, stamps
   `illinois_framework.info.yml`, tags `5.2.0`, and opens a draft release.
   (The pinned `composer.json` lives only in the tagged commit; the `5.x` branch keeps
   `5.x-dev`.)
4. Open the draft, review, and **Publish**.

> **Tip:** run the profile workflow with **dry_run = true** first. The run summary shows
> the generated `.info.yml`, the pinned `composer.json` `require` block, and the exact
> release-notes body, so you can confirm the constraints and the "Issues Closed" list
> before the real run.

---

## Worked example: releasing 5.2.0 across the distribution

1. **Theme** → Create New Release → `5.2.0` → publish the draft.
2. **Core** → Create New Release → `5.2.0` → publish the draft.
3. **Profile** → Create New Release → `5.2.0`.
   - Passes the existence check (theme `5.2.0` and core `5.2.0` now exist).
   - Pins `core` and `theme` to `~5.2.0` in `composer.json`.
   - Publish the draft.

Patch releases can diverge afterward: e.g. core may later ship `5.2.3` while the profile
stays at `5.2.0` — the `~5.2.0` constraint still allows it.

---

## Setup: Secrets & Variables

The **"Create New Release"** workflow needs the following configured in **each** of the
three repositories (identical values). Set them under
**Settings → Secrets and variables → Actions**.

### Secrets (Settings → Secrets and variables → Actions → *Secrets* tab)

| Name | Purpose |
| --- | --- |
| `RELEASE_APP_CLIENT_ID` | The **Client ID** of the release GitHub App (see [Release GitHub App](#release-github-app-tag-pushes)). The workflow exchanges this plus the private key for a short-lived installation token that pushes the tag. |
| `RELEASE_APP_PRIVATE_KEY` | A **private key** (`.pem` contents, including the `-----BEGIN/END-----` lines) for the release GitHub App. |
| `GITHUB_TOKEN` | **Automatic** — provided by GitHub Actions; you do not create it. The workflow declares `permissions: contents: write` (to create the draft release) and `issues: read` (to read the issues linked to each pull request). The **tag push** uses the App token instead (see below). |

> **No longer used:** earlier versions of the workflow drafted the notes with Azure
> OpenAI. That step has been removed, so the `AZURE_OPENAI_API_KEY` secret and the
> `AZURE_OPENAI_BASE_URL` / `AZURE_OPENAI_MODEL` variables are unused and can be deleted
> from all three repositories.

### Release GitHub App (tag pushes)

The repositories protect tags with a ruleset (**Restrict creations** / **Restrict updates**
on `refs/tags/**`). The automatic `GITHUB_TOKEN` acts as `github-actions[bot]`, which is
**not** on the bypass list, so it cannot create the release tag (`GH013: Cannot create ref
due to creations being restricted`). To push the tag while keeping the ruleset in force, the
workflow authenticates as a **GitHub App** that *is* on each ruleset's bypass list.

The App mints a fresh, ~1-hour installation token on every run (via
`actions/create-github-app-token`), so there is **no long-lived token to rotate** — only the
Client ID and private key are stored as secrets.

**One-time setup (org owner):**

1. **Create the App** — `web-illinois` org → **Settings → Developer settings → GitHub Apps
   → New GitHub App**.
   - Name: e.g. `illinois-framework-release`.
   - Homepage URL: any valid URL (unused).
   - **Uncheck** Webhook → Active.
   - **Repository permissions → Contents: Read and write** (the only permission needed).
   - Where can this app be installed? → **Only on this account**.
   - **Create GitHub App**, then note the **Client ID** (shown on the App's
     **General** settings page).
2. **Generate a private key** — on the App page → **Private keys → Generate a private key**;
   a `.pem` downloads (shown only once).
3. **Install the App** — App page → **Install App** → install on `web-illinois` → **Only
   select repositories** → `illinois_framework_theme`, `illinois_framework_core`,
   `illinois_framework_profile`.
4. **Store the secrets** — in **each** repo, add `RELEASE_APP_CLIENT_ID` (the Client ID) and
   `RELEASE_APP_PRIVATE_KEY` (the full `.pem` contents). *Org-level secrets scoped to the
   three repos also work, so you set them once.*
5. **Add the App to each tag ruleset bypass list** — in **each** repo → **Settings → Rules →
   Rulesets** → open the tag ruleset → **Bypass list → Add bypass** → select the App →
   **Save changes**. Keep **Restrict creations / updates** enabled — the App on the bypass
   list is what lets the release workflow through while everything else stays protected.

### Variables (Settings → Secrets and variables → Actions → *Variables* tab)

None. The workflow needs no Actions *variables* — only the two `RELEASE_APP_*` secrets
above (plus the automatic `GITHUB_TOKEN`).

---

## Notes & troubleshooting

- **"Tag `X.Y.Z` already exists"** — the version was already released. Pick a new version,
  or delete the existing tag if it was created in error.
- **Profile: "`illinois_framework_core`/`illinois_framework_theme` has no `X.Y.*`
  release"** — you skipped the golden rule. Release the missing core/theme version first,
  then re-run the profile workflow.
- **An issue is missing from "Issues Closed"** — the list is built from the issues linked
  to each merged PR (the PR sidebar's **Development** section). A PR that closes an issue
  only by mentioning it in prose is *not* linked; link it in the Development panel, or use
  a closing keyword such as `Fixes #123` in the PR description. The PR itself still
  appears under "What's Changed" either way. The section is omitted entirely when no PR in
  the range has a linked issue.
- **"Some linked issues could not be read"** (warning) — the workflow could read most, but
  not all, linked issues (for example one lives in a repository the token cannot see). The
  release still proceeds with whatever resolved; add anything missing by hand in the draft.
- **"GH013: Cannot create ref due to creations being restricted"** (tag push fails) — the
  release GitHub App is not authenticating or is not on the tag ruleset bypass list. Confirm
  `RELEASE_APP_CLIENT_ID` / `RELEASE_APP_PRIVATE_KEY` are set in that repo, the App is installed on
  it, and the App is on the tag ruleset's **Bypass list** (see
  [Release GitHub App](#release-github-app-tag-pushes)).
- **Preview without side effects** — run with **dry_run = true**. Nothing is committed,
  tagged, or released; the generated files are printed in the run summary.
- **Nothing is pushed to the protected branch** — the workflow pushes only the tag. The
  version bump (and, for the profile, the `composer.json` pin) exists on the tagged commit,
  which is what Composer installs. The `5.x` branch keeps `5.x-dev`.
- **Drafts are not auto-published** — every release is created as a **draft** on purpose.
  Replace the summary placeholder, review the notes, then publish manually.
- **Draft shows the wrong previous tag / "Full Changelog"** — historically GitHub was
  asked to infer the previous release (`generate_release_notes: true`). Because the
  workflow tags an **off-branch** version-bump commit (only the tag is pushed), earlier
  release tags are not ancestors of the new tag, so GitHub skipped them and fell back to
  the last tag that *was* in the branch history — e.g. core `5.2.1` compared against
  `5.1.0` instead of `5.2.0`. The workflow now computes the previous tag itself (highest
  `MAJOR.MINOR.PATCH` tag below the version being released) and passes it to the
  `releases/generate-notes` API as `previous_tag_name`. The step logs
  `Generated notes against previous tag: X.Y.Z` — check it in the run log if a changelog
  still looks off. Already-published releases are not corrected retroactively; edit their
  bodies by hand if needed.
- **Version format** — always `MAJOR.MINOR.PATCH`, no `v` prefix and no pre-release/build
  suffix (the profile enforces this strictly).
