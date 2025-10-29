
# Turnkey Unit 5 - Lesson 24 Recipe App

Ready-to-run, excludes node_modules. Follows our established conventions.

## Quick Start
```bash
npm install
npm run seed # if seed.js exists
npm start
# or
npm run dev
```

## Environment
Copy `.env.example` to `.env` as needed (PORT, NODE_ENV).

## Scripts
- start: node main.js
- dev: nodemon main.js
- seed: node seed.js (if present)
- lint: eslint .
- format: prettier --write .

## Notes
- Optional Try-It pieces can be enabled via small route/seed toggles when present.
