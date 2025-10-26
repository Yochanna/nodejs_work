# Lesson 9: Routing in Express.js

## Overview
This lesson covers routing in Express.js, including:
- Building routes with Express.js
- Using route parameters
- Analyzing request data (body and query strings)
- Creating middleware functions
- Implementing MVC (Model-View-Controller) architecture

## Project Structure
```
lesson9_express_routing/
├── main.js                    # Main application file with routes
├── package.json               # Project dependencies
├── controllers/
│   └── homeController.js      # Controller with route callback functions
└── README.md                  # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

Or:
```bash
node main.js
```

The server will start on port 3000.

## Testing the Routes

### 1. Test GET route with parameters
Visit in your browser or use curl:
```bash
curl http://localhost:3000/items/lettuce
```

You should see: "This is the page for lettuce"

Try different vegetables:
```bash
curl http://localhost:3000/items/tomato
curl http://localhost:3000/items/carrot
```

### 2. Test POST route
Submit data using curl:
```bash
curl --data "first_name=Jon&last_name=Wexler" http://localhost:3000
```

You should see "POST Successful!" and the data logged in your terminal.

### 3. Test query strings
Visit in your browser:
```
http://localhost:3000/items/lettuce?cart=3&pagesVisited=4
```

Check your terminal to see the query parameters logged.

## Key Concepts

### Route Parameters
- Route parameters use a colon (:) before the parameter name
- Example: `/items/:vegetable`
- Access via `req.params.vegetable`

### Request Body
- Use `express.urlencoded()` and `express.json()` to parse request bodies
- Access posted data via `req.body`

### Query Strings
- Data passed in URL after `?` (e.g., `?cart=3&page=2`)
- Access via `req.query`

### Middleware Functions
- Functions that run before route handlers
- Must call `next()` to continue to the next middleware/route
- Use `app.use()` to register middleware

### MVC Architecture
- **Models**: Data structure and database interaction (covered in Unit 3)
- **Views**: Display layer (covered in Lesson 10)
- **Controllers**: Business logic and glue between models and views

## Code Highlights

### Route with Parameters
```javascript
app.get("/items/:vegetable", homeController.sendReqParam);
```

### Middleware Function
```javascript
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});
```

### Controller Function
```javascript
exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};
```

## Next Steps
- Lesson 10: Connecting views with templates
- Learn about EJS templating engine
- Pass data from controllers to views
- Set up layouts and partials

## Notes from the Book
- Controllers act as the glue between models and views
- Route callback functions are essentially controllers
- Middleware runs sequentially - order matters!
- Always call `next()` in middleware to continue the chain
