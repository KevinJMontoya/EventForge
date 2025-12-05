# Copilot / AI contributor instructions for EventForge

This file contains quick, actionable guidance for AI coding agents to be productive in this repository.

Key pointers (read before editing):

- Project layout: `backend/` (Express API), `frontend/` (web UI), `docs/`.
- The backend is a small Express service using ES modules. Entrypoint: `backend/src/server.js`.
- Routes live under `backend/src/routes/*` and use `express.Router()` (see `auth.js` and `health.js`).
- Authentication uses JWTs and an in-memory user store:
  - Token signing/verification: `backend/src/utils/jwt.js` (env: `JWT_SECRET`, `TOKEN_TTL`).
  - Password hashing: `backend/src/utils/password.js` (bcryptjs).
  - In-memory users: `backend/src/data/users.memory.js` — data is ephemeral (resets on restart).
  - Middleware: `backend/src/middleware/requireAuth.js` — verifies bearer token and sets `req.user`.

API & patterns to follow (concrete examples):

- Mounting: server mounts routers under `/api` and `/api/auth` (see `server.js`). New routers should be created in `backend/src/routes` and then imported + used in `server.js`.
- Response shape: successful responses return `{ data: ... }`. Errors return `{ error: "message" }` and often set HTTP status codes (see error handler in `server.js`). Follow these shapes.
- Validation: routes use `zod` for input validation (see `backend/src/routes/auth.js`). Use `zod` when adding new endpoints.
- Roles: the project uses role strings `ADMIN`, `ORGANIZER`, `GUEST` (see `auth.js` regSchema). Use `requireRole(...)` exported by `requireAuth.js` for role-based protection.

Run & dev commands (from `backend/package.json`):

- Development (with auto-reload):
  ```powershell
  cd backend; npm install; npm run dev
  ```
- Production run: `npm start` (runs `node src/server.js`).
- Tests: currently `npm test` is a placeholder (no tests exist yet). If you add tests, update `package.json`.

Environment & secrets:

- `JWT_SECRET` controls token signing. Default in code is `dev` only when not provided. Never commit real secrets.
- `PORT` and `TOKEN_TTL` can be set via environment variables.

Coding rules specific to this repo:

- Use ES module imports/exports (the repo has `type: "module"`).
- Keep response format consistent (`{ data: ... }` for success, `{ error: ... }` for errors).
- For protected endpoints, call `requireAuth` (example: `app.get('/api/users/me', requireAuth, ...)`).
- When creating persistent storage later, avoid changing `users.memory.js` API; prefer replacing the implementation behind the same functions (`findById`, `findByEmail`, `insertUser`, `nextId`).

When editing code, be mindful of these patterns:

- Tests & linting: none present — if you add tests, add a matching script in `backend/package.json` and put tests under `backend/test`.
- Keep middleware behavior: the global error handler in `server.js` expects thrown errors to have `message` and optional `status`.
- Follow existing validation style (zod) and error handling (`next(e)` on catch blocks).

Examples (API endpoints to reference in changes):

- Register: `POST /api/auth/register` — expects `{ email, password, role }` validated by `zod`, returns `{ data: { id, email, role, token } }`.
- Login: `POST /api/auth/login` — returns `{ data: { id, email, role, token } }`.
- Current user: `GET /api/users/me` — protected by `requireAuth`, returns `{ data: req.user }`.

If you make changes that affect API shape or environment variables, update `README.md` and note the change in a short PR description.

Don'ts / guarded actions:

- Don't commit secrets or real JWT secrets. If you need to test, use environment variables locally.
- Don't change public API shapes without updating `README.md` and informing reviewers.

If anything here is unclear or you spot missing project-specific facts, please ask for clarification and point to the file you need read access for.
