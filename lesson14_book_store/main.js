"use strict";

const express = require("express");
const app = express();
const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const Reader = require("./models/reader");

// Connecting to MongoDB using Mongoose
mongoose.connect("mongodb://0.0.0.0:27017/book_store_db",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// CREATING DOCUMENTS TO SAVE TO DB

// Method 1: Using Promises
Reader.create({
  name: "Sarah Johnson",
  email: "sarah@bookstore.com",
  favoriteGenre: "Science Fiction"
})
  .then((savedDoc) => {
    console.log("Reader saved (Promise):", savedDoc);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

// Method 2: Using new + save
const newReader = new Reader({
  name: "Michael Chen",
  email: "michael@bookstore.com",
  favoriteGenre: "Mystery"
});

newReader.save()
  .then((result) => {
    console.log("Reader saved (new + save):", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Method 3: Multiple documents
const readers = [
  {
    name: "Emma Davis",
    email: "emma@bookstore.com",
    favoriteGenre: "Romance"
  },
  {
    name: "James Wilson",
    email: "james@bookstore.com",
    favoriteGenre: "Fantasy"
  }
];

Reader.insertMany(readers)
  .then((docs) => {
    console.log("Multiple readers saved:", docs);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Finding documents
setTimeout(() => {
  Reader.find({})
    .then((allReaders) => {
      console.log("\n=== ALL READERS IN DATABASE ===");
      allReaders.forEach((reader, index) => {
        console.log(`${index + 1}. ${reader.name} - ${reader.email} (${reader.favoriteGenre})`);
      });
    })
    .catch((error) => {
      console.log("Error finding readers:", error);
    });
}, 1000);

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get("/", homeController.showHome);

// Error handling
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Book Store running at http://localhost:${app.get("port")}`);
});
