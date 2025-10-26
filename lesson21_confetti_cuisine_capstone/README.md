
# Turnkey Unit 4 - Lesson 21 Confetti Cuisine (Capstone)

Includes minimal session-based auth and seeded admin account.

## Quick Start

```bash
npm install
npm run seed # seeds admin2345/admin2345
npm start
# or
npm run dev
```

## Env
Copy `.env.example` to `.env` and set `SESSION_SECRET` in production.

## Auth
- Register: GET/POST /register
- Login: GET/POST /login
- Logout: POST /logout
- Protected example: GET /dashboard
- Seeded user: admin2345 / admin2345

