# Lesson 14 - Mongoose Models (Book Store)

## 🎯 Learning Objectives

This lesson introduces **Mongoose**, an ODM (Object Data Modeling) library for MongoDB and Node.js.

### What You'll Learn:
- ✅ Installing and connecting with Mongoose
- ✅ Creating schemas
- ✅ Defining models
- ✅ Data validation
- ✅ Three ways to save documents
- ✅ Promise-based operations

## 🚀 Getting Started

### Prerequisites
**MongoDB must be running!**

```bash
# Start MongoDB
mongod

# Or as a service
brew services start mongodb-community
```

### Install Dependencies
```bash
npm install
```

### Run the Application
```bash
npm start
```

Visit: **http://localhost:3000**

## 📁 Project Structure

```
lesson14_book_store/
├── main.js                    # Mongoose connection & operations
├── package.json
├── models/
│   └── reader.js              # Reader schema & model
├── controllers/
│   ├── homeController.js
│   └── errorController.js
├── views/
│   ├── layout.ejs
│   ├── index.ejs
│   └── partials/
│       └── navigation.ejs
└── public/
    └── 404.html
```

## 🔑 Key Concepts

### 1. Schema Definition

A **schema** defines the structure of documents in a collection:

```javascript
const readerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  favoriteGenre: {
    type: String,
    default: "General"
  },
  joinedDate: {
    type: Date,
    default: Date.now
  }
});
```

### 2. Model Creation

A **model** is a class that constructs documents:

```javascript
module.exports = mongoose.model("Reader", readerSchema);
```

### 3. Three Ways to Save Documents

#### Method 1: Using .create()
```javascript
Reader.create({
  name: "Sarah Johnson",
  email: "sarah@bookstore.com"
})
  .then(doc => console.log(doc))
  .catch(err => console.log(err));
```

#### Method 2: Using new + .save()
```javascript
const reader = new Reader({
  name: "Michael Chen",
  email: "michael@bookstore.com"
});

reader.save()
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

#### Method 3: Using .insertMany()
```javascript
Reader.insertMany([
  { name: "Emma", email: "emma@bookstore.com" },
  { name: "James", email: "james@bookstore.com" }
])
  .then(docs => console.log(docs))
  .catch(error => console.log(error));
```

## 📊 Schema Types

Mongoose supports various data types:

| Type | Example |
|------|---------|
| String | `name: String` |
| Number | `age: Number` |
| Date | `joinedDate: Date` |
| Boolean | `isActive: Boolean` |
| Array | `tags: [String]` |
| ObjectId | `userId: mongoose.Schema.Types.ObjectId` |

## ✅ Validation

Mongoose provides built-in validation:

```javascript
name: {
  type: String,
  required: true,        // Must be provided
  minlength: 2,          // Minimum length
  maxlength: 50,         // Maximum length
  trim: true             // Remove whitespace
}

email: {
  type: String,
  required: true,
  lowercase: true,       // Convert to lowercase
  unique: true           // Must be unique
}

age: {
  type: Number,
  min: 0,                // Minimum value
  max: 120               // Maximum value
}
```

## 🆚 Mongoose vs Native Driver

| Feature | Native Driver (Lesson 13) | Mongoose (Lesson 14) |
|---------|---------------------------|----------------------|
| **Connection** | `MongoClient.connect()` | `mongoose.connect()` |
| **Schema** | ❌ No schema | ✅ Schema-based |
| **Validation** | ❌ Manual | ✅ Built-in |
| **Syntax** | Verbose callbacks | Clean promises |
| **Type Casting** | ❌ Manual | ✅ Automatic |
| **Middleware** | ❌ No | ✅ Yes (hooks) |

## 🔍 Finding Documents

```javascript
// Find all
Reader.find({})
  .then(readers => console.log(readers));

// Find one
Reader.findOne({ email: "sarah@bookstore.com" })
  .then(reader => console.log(reader));

// Find by ID
Reader.findById("507f1f77bcf86cd799439011")
  .then(reader => console.log(reader));

// Find with conditions
Reader.find({ favoriteGenre: "Fantasy" })
  .then(readers => console.log(readers));
```

## 🎮 What Happens When You Run

1. ✅ Connects to MongoDB using Mongoose
2. ✅ Creates 4 reader documents (3 different methods)
3. ✅ Saves them to the database
4. ✅ Finds and displays all readers
5. ✅ All output appears in the **console**

## 🔧 MongoDB Shell Commands

```bash
# Open MongoDB shell
mongo

# Use our database
use book_store_db

# Show collections
show collections

# Find all readers
db.readers.find().pretty()

# Count readers
db.readers.count()

# Find by genre
db.readers.find({ favoriteGenre: "Fantasy" })

# Delete all readers
db.readers.deleteMany({})
```

## 📝 Differences from Teacher's Version

| Feature | Teacher (Recipe App) | Your Version (Book Store) |
|---------|---------------------|---------------------------|
| Theme | Recipes/Subscribers | Books/Readers |
| Database | recipe_db | book_store_db |
| Model | Subscriber | Reader |
| Fields | name, email, zipCode | name, email, favoriteGenre, joinedDate |
| Examples | 2 save methods | 3 save methods |

## ⚠️ Common Issues

### "MongooseError: Operation buffering timed out"
- MongoDB is not running
- Start it: `mongod`

### "ValidationError: Path `name` is required"
- You're trying to save without required fields
- Make sure all required fields are provided

### Deprecation warnings?
- Add options to connection:
```javascript
mongoose.connect("mongodb://0.0.0.0:27017/book_store_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

## 💡 Try It Yourself

Modify the code to:
1. Add more fields to the schema (age, membershipLevel, etc.)
2. Add validation rules (min/max, enum, etc.)
3. Create a Book model with its own schema
4. Find readers by specific criteria
5. Update existing readers

## 🎓 Next Steps

**Lesson 15** will cover:
- Full CRUD operations (Create, Read, Update, Delete)
- Subscribers controller
- Displaying data in views
- Seed data for testing

---

**Excellent work learning Mongoose!** 🎉
