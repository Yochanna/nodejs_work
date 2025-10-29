
# Turnkey Unit 5 - Lesson 22 Recipe App

Ready-to-run, excludes node_modules. Follow prior conventions.

## Quick Start
```bash
npm install
npm run seed # if seed.js exists
npm start
# or
yarn dev || npm run dev
```

## Environment
Copy `.env.example` to `.env` as needed (PORT, NODE_ENV).

## Scripts
- start: node main.js
- dev: nodemon main.js
- seed: node seed.js (if present)
- lint: eslint .
- format: prettier --write .
