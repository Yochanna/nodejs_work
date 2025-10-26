"use strict";

const express = require("express");
const app = express();
const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const Member = require("./models/member");
const memberController = require("./controllers/membersController");

// Connecting to database
mongoose.connect("mongodb://0.0.0.0:27017/fitness_tracker_db",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// Example query: Finding a specific member
const query = Member.find({ membershipLevel: "Premium" }).exec();
query
  .then(docs => {
    console.log("Premium members:", docs);
  })
  .catch(err => {
    console.error("Error finding members:", err);
  });

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(homeController.logRequestPaths);

// Routes
app.get("/", homeController.index);
app.get("/classes", homeController.showClasses);

// Member routes
app.get("/members", memberController.getAllMembers, (req, res, next) => {
  res.render("members", { members: req.data });
});

app.get("/join", memberController.getJoinPage);
app.post("/join", memberController.saveMember);

// Error handling
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Fitness Tracker running at http://localhost:${app.get("port")}`);
});
