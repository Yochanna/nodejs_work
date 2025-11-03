# Gaming Hub - Lesson 11 Project

This project demonstrates **serving static files with Express.js** 

## Key Feature: Static File Serving

The main concept is using `app.use(express.static("public"))` in main.js to serve:
- CSS files from `/public/css/`
- JavaScript files from `/public/js/`
- Images from `/public/images/`
- HTML files from `/public/`

## Installation

```bash
npm install
```

## Run the Server

```bash
npm start
```

Visit: http://localhost:3000

## Project Structure

```
lesson11_gaming_hub/
├── main.js                 # Main Express server with static file middleware
├── package.json
├── controllers/
│   ├── homeController.js   # Route handlers
│   └── errorController.js  # Error handlers
├── views/
│   ├── layout.ejs          # Main layout template
│   ├── index.ejs           # Home page
│   ├── games.ejs           # Games listing
│   ├── about.ejs           # About page
│   ├── thanks.ejs          # Thank you page
│   └── partials/
│       └── navigation.ejs  # Navigation component
└── public/                 # Static files directory
    ├── 404.html            # Static error page
    ├── css/
    │   └── style.css       # Stylesheet (served statically)
    ├── js/
    │   └── main.js         # Client-side JS (served statically)
    └── images/             # Image directory (placeholder references)
```

## How Static Files Work

1. **In main.js**: `app.use(express.static("public"))`
2. **Files in public/ are accessible directly**:
   - `/public/css/style.css` → `http://localhost:3000/css/style.css`
   - `/public/js/main.js` → `http://localhost:3000/js/main.js`
   - `/public/images/hero-banner.png` → `http://localhost:3000/images/hero-banner.png`

3. **In EJS templates**, reference them without "public":
   ```html
   <link rel="stylesheet" href="/css/style.css">
   <script src="/js/main.js"></script>
   <img src="/images/hero-banner.png">
   ```

## Routes

- `GET /` - Home page
- `GET /games` - Games listing
- `GET /about` - About page
- `POST /subscribe` - Newsletter subscription
- `404` - Custom error page (static HTML)

