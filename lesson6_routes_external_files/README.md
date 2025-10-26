# Lesson 6: Writing Better Routes and Serving External Files

## Overview
This lesson demonstrates how to:
- Serve entire HTML files using the fs module
- Serve static assets (CSS, JavaScript, images)
- Create a router module for better code organization
- Separate routing logic from main application file

## Project Structure
```
lesson6_routes_external_files/
├── main.js                 # Main application file
├── router.js               # Router module with route handling
├── package.json            # Project configuration
├── views/                  # HTML files
│   └── index.html
└── public/                 # Static assets
    ├── css/
    │   └── styles.css
    ├── js/
    └── images/
```

## Key Concepts

### 1. Router Module (router.js)
- Separates routing logic from main application
- Provides `get()` and `post()` functions to register routes
- Uses `handle()` function to process incoming requests
- Stores routes in an organized object structure

### 2. Serving HTML Files
- Uses `fs.readFile()` to read HTML files from the views folder
- Responds with complete HTML pages instead of inline HTML strings
- Provides better organization and maintainability

### 3. Serving Static Assets
- CSS files from public/css/
- JavaScript files from public/js/
- Images from public/images/
- Each asset type requires proper Content-Type headers

### 4. Custom Read File Function
- `customReadFile()` reduces code repetition
- Handles file reading errors gracefully
- Reusable across multiple routes

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Application**
   ```bash
   npm start
   ```
   Or:
   ```bash
   node main.js
   ```

3. **Access the Application**
   - Home page (plain text): http://localhost:3000/
   - Home page (HTML): http://localhost:3000/index.html
   - Info page: http://localhost:3000/info

## How It Works

### Route Registration
Routes are registered in main.js using the router module:
```javascript
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
```

### Route Handling
The router.handle function processes all incoming requests:
1. Checks if a route exists for the request method and URL
2. Executes the corresponding callback function
3. Returns 404 error if no route is found

### File Serving
The customReadFile function:
1. Reads the file from the filesystem
2. Handles any errors that occur
3. Sends the file contents in the response

## Extending the Application

To add more routes:

1. **For HTML pages:**
   ```javascript
   router.get("/about.html", (req, res) => {
     res.writeHead(httpStatusCodes.OK, htmlContentType);
     customReadFile("views/about.html", res);
   });
   ```

2. **For CSS files:**
   ```javascript
   router.get("/styles.css", (req, res) => {
     res.writeHead(httpStatusCodes.OK, {"Content-Type": "text/css"});
     customReadFile("public/css/styles.css", res);
   });
   ```

3. **For images:**
   ```javascript
   router.get("/logo.png", (req, res) => {
     res.writeHead(httpStatusCodes.OK, {"Content-Type": "image/png"});
     customReadFile("public/images/logo.png", res);
   });
   ```

## What's Different from Lesson 5?

- **Modular routing**: Routes are now in a separate router.js module
- **Better organization**: GET and POST routes are clearly separated
- **File serving**: Can serve complete HTML files and static assets
- **Reusable code**: customReadFile function reduces repetition
- **Scalability**: Easy to add new routes without cluttering main.js

## Next Steps

In Lesson 7 (Capstone), you'll combine all these concepts to build a complete multi-page web application with:
- Multiple HTML views
- Static assets (CSS, JavaScript, images)
- Organized routing system
- Professional project structure

## Notes

- The router module uses CommonJS exports to share functionality
- Error handling is built into the router's handle function
- The fs module is used to read files from the filesystem
- Content-Type headers must match the file type being served
