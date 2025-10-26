const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static("public"));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  next();
});

// Routes
app.get("/", homeController.showHome);
app.get("/games", homeController.showGames);
app.get("/about", homeController.showAbout);
app.post("/subscribe", homeController.handleSubscribe);

// Error handling
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Gaming Hub running at http://localhost:${app.get("port")}`);
});
