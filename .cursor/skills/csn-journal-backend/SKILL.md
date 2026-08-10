---
name: csn-journal-backend
description: Documents the Firebase-based CSN Journal backend under src/apps/csn-journal/functions, including HTTP endpoints, Firestore and Storage data model, emulator behavior, and safety constraints. Use when modifying or extending CSN Journal backend logic.
---

# CSN Journal Backend – Firebase Functions

## Purpose

This skill explains how the CSN Journal backend is implemented using Firebase Cloud Functions and the Firebase Admin SDK.

Use this skill whenever you:
- Modify or extend code under `src/apps/csn-journal/functions`
- Change how articles are stored, validated, or returned
- Work with Firestore or Storage for the CSN Journal
- Configure or adjust emulator seeding behavior

## Location and structure

The CSN Journal backend lives here:
- `src/apps/csn-journal/functions/`

Key elements:
- `index.js` – main Firebase Functions entry point (compiled JavaScript).
- `seed/` – utilities for seeding Firestore and Storage when running in emulators.
- `firestore/`, `storage/` (under `seed/`) – data and logic for populating emulator instances.

> Note: The code in this directory is compiled JS; source TypeScript lives elsewhere in the project or in a separate package. Treat `index.js` and `seed` files as the deployed behavior.

## Technologies

- Firebase Cloud Functions v2 (`onRequest` from `firebase-functions/v2/https`)
- Firebase Admin SDK:
  - Firestore (`getFirestore`, `FieldValue`)
  - Storage (`getStorage`)
  - App initialization via `initializeApp`
- Firebase emulator environment variables for development:
  - `FIREBASE_STORAGE_EMULATOR_HOST`
  - `FIREBASE_EMULATOR_HUB`

## Core configuration

`index.js` defines a small schema object:
- `BUCKET_NAME`: Firebase Storage bucket name, e.g. `dmytro-kushnir-apps.appspot.com`
- `COLLECTION_NAME`: Firestore collection name, e.g. `csn-journal`
- `STORAGE_URL`: Base URL for public Storage access (`https://storage.googleapis.com` in production)

The app:
- Calls `initializeApp()` once at startup.
- Creates:
  - `db = getFirestore()`
  - `storage = getStorage().bucket()`
- Sets `storageURL` to the production base URL by default.

## Emulator-aware behavior

When running against emulators, environment variables change how the backend works:

- If `process.env.FIREBASE_STORAGE_EMULATOR_HOST` is set:
  - The code logs that it is "Running in Firebase Storage Emulator…".
  - `storageURL` is set to a local HTTP URL that points to the emulator.

- If `process.env.FIREBASE_EMULATOR_HUB` is set:
  - The code logs "Running Emulator. Checking for data…".
  - Calls `initEmulatorSeeding(db, storage, collectionName)` from `./seed/index.js`.
  - This seeds Firestore and Storage with initial data if needed.

### Guidelines

- Do not remove emulator checks; they are vital for local development and testing.
- If adding new collections or Storage paths, consider extending seeding to cover them.

## HTTP endpoints

### 1. `getArticles`

Signature (conceptually):
- `export const getArticles = onRequest(async (_req, res) => { ... })`

Behavior:
- Reads all documents from the `csn-journal` Firestore collection.
- If the collection is empty:
  - Returns HTTP 200 with `{ message: 'No articles found.' }`.
- Otherwise:
  - Maps each document to an object with:
    - `id` (document ID)
    - All other stored fields (spread from `doc.data()`).
  - Returns HTTP 200 with an array of article objects.

Error handling:
- Catches any errors, logs with `firebase-functions/logger`, and returns:
  - HTTP 500 with `{ error: 'Failed to retrieve articles' }`.

Usage notes:
- This function is read-only; it does not modify Firestore or Storage.
- Suitable for listing articles on a frontend page.

### 2. `addArticle`

Signature (conceptually):
- `export const addArticle = onRequest(async (req, res) => { ... })`

Expected request body (JSON):
- `title`: string
- `abstract`: string
- `authors`: string or structured authors data
- `fileName`: string (e.g. `paper-title.pdf`)
- `fileContent`: string (base64-encoded file contents)

