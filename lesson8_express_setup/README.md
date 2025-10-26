# Lesson 8: Setting Up an App with Express.js

## Overview
This lesson introduces Express.js, a web framework for Node.js that simplifies web application development. You'll learn how to install Express.js, create your first Express.js application, and understand how web frameworks make development easier.

## What is Express.js?

Express.js is a **web framework** that:
- Provides structure to your Node.js applications
- Handles common web development tasks automatically
- Offers intuitive methods for routing and handling requests
- Acts as **middleware** between HTTP and your application logic
- Is the most popular Node.js framework with strong community support

## Why Use a Web Framework?

Web frameworks like Express.js:
- **Save time** - No need to build everything from scratch
- **Reduce errors** - Handle tedious tasks automatically
- **Provide structure** - Consistent application organization
- **Offer tools** - Built-in methods for common operations
- **Enable focus** - Spend time on unique features, not boilerplate

## Project Structure
```
lesson8_express_setup/
├── main.js                      # Simple Express application
├── main_with_logging.js         # Express with request logging
├── package.json                 # Project configuration
└── README.md                    # This file
```

## Key Concepts

### 1. Installing Express.js
Express.js is an external package that must be installed:
```bash
npm install express --save
```

To install a specific version (recommended for consistency):
```bash
npm install express@4.16.3 --save
```

### 2. Basic Express.js Application

**Requiring Express:**
```javascript
const express = require("express");
const app = express();
```

- `express` - The Express.js module
- `app` - Your application instance with all Express.js functionality

**Creating a Route:**
```javascript
app.get("/", (req, res) => {
  res.send("Hello, Universe!");
});
```

**Starting the Server:**
```javascript
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
```

### 3. Express.js as Middleware

Express.js acts as **middleware** - code that sits between HTTP requests and your application logic:

```
Client Request → Express.js → Your Application → Response
```

Middleware functions:
- Listen for requests
- Analyze request data
- Filter and validate
- Handle routing
- Process before reaching your code

### 4. Request Object Properties

Express.js provides easy access to request data:

| Property | Description | Example Use |
|----------|-------------|-------------|
| `req.params` | URL parameters | Extract IDs from `/users/:id` |
| `req.body` | POST request data | Form submissions |
| `req.url` | Requested URL path | Logging, routing |
| `req.query` | Query string data | `?name=jon&age=30` |

**Example:**
```javascript
app.get("/", (req, res) => {
  console.log(req.params);  // {}
  console.log(req.body);    // undefined (needs body parser)
  console.log(req.url);     // "/"
  console.log(req.query);   // {} or {name: "jon"} if ?name=jon
  res.send("Hello!");
});
```

### 5. Query Strings

Query strings pass data in the URL after a `?`:
```
http://localhost:3000?name=jon&age=30
```

Access in Express.js:
```javascript
req.query.name  // "jon"
req.query.age   // "30"
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

This installs:
- `express` - The web framework
- `nodemon` - Auto-restart server on file changes (dev dependency)

### 2. Run the Application

**Option 1: Using npm start (with nodemon)**
```bash
npm start
```
- Automatically restarts when you save changes
- Best for development

**Option 2: Using node directly**
```bash
node main.js
```
- Manual restart required for changes
- Good for production

### 3. Test the Application

Open your browser and visit:
- http://localhost:3000

You should see: **Hello, Universe!**

### 4. Test with Query Strings

Visit:
- http://localhost:3000?name=jon&age=30

Check your terminal to see the logged query parameters.

## Using Nodemon

### What is Nodemon?

Nodemon automatically restarts your Node.js application when file changes are detected.

### Installation Options

**Global installation:**
```bash
npm install nodemon -g
# or with sudo on Mac/Linux
sudo npm install nodemon -g
```

**As dev dependency (recommended):**
```bash
npm install nodemon --save-dev
# or shorthand
npm install nodemon -D
```

### Usage

**With npm script (already configured):**
```bash
npm start
```

**Direct command:**
```bash
nodemon main.js
```

**Stop the server:**
- Press `Ctrl+C` (Windows/Linux)
- Press `Command+D` (Mac)

## Comparing Express.js to Unit 1 Code

### Unit 1 (Plain Node.js):
```javascript
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hello</h1>");
  res.end();
});
server.listen(3000);
```

### Lesson 8 (Express.js):
```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000);
```

**Benefits:**
- ✅ Cleaner, more readable code
- ✅ Built-in routing with `app.get()`, `app.post()`, etc.
- ✅ Simpler response with `res.send()`
- ✅ Automatic content-type headers
- ✅ Less boilerplate code

## Other Node.js Frameworks

While this book uses Express.js, other frameworks exist:

| Framework | Description |
|-----------|-------------|
| **Koa.js** | By Express.js creators, modern async/await support |
| **Hapi.js** | Similar to Express, focuses on less code |
| **Sails.js** | Built on Express, more structure, less customization |
| **Total.js** | High performance, built on core HTTP module |

**Why Express.js?**
- Most popular and widely used
- Largest community and resources
- Best for learning Node.js web development
- Extensive documentation and tutorials

## Try This Exercises

### Exercise 1: Change HTTP Method
Change `app.get()` to `app.post()` in main.js:
```javascript
app.post("/", (req, res) => {
  res.send("Hello, Universe!");
});
```

Restart and visit http://localhost:3000 in your browser.

**What happens?**
- You'll see an error: "Cannot GET /"
- The browser makes GET requests by default
- Your route only handles POST requests

**Test with curl:**
```bash
curl -X POST http://localhost:3000
```
Now you'll see your response!

### Exercise 2: Add More Routes
Add multiple routes to your application:
```javascript
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
```

Test by visiting:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact

### Exercise 3: Use Query Parameters
Create a greeting route that uses query parameters:
```javascript
app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello, ${name}!`);
});
```

Test with:
- http://localhost:3000/greet
- http://localhost:3000/greet?name=Jon
- http://localhost:3000/greet?name=Sarah

## Common Issues and Solutions

### Issue: "Cannot find module 'express'"
**Solution:** Run `npm install` to install dependencies

### Issue: "Port 3000 is already in use"
**Solution:** 
- Stop other applications using port 3000
- Or change the port number in main.js

### Issue: Changes not reflecting
**Solution:**
- Make sure nodemon is running (npm start)
- Or manually restart with Ctrl+C and `node main.js`

### Issue: "npm start" doesn't work
**Solution:** Check that package.json has the start script:
```json
"scripts": {
  "start": "nodemon main.js"
}
```

## What's Next?

In **Lesson 9**, you'll learn about:
- Building more complex routes with parameters
- Handling POST request data
- Using middleware functions
- Implementing MVC (Model-View-Controller) architecture
- Organizing routes into controllers

## Key Takeaways

1. ✅ Express.js is a web framework that simplifies Node.js development
2. ✅ Install with `npm install express --save`
3. ✅ Create an app with `const app = express()`
4. ✅ Define routes with `app.get()`, `app.post()`, etc.
5. ✅ Send responses with `res.send()`
6. ✅ Start server with `app.listen(port)`
7. ✅ Use nodemon for automatic restarts during development
8. ✅ Access request data through `req.params`, `req.body`, `req.query`
9. ✅ Express.js acts as middleware between HTTP and your application
10. ✅ Web frameworks save time and reduce errors

## Additional Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [Express.js API Reference](https://expressjs.com/en/4x/api.html)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Nodemon Documentation](https://nodemon.io/)
