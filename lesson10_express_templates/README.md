# Lesson 10: Connecting Views with Templates


- Setting up EJS as a templating engine
- Passing data from controllers to views
- Using layouts with express-ejs-layouts
- Creating and using partials
- Dynamic content rendering

## Project Structure

```
lesson10_express_templates/
├── main.js                      # Main application file
├── package.json                 # Project dependencies
├── controllers/
│   └── homeController.js        # Controller with route handlers
└── views/
    ├── layout.ejs               # Main layout template
    ├── index.ejs                # Index view
    └── partials/
        └── navigation.ejs       # Navigation partial
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

## Testing the Application

1. **Home Page**: Visit http://localhost:3000

2. **Dynamic Name Route**: Visit http://localhost:3000/name/Jon
   - Replace "Jon" with any name
   - The page will display "Hello, [name]!"
   - Notice how the layout (navigation and footer) remains the same

## Key Concepts

### 1. Setting Up EJS
```javascript
app.set("view engine", "ejs");
```

### 2. Using Layouts
```javascript
const layouts = require("express-ejs-layouts");
app.use(layouts);
```

### 3. Rendering Views
```javascript
res.render("index", { name: paramsName });
```

### 4. EJS Syntax
- `<% %>` - Execute JavaScript code
- `<%= %>` - Output escaped value
- `<%- %>` - Output unescaped value (for HTML)

### 5. Including Partials
```ejs
<%- include('partials/navigation') %>
```

### 6. Passing Data to Views
Data is passed as an object in the second parameter of `res.render()`:
```javascript
res.render("index", { name: "Jon" });
```

### 7. Layout Body Placeholder
The `<%- body %>` tag in layout.ejs is where view content is inserted.

## How It Works

1. **Request Flow**:
   - User visits a route (e.g., /name/Jon)
   - Express matches the route to a controller function
   - Controller renders a view with data
   - EJS processes the template
   - Layout wraps the view content
   - Partials are included where specified
   - Final HTML is sent to the browser

2. **Templating Process**:
   - EJS reads the view file
   - Processes JavaScript within `<% %>` tags
   - Replaces `<%= %>` with variable values
   - Includes partials with `<%- include() %>`
   - Wraps content in layout
   - Returns complete HTML

## Exercises

1. **Create a Contact Page**:
   - Add a new route `/contact`
   - Create a `contact.ejs` view
   - Use the same layout and navigation

2. **Add a Notification Partial**:
   - Create `notificationBox.ejs` in partials
   - Include it in index.ejs
   - Style it with CSS

3. **Pass More Data**:
   - Modify the controller to pass multiple variables
   - Display them in the view
   - Try passing arrays and objects

## Common Issues

1. **Views not found**: Make sure views are in the `views` folder
2. **Layout not applied**: Check that express-ejs-layouts is installed and used
3. **Variables undefined**: Always check if variables exist before using them in views
4. **Partials not found**: Use correct relative paths from the views folder

