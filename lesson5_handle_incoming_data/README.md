# Lesson 5: Handling Incoming Data

## Overview
This lesson teaches you how to:
- Collect and process request data
- Handle POST requests with data chunks
- Build basic application routes
- Analyze request headers and body content

## Project Structure
```
lesson5_handle_incoming_data/
├── main.js           # Main application file with routing
├── package.json      # Project configuration
└── README.md         # This file
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Application
```bash
npm start
```
Or:
```bash
node main.js
```

The server will start on port 3000.

## Testing the Application

### Test GET Requests
Open your browser and visit:
- http://localhost:3000/ (Welcome page)
- http://localhost:3000/info (Info page)
- http://localhost:3000/contact (Contact page)

### Test POST Requests with curl
In a separate terminal window, run:
```bash
curl --data "username=Jon&password=secret" http://localhost:3000
```

Check your server terminal to see the request body contents logged.

**Note for Windows users:** Install curl via Chocolatey:
```bash
choco install curl
```

### Alternative: Use Insomnia
For a user-friendly interface to test POST requests:
- Download from: https://insomnia.rest/download/
- Create a new POST request to http://localhost:3000
- Add body data and send

## Key Concepts Learned

### 1. Event-Driven Server
- Using `app.on("request")` to handle incoming requests
- Understanding callback functions in Node.js

### 2. Request Analysis
- Logging HTTP method: `req.method`
- Logging request URL: `req.url`
- Logging request headers: `req.headers`

### 3. Handling POST Data
- Data arrives in chunks (Buffer objects)
- Collecting chunks in an array
- Converting Buffer to String with `Buffer.concat()`

### 4. Basic Routing
- Using `routeResponseMap` to map URLs to responses
- Checking if route exists before responding
- Providing default response for unmatched routes

### 5. JSON Formatting
- Using `JSON.stringify()` to format objects
- Making console output more readable

## Code Highlights

### Request Event Listener
```javascript
app.on("request", (req, res) => {
  // Handle request
});
```

### Collecting POST Data
```javascript
var body = [];
req.on("data", (bodyData) => {
  body.push(bodyData);
});
req.on("end", () => {
  body = Buffer.concat(body).toString();
  console.log(`Request Body Contents: ${body}`);
});
```

### Simple Routing
```javascript
const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>"
};

if (routeResponseMap[req.url]) {
  res.end(routeResponseMap[req.url]);
} else {
  res.end("<h1>Welcome!</h1>");
}
```

## What's Next?
In Lesson 6, you'll learn how to:
- Serve complete HTML files using the `fs` module
- Serve static assets (CSS, JavaScript, images)
- Create a router module for better code organization

## Troubleshooting

### Server won't start
- Make sure port 3000 is not already in use
- Check that you ran `npm install` first

### Can't see POST data
- Make sure you're using the correct curl command
- Check that your server is running in another terminal window

### Routes not working
- Verify the exact URL path (case-sensitive)
- Check for typos in the route mapping