Validation:
- If any of `title`, `abstract`, `authors`, `fileName`, or `fileContent` is missing:
  - Returns HTTP 400 with `{ error: 'All fields including fileName and fileContent are required.' }`.

Storage behavior:
- Creates a `file` reference in the configured Storage bucket with the given `fileName`.
- Uses `Buffer.from(fileContent, 'base64')` to decode the file contents.
- Calls `file.save(buffer, { ... })` with options:
  - `contentType`:
    - `application/pdf` if the file name ends with `.pdf`
    - `application/vnd.openxmlformats-officedocument.wordprocessingml.document` otherwise
  - `public: true` – file is publicly accessible.
- Computes `fileURL` as:
  - `${storageURL}/${encodeURIComponent(fileName)}?alt=media`
  - Where `storageURL` is production or emulator URL depending on environment.

Firestore behavior:
- Constructs a `newArticle` object:
  - `title`
  - `abstract`
  - `authors`
  - `fileURL`
  - `createdAt: FieldValue.serverTimestamp()`
- Adds it to collection `csn-journal` using `db.collection('csn-journal').add(newArticle)`.
- Returns HTTP 201 with `{ id, ...newArticle }`.

Error handling:
- Logs errors via `logger.error('Error adding article: ', error)`.
- Responds with HTTP 500 and `{ error: 'Failed to add article' }` on failure.

### Guidelines for modifying endpoints

- Always:
  - Validate input thoroughly and return 400 for client mistakes.
  - Use server-side timestamps for audit fields such as `createdAt`.
  - Keep public error messages generic while logging detailed errors for debugging.

- When adding new fields:
  - Maintain backward compatibility by making new fields optional where possible.
  - Update both:
    - Firestore write (`newArticle` object).
    - Any read-side code that depends on article shape (frontend or other consumers).

- When adding new endpoints:
  - Prefer creating a new `onRequest` function per responsibility (e.g. `updateArticle`, `deleteArticle`) instead of overloading existing ones.
  - Follow the same logging and validation patterns.

## Data model

Firestore collection: `csn-journal`

Article document fields (current behavior):
- `title`: string
- `abstract`: string
- `authors`: string or structured data
- `fileURL`: string – public URL to the uploaded file
- `createdAt`: server timestamp

Storage:
- Bucket named by `BUCKET_NAME` constant.
- Object key: provided `fileName`.
- Public access set via `public: true` in `file.save` options.

### Guidelines

- Choose `fileName` values that are:
  - Unique enough to avoid collisions.
  - Safe for URLs (use `encodeURIComponent` in URLs as already done).
- If you change the bucket or access patterns:
  - Update `BUCKET_NAME` and `STORAGE_URL` accordingly.
  - Consider migration strategy for existing data.

## Safety and privacy

- Treat stored article content and metadata as potentially sensitive:
  - Do not log full file contents.
  - Do not expose internal metadata beyond what is intentionally returned to clients.
- Ensure:
  - Only intended endpoints are publicly callable.
  - CORS and auth rules are configured appropriately at the Firebase project level (outside this code).
- When working with production data:
  - Avoid seeding or destructive operations that would overwrite real articles.
  - Use emulator configuration for local testing and seeding.

## Emulator seeding

- `initEmulatorSeeding(db, storage, collectionName)` is called automatically when:
  - `FIREBASE_EMULATOR_HUB` is set.
- Responsibilities typically include:
  - Populating `csn-journal` collection with sample documents.
  - Uploading example files into the Storage bucket.

### Guidelines

- When extending seeding logic:
  - Keep it idempotent (safe to run multiple times).
  - Keep test data clearly distinguishable from real data.

## Interaction with the frontend

- Frontend course apps may:
  - Call `getArticles` to list published journal articles.
  - Call `addArticle` from an admin or upload interface (current or future).

### Integration guidelines

- Use JSON over HTTPS for communication.
- Match the expected request and response shapes documented above.
- Handle error responses gracefully on the frontend (user-friendly messages).

## When to use other skills

- Use the **project overview** skill for a high-level picture of how CSN Journal fits into the rest of the site.
- Use the **frontend architecture** skill when integrating CSN Journal endpoints into React components or routes.

