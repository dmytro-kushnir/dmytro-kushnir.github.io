---
name: dmytro-kushnir-frontend-architecture
description: Describes the React/Vite frontend architecture, routing patterns, shared components, and styling conventions for the dmytro-kushnir.github.io project. Use when modifying React components, routes, or styles in this repository.
---

# Frontend Architecture – dmytro-kushnir.github.io

## Purpose

This skill explains how the React/Vite frontend is structured, how routing and configuration work, and how to make safe, consistent UI changes.

Use this skill whenever you:
- Add or modify React components or routes
- Adjust page structure, navigation, or layout
- Change styles or introduce new UI patterns

## Core technologies

- React 18 with function components and hooks
- TypeScript for type safety
- Vite with `@vitejs/plugin-react-swc` for bundling and dev server
- React Router v6, primarily using `HashRouter`
- SCSS/Sass, including SCSS modules for per-component styling
- Bootstrap 5 and React-Bootstrap for layout and utilities
- React Icons for iconography
- React Slick and `slick-carousel` for sliders and carousels

## Entry point and app selection

- `src/main.tsx`:
  - Imports `React`, `ReactDOM`, global styles, and config.
  - Renders the **home** app (`src/apps/home/App.tsx`) into the `root` DOM node.

- `src/apps/home/App.tsx`:
  - Wraps the app with `ConfigProvider` using configuration from `src/components/config/*`.
  - Uses `HashRouter` plus `Routes` and `Route` to:
    - Redirect `/` to the default app path (e.g. `web-programming/`) based on config.
    - Mount each course app under its configured base path.
    - Provide shared error handling routes (`/error`, `*` -> `NoMatch`).

### Guidelines

- When adding a new top-level app:
  - Define its config in `src/components/config/apps/*.ts`.
  - Add it to `config.ts` and `configMapping.ts`.
  - Register it in `src/apps/home/App.tsx` as a new `Route` with a unique base path.
- Do not hardcode app paths in many places. Use the config-based mapping instead.

## Per-app architecture

Each course app (e.g. Web Programming, Computer Architecture) follows a similar structure.

### Example: Web Programming app

File: `src/apps/web-programming/App.tsx`

Key ideas:
- Wraps content in an `AppNameProvider` so child components can infer which app is active.
- Uses `useConfig(appName)` to pull in:
  - `faviconLink`
  - `title`
  - `lecturesList`
  - `labList`
- Calls `useAppHead(faviconLink, title)` to set document `<title>` and favicon.
- Uses a `Layout` component that renders:
  - `TopBar`
  - `Header` with flags to show/hide menu sections
  - `Banner`
  - `<Outlet />` for nested routes
  - `Footer`
- Uses a nested `Routes` tree under the base path:
  - Index route rendering `HomePage`, which composes:
    - `CourseIntro`
    - `CourseShortInfo`
    - `CourseFullInfo`
    - `LecturesInfo`
    - `LabsSection`
    - `LeetCodeTasksSection`
    - `PointsDistributionSection`
    - `Faq`
  - Per-lecture routes using `Lecture` components.
  - Per-lab routes using `Lab` components.
  - Additional sections like `SelfWork`, `Articles`, `DriveLinks` for grades, and error / 404 routes.

### Example: Computer Architecture app

File: `src/apps/computer-architecture/App.tsx`

Pattern:
- Very similar structure to the Web Programming app, with:
  - `Layout` including `TopBar`, `Header`, `Banner`, `Footer`, and `Outlet`.
  - `HomePage` assembled from shared home-page components.
  - Nested routes for lectures, labs, course work, articles, grades, variants, etc.

### Guidelines

- When adding a new section (e.g. “Projects”, “References”):
  - Prefer adding a new route under the relevant app’s `App.tsx`.
  - Use a dedicated component under `src/components/*` when it may be reused across apps.
- When modifying one course app:
  - Consider whether the other course app should mirror the change for consistency.
  - Keep differences intentional and documented (e.g. Web Programming has LeetCode tasks; Computer Architecture has course work/variants).

## Routing conventions

- Use **React Router v6** components:
  - `HashRouter` at the home app level.
  - `Routes` and nested `Route` components inside each app.
  - `Outlet` for layouts that wrap nested routes.
- Base paths:
  - Determined by configuration (e.g. `web-programming`, `computer-architecture`).
  - Mounted via `src/apps/home/App.tsx`.

### Best practices

- Prefer path patterns like:
  - `/lectures/:id` – for lecture detail pages.
  - `/labs/:id` – for lab detail pages.
  - `/self-work`, `/articles`, `/grades`, etc. – for sections.
- Always keep a `NoMatch` route (`*`) in each app to handle unknown paths gracefully.
- Maintain an `error` route that can be navigated to programmatically when needed.
- Be careful when changing paths:
  - These URLs can be referenced from course materials or external documents.
  - If you must change a path, consider adding redirect logic or clear documentation.

## Configuration and data sources

- `src/components/config/config.ts` and `configMapping.ts`:
  - Define which apps exist, their display names, and base paths.
  - Provide type-safe mappings via `ConfigMapping` and `AppNames`.

- `useConfig(appName)`:
  - Returns app-specific config such as `faviconLink`, `title`, `lecturesList`, `labList`, etc.
  - Components should rely on `useConfig` rather than hardcoding lists of lectures or labs.

- `AppNameProvider`:
  - Context provider that makes the current app name available throughout the component tree.

### Guidelines

- When introducing new course data:
  - Add it to the configuration (lectures, labs, links, etc.) instead of scattering constants in components.
  - Keep data and presentation separate where reasonable: config defines what exists, components define how it’s rendered.

## Styling conventions

- Global styles:
  - `src/main.scss` imports shared styles and variables.
  - `_variables.scss` defines color palette, spacing, and other design tokens.

- Component and app styles:
  - Use SCSS modules (e.g. `App.module.scss`) for app-specific layout and styles.
  - For shared components, use their own SCSS modules or shared styles under `src/components`.

- Bootstrap and React-Bootstrap:
  - Use Bootstrap utility classes for straightforward, common layout needs.
  - Use React-Bootstrap components where appropriate for forms, grids, navbars, etc.

### Best practices

- Avoid inline styles for anything beyond very simple rules; prefer SCSS modules.
- Keep naming consistent and descriptive in SCSS modules.
- Do not duplicate global styles; use variables and mixins when possible.

## Performance and UX guidelines

- Keep components focused:
  - Components should have a clear responsibility (e.g. `Lecture`, `Lab`, `Faq`).
  - Avoid “god components” that do many unrelated things.

- State management:
  - Prefer local component state and hooks over introducing global state libraries.
  - Lift state up only as far as necessary.

- Rendering:
  - Avoid unnecessary re-renders by:
    - Computing derived data inside `useMemo` where it materially helps.
    - Passing stable props when possible.

- Navigation:
  - Ensure that navigation between lectures, labs, and other sections is intuitive and consistent.
  - Use `ScrollToTop` (already present) to reset scroll position on navigation.

## Testing and quality checks

- After making frontend changes:
  - Run `npm run lint` and fix any reported issues.
  - Ensure TypeScript types remain correct (no new `any` where they were not before).

- If you introduce new components:
  - Follow existing patterns for props, naming, and file organization.
  - Keep props typed and minimal.

## When to use other skills

- Use the **project overview** skill when you need high-level context on how this repo is structured and what each app does.
- Use the **CSN Journal backend** skill when touching any code under `src/apps/csn-journal/functions` or related Firebase configuration.

