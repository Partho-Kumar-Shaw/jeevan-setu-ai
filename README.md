# Jeevan Setu AI

Jeevan Setu AI is a TypeScript + React frontend scaffold (Vite) used as the UI layer for the Jeevan Setu project. It uses modern libraries and patterns (TanStack Router, React Query, Tailwind CSS, Radix UI components, and TypeScript) so you can build a responsive, accessible web interface quickly.

> NOTE: This repository appears to contain the frontend and light server/bootstrap code. If there are additional backend or AI model services they are not included here — connect or point to them from this UI.

## Key features

- TypeScript-first React app (React 19)
- Fast dev server and build with Vite
- TanStack Router + generated route tree (routeTree.gen.ts)
- TanStack React Query for data fetching and cache management
- Tailwind CSS configured for styling
- Radix UI components and other UI utilities preinstalled
- ESLint + Prettier configured

## Quick start

Prerequisites
- Node.js (>= 18 recommended) and npm (or bun if you prefer; this repo contains a `bun.lock` and `bunfig.toml`).

Install dependencies

```bash
# using npm
npm install

# or using bun
# bun install
```

Run the dev server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

Other useful scripts

- `npm run lint` — run ESLint
- `npm run format` — run Prettier to format code

## Project structure (high level)

- src/
  - components/ — reusable UI components
  - hooks/ — custom React hooks
  - lib/ — shared utilities and helpers
  - routes/ — route modules and pages
  - routeTree.gen.ts — generated route tree (used by the router)
  - router.tsx — router setup and route bindings
  - server.ts — lightweight server/bootstrap code (if used)
  - start.ts — client/server entry bootstrap
  - styles.css — global styles

See `src/README.md` for more detail on the source layout.

## Development notes

- routeTree.gen.ts is generated (by routing tooling). If you update route files, check your route generation step (the repo uses TanStack router plugins).
- Check `src/server.ts` and `src/start.ts` for how the app boots in dev vs production.

## Contributing

1. Fork the repo and create a feature branch.
2. Follow the existing code style and run `npm run lint` and `npm run format` before opening a PR.
3. Open a descriptive pull request; include screenshots or steps to reproduce UI changes.

