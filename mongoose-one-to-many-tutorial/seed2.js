const mongoose = require("mongoose");
const db = require("./models");

mongoose
  .connect("mongodb://localhost/bezkoder_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch(err => console.error("Connection error", err));

console.log("\n=== TRY-IT 2: One-to-Many (REFERENCING) ===\n");

const createTutorial = function(tutorial) {
  return db.Tutorial.create(tutorial).then(docTutorial => {
    console.log("\n>> Created Tutorial:\n", docTutorial);
    return docTutorial;
  });
};

const createComment = function(tutorialId, comment) {
  return db.Comment.create(comment).then(docComment => {
    console.log("\n>> Created Comment:\n", docComment);
    return db.Tutorial.findByIdAndUpdate(
      tutorialId,
      { $push: { comments: docComment._id } },
      { new: true, useFindAndModify: false }
    );
  });
};

const getTutorialWithPopulate = function(id) {
  return db.Tutorial.findById(id).populate("comments", "-_id -__v");
};

const run = async function() {
  console.log("Creating a Tutorial with referenced Comments...\n");
  
  var tutorial = await createTutorial({
    title: "Node.js Express Tutorial",
    author: "bezkoder"
  });

  tutorial = await createComment(tutorial._id, {
    username: "jack",
    text: "This is a great tutorial!",
    createdAt: Date.now()
  });
  console.log("\n>> Tutorial after 1st Comment (showing only ID):\n", tutorial);

  tutorial = await createComment(tutorial._id, {
    username: "mary",
    text: "Thank you, it helps me alot.",
    createdAt: Date.now()
  });
  console.log("\n>> Tutorial after 2nd Comment (showing only IDs):\n", tutorial);

  console.log("\n>> Now using populate() to get full Comment data...\n");
  
  tutorial = await getTutorialWithPopulate(tutorial._id);
  console.log("\n>> Populated Tutorial (full Comment data):\n", tutorial);
  
  console.log("\n✅ Referencing complete! Comments stored separately but linked.\n");
  
  mongoose.connection.close();
};

run();
