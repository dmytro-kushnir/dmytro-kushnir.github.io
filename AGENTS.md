## Project summary

This repository powers `dmytro-kushnir.github.io`, a personal/teaching site hosted as a static React single-page application on GitHub Pages. It contains multiple course-focused apps (for example, Web Programming and Computer Architecture) and a small Firebase-based backend for a CSN Journal, all sharing a common component and configuration layer.

The Node/Express server in `server.js` is primarily for local development and SSR-style serving with Vite middleware; production deployment is a static build served by GitHub Pages.

## Tech stack and tools

**Frontend**
- React 18 (function components and hooks)
- TypeScript
- Vite with `@vitejs/plugin-react-swc`
- React Router v6 using `HashRouter`
- SCSS/Sass (including SCSS modules)
- Bootstrap 5 and React-Bootstrap
- React Icons
- React Slick and `slick-carousel`

**Backend / infrastructure**
- Firebase Cloud Functions v2 (`onRequest` HTTP functions)
- Firebase Admin SDK:
  - Firestore (for CSN Journal articles)
  - Storage (for uploaded article files)
  - App initialization
- Node.js + Express dev/SSR-style server (`server.js`) for local development

**Tooling**
- ESLint with TypeScript and React configurations (AirBnB and React App style configs)
- Vite ESLint plugin
- TypeScript compiler

## Repository structure

High-level layout:

- `src/main.tsx` – application entry point; bootstraps the home app, imports global styles, and loads configuration.
- `src/apps/home/App.tsx` – home-level router:
  - Wraps the app in a configuration provider.
  - Uses `HashRouter` to route to individual apps based on configuration (e.g. Web Programming, Computer Architecture).
  - Provides shared error and 404 handling.

- `src/apps/web-programming/App.tsx` – Web Programming course app:
  - Uses a `Layout` component (top bar, header, banner, footer, and `Outlet`).
  - Defines nested routes for home sections, lectures, labs, self-work, articles, and grades.
  - Uses `useConfig(appName)` and `AppNameProvider` to load course-specific data.

- `src/apps/computer-architecture/App.tsx` – Computer Architecture course app:
  - Mirrors the structure of the Web Programming app, with its own configuration and sections (lectures, labs, course work, variants, etc.).

- `src/components/*` – shared UI and layout components:
  - Examples: header, footer, topbar, banner, home-page sections, lecture and lab components, FAQ, articles, drive links, etc.

- `src/components/config/*` – configuration and mappings:
  - `config.ts` and `configMapping.ts` define which apps exist, their display names, and their base paths, using the `ConfigMapping` and `AppNames` types.

- `src/apps/csn-journal/functions/*` – CSN Journal Firebase backend:
  - `index.js` defines HTTP functions to:
    - Fetch all articles from the Firestore collection `csn-journal`.
    - Add a new article, upload an associated file to Firebase Storage, and store metadata in Firestore.
  - `seed/` contains emulator seeding utilities for Firestore and Storage.

- `server.js` – Express + Vite dev/SSR-style server:
  - Used mainly for local development.
  - Selects which HTML file to serve based on the URL and app directories.

## Editing rules for AI agents

When making changes in this repository, follow these rules:

1. **Preserve TypeScript and linting standards**
   - Keep types explicit and avoid introducing unnecessary `any`.
   - Run `npm run lint` after substantive changes and resolve new issues before committing.

2. **Follow existing architectural patterns**
   - For routing, mirror the patterns already used in `src/apps/web-programming/App.tsx` and `src/apps/computer-architecture/App.tsx` (nested routes under a `Layout` with `Outlet`).
   - For new sections or pages, prefer creating dedicated components under `src/components/*` and wiring them via routes.
   - Use `useConfig(appName)` and `AppNameProvider` for course-specific data instead of hardcoding large data structures in components.

3. **Keep URLs and public APIs stable**
   - Avoid changing existing route paths, Firestore collection names, or HTTP function signatures unless explicitly requested.
   - If a breaking change is required, document it clearly and, where possible, provide redirects or backward-compatible handling.

4. **Avoid unnecessary dependencies**
   - Do not introduce new major libraries for routing, state management, or styling without explicit instruction from the user.
   - Prefer using and extending existing stacks (React Router, SCSS, Bootstrap, React-Bootstrap) rather than mixing multiple UI frameworks.

5. **Respect separation of concerns**
   - Keep frontend course apps (React/Vite) and backend CSN Journal functions (Firebase) decoupled.
   - Do not embed backend secrets or environment-specific details into frontend code.
   - Treat `server.js` as development infrastructure; avoid coupling application logic tightly to it.

6. **Handle data and privacy carefully**
   - Assume Firestore and Storage may contain real student or article data in production.
   - Do not log sensitive content or expose internal metadata beyond what API responses are designed to return.

## Skills index

Agents working in this repository should use the following project skills as appropriate:

- **Project overview skill** (`.cursor/skills/project-overview/SKILL.md`)
  - Use for high-level context on how the repository is structured, what each app does, and which technologies are in use.

- **Frontend architecture skill** (`.cursor/skills/frontend-architecture/SKILL.md`)
  - Use when modifying React components, routes, layouts, or styles.
  - Covers routing conventions, shared components, configuration patterns, and styling practices.

- **CSN Journal backend skill** (`.cursor/skills/csn-journal-backend/SKILL.md`)
  - Use when working under `src/apps/csn-journal/functions`.
  - Documents HTTP endpoints, Firestore and Storage data models, emulator behavior, and safety constraints.

## How to extend these rules

- When adding new apps or major features:
  - Update configuration in `src/components/config/*` and, if needed, extend this `AGENTS.md` with any new global rules.
  - Prefer extending existing skills or adding new, focused skills under `.cursor/skills/` rather than overloading current ones.

