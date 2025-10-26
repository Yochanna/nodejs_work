"use strict";

const mongoose = require("mongoose");
const Member = require("./models/member");

mongoose.connect(
  "mongodb://0.0.0.0:27017/fitness_tracker_db",
  { useNewUrlParser: true }
);

let members = [
  {
    name: "Alex Thunder",
    email: "alex@fitness.com",
    membershipLevel: "Premium"
  },
  {
    name: "Sarah Strong",
    email: "sarah@fitness.com",
    membershipLevel: "VIP"
  },
  {
    name: "Mike Power",
    email: "mike@fitness.com",
    membershipLevel: "Basic"
  },
  {
    name: "Emma Flex",
    email: "emma@fitness.com",
    membershipLevel: "Premium"
  }
];

// Clear existing data
Member.deleteMany()
  .exec()
  .then(() => {
    console.log("Member data cleared!");
  });

// Insert seed data
let commands = [];

members.forEach(m => {
  commands.push(
    Member.create({
      name: m.name,
      email: m.email,
      membershipLevel: m.membershipLevel
    })
  );
});

Promise.all(commands)
  .then(results => {
    console.log("Seed data inserted:");
    console.log(JSON.stringify(results, null, 2));
    mongoose.connection.close();
    console.log("Database connection closed.");
  })
  .catch(error => {
    console.log(`ERROR: ${error}`);
  });
