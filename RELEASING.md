# Releasing the Illinois Framework

This guide explains how to cut a release of the Illinois Framework Drupal distribution,
which spans three repositories. It is written for maintainers who trigger releases.

- **Theme** — [`web-illinois/illinois_framework_theme`](https://github.com/web-illinois/illinois_framework_theme)
- **Core module** — [`web-illinois/illinois_framework_core`](https://github.com/web-illinois/illinois_framework_core)
- **Profile / distribution** — [`web-illinois/illinois_framework_profile`](https://github.com/web-illinois/illinois_framework_profile)

Each repository ships a manual **"Create New Release"** GitHub Actions workflow
(`.github/workflows/create-release.yml`) that does the heavy lifting: it stamps the
version into the `.info.yml`, drafts AI-generated release notes, commits, tags, and opens
a **draft** GitHub Release for you to review and publish.

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
3. Drafts a `## Release Notes` section with AI from the commit log since the last tag
   (see [Setup](#setup-secrets--variables)).
4. Commits the version bump, creates the tag, and **pushes only the tag** — the protected
   branch (e.g. `5.x`) is never pushed to, so branch protection is preserved.
5. Opens a **draft** GitHub Release with the AI notes plus GitHub's auto-generated
   "What's Changed" list. You review, edit, and publish it manually.

The **profile** workflow additionally: validates the version is strict
`MAJOR.MINOR.PATCH`, verifies matching core/theme releases exist, and pins the
`core`/`theme` constraints in `composer.json` to `~MAJOR.MINOR.0`.

### Common trigger steps

For any repo:

1. Open the repository on GitHub → **Actions** tab.
2. Select **"Create New Release"** in the left sidebar.
3. Click **Run workflow**.
4. Leave the branch set to the default (`5.x`).
5. Enter the **version** as `MAJOR.MINOR.PATCH` (e.g. `5.2.0`) — no `v` prefix, no suffix.
6. (Optional) Set **dry_run** to `true` to preview the generated `.info.yml`
   (and, for the profile, the pinned `composer.json`) in the run summary **without**
   committing, tagging, or releasing.
7. Click **Run workflow** and wait for it to finish.
8. Go to **Releases**, open the new **draft**, review/edit the notes, and **Publish**.

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
> the generated `.info.yml` and the pinned `composer.json` `require` block so you can
> confirm the constraints before the real run.

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
| `AZURE_OPENAI_API_KEY` | API key for the Azure OpenAI / Foundry deployment used to draft the release notes. |
| `GITHUB_TOKEN` | **Automatic** — provided by GitHub Actions; you do not create it. The workflow declares `permissions: contents: write` so this token can commit, tag, and create the release. |

### Variables (Settings → Secrets and variables → Actions → *Variables* tab)

| Name | Purpose | Example |
| --- | --- | --- |
| `AZURE_OPENAI_BASE_URL` | The Azure OpenAI **v1** API base URL. | `https://uiuc-las-ai-agent.openai.azure.com/openai/v1` |
| `AZURE_OPENAI_MODEL` | The model **deployment** name. | `gpt-5.6-luna` |

> All three repos (`theme`, `core`, `profile`) use the same three names. If the Azure
> OpenAI secret/variables are missing, the release-notes step fails fast with a clear
> error before anything is committed.

---

## Notes & troubleshooting

- **"Tag `X.Y.Z` already exists"** — the version was already released. Pick a new version,
  or delete the existing tag if it was created in error.
- **Profile: "`illinois_framework_core`/`illinois_framework_theme` has no `X.Y.*`
  release"** — you skipped the golden rule. Release the missing core/theme version first,
  then re-run the profile workflow.
- **"Missing Azure OpenAI config"** — set the `AZURE_OPENAI_API_KEY` secret and the
  `AZURE_OPENAI_BASE_URL` / `AZURE_OPENAI_MODEL` variables in that repo (see
  [Setup](#setup-secrets--variables)).
- **Preview without side effects** — run with **dry_run = true**. Nothing is committed,
  tagged, or released; the generated files are printed in the run summary.
- **Nothing is pushed to the protected branch** — the workflow pushes only the tag. The
  version bump (and, for the profile, the `composer.json` pin) exists on the tagged commit,
  which is what Composer installs. The `5.x` branch keeps `5.x-dev`.
- **Drafts are not auto-published** — every release is created as a **draft** on purpose.
  Review and edit the AI-drafted notes, then publish manually.
- **Version format** — always `MAJOR.MINOR.PATCH`, no `v` prefix and no pre-release/build
  suffix (the profile enforces this strictly).
