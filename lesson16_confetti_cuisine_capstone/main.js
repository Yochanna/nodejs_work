"use strict";

const express = require("express");
const app = express();
const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const subscriberController = require("./controllers/subscribersController");

// Connecting to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/confetti_cuisine",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

db.on("error", (error) => {
  console.error(`Database connection error: ${error}`);
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ENHANCEMENT: Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// Home routes
app.get("/", homeController.index);
app.get("/courses", homeController.showCourses);

// ENHANCEMENT: Course detail route
app.get("/courses/:courseId", homeController.showCourseDetail);

// Subscriber routes
app.get("/subscribers", subscriberController.getAllSubscribers);
app.get("/contact", subscriberController.getSubscriptionPage);
app.post("/subscribe", subscriberController.saveSubscriber);

// ENHANCEMENT: Delete subscriber route
app.post("/subscribers/delete/:id", subscriberController.deleteSubscriber);

// Error handling
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Confetti Cuisine running at http://localhost:${app.get("port")}`);
  console.log("Press Ctrl+C to stop the server");
});
