"use strict";

const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");

mongoose.connect(
  "mongodb://0.0.0.0:27017/confetti_cuisine",
  { useNewUrlParser: true }
);

let subscribers = [
  {
    name: "Jon Wexler",
    email: "jon@jonwexler.com",
    zipCode: 10016
  },
  {
    name: "Chef Eggplant",
    email: "eggplant@confetticuisine.com",
    zipCode: 20331
  },
  {
    name: "Professor Souffle",
    email: "souffle@confetticuisine.com",
    zipCode: 19103
  },
  {
    name: "Baker Promise",
    email: "promise@confetticuisine.com",
    zipCode: 90210
  },
  {
    name: "Chef Citrus",
    email: "citrus@confetticuisine.com",
    zipCode: 60601
  }
];

// Clear existing data
Subscriber.deleteMany()
  .exec()
  .then(() => {
    console.log("Subscriber data cleared!");
  });

// Insert seed data
let commands = [];

subscribers.forEach(s => {
  commands.push(
    Subscriber.create({
      name: s.name,
      email: s.email,
      zipCode: s.zipCode
    })
  );
});

Promise.all(commands)
  .then(results => {
    console.log("✅ Seed data inserted successfully!");
    console.log(`📊 Total subscribers: ${results.length}`);
    results.forEach((sub, index) => {
      console.log(`${index + 1}. ${sub.name} - ${sub.email}`);
    });
    mongoose.connection.close();
    console.log("Database connection closed.");
  })
  .catch(error => {
    console.log(`❌ ERROR: ${error}`);
  });
