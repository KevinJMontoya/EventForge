# EventForge
Event management platform for CST project.

## Structure
-- backend: server-side logic
-- frontend: web interface
-- docs: project documents

## Team Members
--Kiishi Haastrup ( Scrum Master )
--Laura Duterval  ( Product Owner )
--Kevin Montoya  ( Developer )
--Souber Abdourahman ( Developer )

## Auth API (contract)
POST /api/auth/register  { email, password, role: ADMIN|ORGANIZER|GUEST }
→ 201 { data: { id, email, role, token } } | 409 { error }
POST /api/auth/login     { email, password }
→ 200 { data: { id, email, role, token } } | 401 { error }
GET  /api/auth/me        (Authorization: Bearer <token>)
→ 200 { data: { id, email, role } } | 401 { error }

## Errors
Validation → { "error": "ValidationError", "details":[{ "path","message" }] }
Not found → { "error": "Not Found", "path": "/bad" }
Other     → { "error": "message" }

