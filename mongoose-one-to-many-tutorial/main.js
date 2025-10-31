const mongoose = require("mongoose");
const db = require("./models");

mongoose
  .connect("mongodb://localhost/bezkoder_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch(err => console.error("Connection error", err));

console.log("\n==============================================");
console.log("   LESSON 26: MongoDB One-to-Many Examples");
console.log("==============================================\n");

console.log("This lesson demonstrates three types of relationships:\n");
console.log("1. One-to-Few (Embedding): Tutorial with Images");
console.log("2. One-to-Many (Referencing): Tutorial with Comments");
console.log("3. One-to-aLot (Parent Ref): Category with Tutorials\n");

console.log("To run examples, use:");
console.log("  node seed.js\n");

console.log("==============================================\n");

setTimeout(() => {
  console.log("Closing connection...");
  mongoose.connection.close();
}, 2000);
