
# Turnkey Unit 6 - Lesson 29 Confetti Cuisine (Capstone)

Mandatory book theme, includes minimal session-based auth and seeded admin account.

## Quick Start

```bash
npm install
npm run seed # seeds admin2345/admin2345
npm start
# or
npm run dev
```

## Environment
Copy `.env.example` to `.env` and set `SESSION_SECRET` in production.

## Auth
- Register: GET/POST /register
- Login: GET/POST /login
- Logout: POST /logout
- Protected example: GET /dashboard
- Seeded user: admin2345 / admin2345
