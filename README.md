# Rapid Prototype Template

Reusable template for rapid web app prototyping with mock data and realistic UI flows.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- TanStack Query
- React Hook Form + Zod
- Mock data + `localStorage`
- Vitest + Playwright (optional test setup)

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```txt
src/
  app/
  components/
    layout/
    ui/
  features/
  lib/
    mock/
  mocks/
  test/
  types/
tests/
  e2e/
```

## Reuse Workflow (Fork-Friendly)

1. Fork this repository
2. Rename app metadata in `src/app/layout.tsx`
3. Create your first feature folder in `src/features`
4. Add seed data in `src/mocks`
5. Implement services using `src/lib/mock/delay.ts` and `src/lib/mock/storage.ts`

## Notes

- UI is intentionally minimal so each prototype can evolve in its own style.
- `components.json` is included so you can add shadcn/ui components quickly.
