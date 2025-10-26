# Lesson 4: Building a Simple Web Server in Node.js

## Overview
This lesson demonstrates how to build a basic web server using Node.js and the built-in `http` module. You'll learn how to:
- Create a web server using the `http` module
- Handle HTTP requests and responses
- Use the `http-status-codes` package for status codes
- Run a web server and view it in your browser

## Project Structure
```
lesson4_build_web_server/
├── main.js           # Main application file with web server code
├── package.json      # Project configuration and dependencies
└── README.md         # This file
```

## Setup Instructions

### 1. Install Dependencies
First, navigate to the project directory and install the required packages:

```bash
cd lesson4_build_web_server
npm install
```

This will install the `http-status-codes` package, which provides constants for HTTP status codes.

### 2. Run the Application
Start the web server by running:

```bash
node main.js
```

Or use the npm script:

```bash
npm start
```

You should see the following message in your terminal:
```
The server has started and is listening on port number: 3000
```

### 3. View in Browser
Open your web browser and navigate to:
```
http://localhost:3000
```

You should see the message: **"Hello, Universe!"**

### 4. Stop the Server
To stop the server, press `Ctrl+C` in your terminal window.

## How It Works

### The HTTP Module
The `http` module is a core Node.js module that provides functionality for creating web servers. It allows your application to:
- Listen for incoming HTTP requests
- Process those requests
- Send back HTTP responses

### Key Concepts

1. **Port Number**: The server listens on port 3000. This is a common port for development servers.

2. **createServer()**: This method creates a new HTTP server instance. It takes a callback function that runs every time a request is received.

3. **Request and Response Objects**: 
   - `request`: Contains information about the incoming HTTP request
   - `response`: Used to send data back to the client

4. **writeHead()**: Sets the HTTP status code and response headers. Here we use:
   - `httpStatus.OK` (200): Indicates the request was successful
   - `Content-Type: text/html`: Tells the browser we're sending HTML content

5. **write()**: Writes content to the response body.

6. **end()**: Signals that the response is complete and can be sent to the client.

7. **listen()**: Tells the server to start listening for requests on the specified port.

## Code Explanation

```javascript
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
```
- Define the port number and require necessary modules

```javascript
app = http.createServer((request, response) => {
  console.log("Received an incoming request!");
```
- Create the server with a callback function that runs on each request
- Log when a request is received

```javascript
  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });
```
- Set the response status to 200 (OK) and content type to HTML

```javascript
  let responseMessage = "<h1>Hello, Universe!</h1>";
  response.write(responseMessage);
  response.end();
```
- Create the HTML message, write it to the response, and end the response

```javascript
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
```
- Start the server listening on port 3000 and log a confirmation message

## Testing the Server

### Test 1: Basic Request
1. Start the server with `node main.js`
2. Open your browser to `http://localhost:3000`
3. You should see "Hello, Universe!" displayed
4. Check your terminal - you should see the request and response logs

### Test 2: Multiple Requests
1. With the server running, refresh your browser page several times
2. Notice in the terminal that each refresh logs a new request and response
3. This demonstrates that the callback function runs for every request

## Common Issues

### Port Already in Use
If you see an error like "EADDRINUSE", it means port 3000 is already being used by another application. You can either:
- Stop the other application using that port
- Change the port number in main.js to something else (e.g., 3001)

### Module Not Found
If you see "Cannot find module 'http-status-codes'", make sure you've run `npm install` in the project directory.

### Server Not Responding
If the browser can't connect:
- Make sure the server is running (check your terminal)
- Verify you're using the correct URL: `http://localhost:3000`
- Check that no firewall is blocking the connection

## Next Steps
In the next lesson (Lesson 5), you'll learn how to:
- Handle different types of HTTP requests (GET, POST)
- Process incoming data from forms
- Build routes to serve different content based on the URL

## Key Takeaways
- Node.js makes it easy to create web servers with just a few lines of code
- The `http` module is built into Node.js - no installation required
- Web servers follow a request-response cycle
- Callback functions allow you to define what happens when requests are received
- The `http-status-codes` package provides readable constants for HTTP status codes
