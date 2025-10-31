const mongoose = require("mongoose");
const db = require("./models");

mongoose
  .connect("mongodb://localhost/bezkoder_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch(err => console.error("Connection error", err));

console.log("\n=== TRY-IT 3: One-to-aLot (PARENT REFERENCING) ===\n");

const createTutorial = function(tutorial) {
  return db.Tutorial.create(tutorial).then(docTutorial => {
    console.log("\n>> Created Tutorial:\n", docTutorial);
    return docTutorial;
  });
};

const createCategory = function(category) {
  return db.Category.create(category).then(docCategory => {
    console.log("\n>> Created Category:\n", docCategory);
    return docCategory;
  });
};

const addTutorialToCategory = function(tutorialId, categoryId) {
  return db.Tutorial.findByIdAndUpdate(
    tutorialId,
    { category: categoryId },
    { new: true, useFindAndModify: false }
  );
};

const getTutorialsInCategory = function(categoryId) {
  return db.Tutorial.find({ category: categoryId })
    .populate("category", "name -_id")
    .select("-comments -images -__v");
};

const run = async function() {
  console.log("Creating a Category with many Tutorials (Parent Referencing)...\n");
  
  var category = await createCategory({
    name: "Node.js",
    description: "Node.js tutorials and guides"
  });

  var tutorial1 = await createTutorial({
    title: "Node.js Basics",
    author: "bezkoder"
  });
  
  await addTutorialToCategory(tutorial1._id, category._id);
  console.log("\n>> Added Tutorial #1 to Category");

  var tutorial2 = await createTutorial({
    title: "Express.js Fundamentals",
    author: "bezkoder"
  });
  
  await addTutorialToCategory(tutorial2._id, category._id);
  console.log("\n>> Added Tutorial #2 to Category");

  var tutorial3 = await createTutorial({
    title: "MongoDB with Node.js",
    author: "bezkoder"
  });
  
  await addTutorialToCategory(tutorial3._id, category._id);
  console.log("\n>> Added Tutorial #3 to Category");

  console.log("\n>> Now fetching all Tutorials in the Category...\n");
  
  var tutorials = await getTutorialsInCategory(category._id);
  console.log("\n>> All Tutorials in Category:\n", tutorials);
  
  console.log("\n✅ Parent Referencing complete! Each Tutorial points to its Category.\n");
  console.log("Notice: Category document doesn't store Tutorial IDs (avoids huge arrays).\n");
  
  mongoose.connection.close();
};

run();
