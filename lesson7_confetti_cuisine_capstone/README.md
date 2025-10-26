# Confetti Cuisine - Lesson 7 Capstone Project

A custom Node.js web server with routing, built from scratch without using Express.js.

## Project Structure

```
lesson7_capstone_project/
├── main.js                 # Main server file
├── router.js               # Custom routing module
├── utils.js                # Utility functions
├── contentTypes.js         # MIME type mappings
├── package.json            # Project configuration
├── download-images.js      # Script to download placeholder images
├── views/                  # HTML templates
│   ├── index.html
│   ├── courses.html
│   ├── contact.html
│   ├── thanks.html
│   └── error.html
└── public/                 # Static assets
    ├── confetti_cuisine.css
    ├── bootstrap.css
    ├── confettiCuisine.js
    ├── product.jpg
    └── people.jpg
```

## Installation

1. Install Node.js dependencies:
```bash
npm install http-status-codes
```

2. Download placeholder images:
```bash
npm run download-images
```

## Running the Server

```bash
npm start
```

The server will start on port 3000. Visit http://localhost:3000 in your browser.

## Available Routes

- `GET /` - Home page
- `GET /courses.html` - Courses page
- `GET /contact.html` - Contact form
- `POST /contact` - Handle contact form submission
- `GET /public/*` - Serve static files (CSS, JS, images)

## Key Concepts

- Custom HTTP server using Node.js `http` module
- Custom routing without Express.js
- Serving static files
- Handling GET and POST requests
- Modular code organization
- Content-Type headers for different file types

## Learning Objectives

This capstone project demonstrates:
1. Building a web server from scratch
2. Creating a custom router
3. Serving HTML, CSS, JavaScript, and images
4. Handling form submissions
5. Organizing code into modules
6. Using Node.js core modules

## Next Steps

After completing this capstone, you'll be ready to:
- Learn Express.js framework
- Add database integration
- Implement user authentication
- Build RESTful APIs
