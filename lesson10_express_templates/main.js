const port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

// Set up view engine
app.set("view engine", "ejs");

// Use express-ejs-layouts
app.use(layouts);

// Set up port
app.set("port", process.env.PORT || port);

// Routes
app.get("/", homeController.showIndex);
app.get("/name/:myName", homeController.respondWithName);

// Start server
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
