"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

// Set view engine to EJS
app.set("view engine", "ejs");

// Set port
app.set("port", process.env.PORT || 3000);

// Middleware for parsing form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use EJS layouts
app.use(layouts);

// Serve static files from public directory
app.use(express.static("public"));

// Custom logging middleware (ENHANCEMENT)
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} request to ${req.url}`);
  next();
});

// Routes
app.get("/", homeController.showHome);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// ENHANCEMENT: New route for course details
app.get("/courses/:courseId", homeController.showCourseDetail);

// Error handling middleware
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// Start server
app.listen(app.get("port"), () => {
  console.log(`Confetti Cuisine server running at http://localhost:${app.get("port")}`);
  console.log("Press Ctrl+C to stop the server");
});
