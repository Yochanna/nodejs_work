
Lesson 17 Recipe App

Ready-to-run package aligned with prior project conventions.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) (Optional) Seed data
npm run seed

# 3) Start
npm start
# or dev mode
npm run dev
```

## Environment
Copy `.env.example` to `.env` as needed.
- PORT: default 3000
- NODE_ENV: development

## Scripts
- start: node main.js
- dev: nodemon main.js
- seed: node seed.js (if present)
- lint: eslint .
- format: prettier --write .

## Notes
- Follows the same code style/level from the previous chat.
- If validation is included (validate.js), errors return sensible messages.
- Static assets served from `public/` and views from `views/`.

