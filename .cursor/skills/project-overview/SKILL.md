---
name: dmytro-kushnir-project-overview
description: Provides an overview of the dmytro-kushnir.github.io repository, including its multi-app React/Vite frontend, Firebase CSN Journal backend, and when to use each part of the codebase. Use when you need high-level context about this project before making changes.
---

# Project Overview – dmytro-kushnir.github.io

## Purpose

This skill gives agents a concise mental model of the `dmytro-kushnir.github.io` repository so they can quickly understand what the project does, how it is structured, and which technologies it uses before editing any code.

Use this skill whenever you:
- First start working in this repo
- Need to decide where to add a new feature
- Need to understand which app or backend piece is responsible for a behavior

## What the project is

- Personal / teaching site hosted via GitHub Pages at `dmytro-kushnir.github.io`.
- Implements multiple course-oriented single-page applications (SPAs), plus a small Firebase-based backend for a CSN Journal.
- Frontend is a multi-app React + TypeScript application bundled with Vite and routed via `HashRouter`.
- Backend for the CSN Journal is implemented using Firebase Cloud Functions and the Firebase Admin SDK.

At a high level:
- `src/main.tsx` boots the **home** app.
- The home app uses React Router to redirect `/` into one of the configured apps (e.g. Web Programming, Computer Architecture).
- Each app has its own `App.tsx` and nested routes, but they share many layout and content components.
- The CSN Journal backend lives under `src/apps/csn-journal/functions` and exposes HTTP endpoints for reading and writing article data backed by Firestore and Firebase Storage.

## Tech stack overview

**Frontend**
- React 18
- TypeScript
- Vite with `@vitejs/plugin-react-swc`
- React Router v6 (with `HashRouter`)
- SCSS/Sass (`.scss` files, including modules)
- Bootstrap 5 and React-Bootstrap
- React Icons
- React Slick + `slick-carousel` for sliders

**Backend / server**
- Node.js + Express development/SSR-style server in `server.js`
  - Used mainly for local development; production hosting is static via GitHub Pages.
- Firebase Cloud Functions v2 (`onRequest` HTTP functions)
- Firebase Admin SDK:
  - Firestore (`getFirestore`, `FieldValue`)
  - Storage (`getStorage`)
  - App initialization (`initializeApp`)

**Tooling and quality**
- ESLint with TypeScript and React rules
- AirBnB / React App style configs
- Vite ESLint plugin

## Repository structure (high level)

Key paths:

- `src/main.tsx`
  - Entry point that renders the home app, imports global styles, and loads configuration.

- `src/apps/home/App.tsx`
  - Home-level router.
  - Wraps the application in a configuration provider and a `HashRouter`.
  - Redirects `/` to the default course app (from `config.apps.*.appPath`).

- `src/apps/web-programming/App.tsx`
  - Web Programming course SPA.
  - Uses a `Layout` component (top bar, header, banner, footer, `Outlet`) plus nested routes for:
    - Home page sections (course intro, short/full info, lectures/labs sections, LeetCode tasks, points distribution, FAQ).
    - Per-lecture pages.
    - Per-lab pages.
    - Self-work, articles, grades.

- `src/apps/computer-architecture/App.tsx`
  - Computer Architecture course SPA.
  - Very similar structure to the Web Programming app, with variations such as course work and variants pages.

- `src/components/*`
  - Shared UI components used across apps (header, footer, top bar, banner, sections, etc.).

- `src/components/config/*`
  - Application configuration, including:
    - `config.ts` – exports a `ConfigMapping` object that lists available apps and their paths.
    - `configMapping.ts` – defines types and mapping utilities for app names and paths.

- `src/apps/csn-journal/functions/*`
  - Firebase Cloud Functions (compiled JavaScript) for the CSN Journal.
  - Exposes HTTP endpoints for:
    - Getting a list of journal articles from Firestore.
    - Adding new articles and storing associated files in Firebase Storage.
  - Includes emulator-aware seeding utilities under `seed/` for Firestore and Storage.

## How to decide where to work

Use this quick guide when deciding where to implement a change:

- **Change to Web Programming course content or behavior**
  - Start in `src/apps/web-programming/App.tsx` to see routes.
  - Then drill into `src/components/*` for specific sections (lectures, labs, FAQ, etc.).

- **Change to Computer Architecture course content or behavior**
  - Start in `src/apps/computer-architecture/App.tsx`.
  - Mirror patterns used in the Web Programming app whenever possible.

- **Change to top-level routing between apps**
  - Start in `src/apps/home/App.tsx` and `src/components/config/*`.
  - Update app mappings and paths via config rather than hardcoding URLs in many places.

- **Change to shared layout or visual design**
  - Look under `src/components/` for layout components (header, footer, topbar, banner).
  - Update SCSS in `src/main.scss`, `src/_variables.scss`, or module `.scss` files associated with the relevant component.

- **Change to CSN Journal backend behavior or schemas**
  - Work under `src/apps/csn-journal/functions`.
  - Consult the dedicated CSN Journal backend skill (see that skill for details and safety rules).

## High-level rules for agents

When editing this repo:

- Prefer following existing patterns over inventing new architectures, especially for:
  - Routing structures
  - Layout components
  - Course data configuration
- Keep route shapes, query parameters, and public data schemas backward compatible unless the user explicitly requests a breaking change.
- Avoid introducing new major frameworks (routing, state management, styling) without explicit instruction.
- Respect the separation between:
  - Frontend course apps (React/Vite)
  - Backend CSN Journal functions (Firebase)
  - Editor/server tooling (Express + Vite dev server)

For detailed frontend conventions (routing, styling, shared components), use the **frontend architecture** skill in this project.
For Firebase-specific behavior and data model, use the **CSN Journal backend** skill.

