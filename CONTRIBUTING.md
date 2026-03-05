# Contributing Guide

This project is a reusable template for rapid prototyping.

## Repository Model

1. `template repo` = this repository (keep only reusable foundation)
2. `prototype repo` = create a new repository from template for each prototype
3. Do not build multiple unrelated prototypes in one repository

## Create a New Prototype Repo

1. Use **Use this template** on GitHub from this repository
2. Clone the new prototype repository
3. Create your first feature branch

```bash
git clone <new-prototype-repo-url>
cd <new-prototype-repo>
git switch -c feat/first-feature
```

## Branch Strategy (Prototype Repo)

1. `main` = stable demo branch
2. Short-lived working branches:
   - `feat/<feature-name>`
   - `fix/<bug-name>`
   - `chore/<task-name>`
   - `docs/<topic>`

Examples:

- `feat/contact-list`
- `feat/add-contact`
- `fix/search-empty-state`

## Branch Strategy (Template Repo)

Use this only for reusable improvements:

- `feat/template-<capability>`
- `chore/template-<maintenance>`
- `docs/template-<topic>`

Do not add business-specific feature branches in template repo.

## Commit Convention

Use Conventional Commits:

- `feat: add contact list page shell`
- `fix: handle empty search results`
- `chore: update lint config`
- `docs: add setup notes`

## Pull Request Rules

1. One PR should focus on one purpose/scope
2. Use clear title: `feat: <summary>` or `fix: <summary>`
3. Include:
   - what changed
   - why it changed
   - screenshots (desktop + mobile) for UI changes
4. Confirm local checks before merge:

```bash
npm run lint
npm run test
```

If e2e is configured:

```bash
npm run test:e2e
```

## Definition of Done (Prototype Feature)

1. Flow is clickable end-to-end
2. Responsive on mobile and desktop
3. Handles loading, empty, and error states
4. Uses mock service layer (no direct UI-level fake logic)
5. PR is reviewed and merged to `main`

## Recommended Day-to-Day Flow

1. Pull latest `main`
2. Create branch from `main`
3. Develop feature
4. Rebase or merge `main` if needed
5. Open PR
6. Merge PR to `main`

```bash
git switch main
git pull origin main
git switch -c feat/<feature-name>
```
