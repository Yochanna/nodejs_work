# Lesson 15 - CRUD Operations (Fitness Tracker)

## 🎯 Learning Objectives

This lesson covers **full CRUD operations** (Create, Read, Update, Delete) with Mongoose and introduces **controllers** for better code organization.

### What You'll Learn:
- ✅ Creating controllers to separate business logic
- ✅ CRUD operations with Mongoose
- ✅ Middleware for passing data between functions
- ✅ Form handling and saving to database
- ✅ Displaying database data in views
- ✅ Seed data for testing

## 🚀 Getting Started

### Prerequisites
**MongoDB must be running!**

```bash
# Start MongoDB
mongod
```

### Install Dependencies
```bash
npm install
```

### Seed the Database (Optional)
```bash
npm run seed
```

This will populate the database with 4 test members.

### Run the Application
```bash
npm start
```

Visit: **http://localhost:3000**

## 📁 Project Structure

```
lesson15_fitness_tracker/
├── main.js                          # Main server file
├── package.json
├── seed.js                          # Seed data script
├── models/
│   └── member.js                    # Member schema & model
├── controllers/
│   ├── homeController.js            # Home & classes logic
│   ├── membersController.js         # Member CRUD operations
│   └── errorController.js           # Error handling
├── views/
│   ├── layout.ejs                   # Main layout
│   ├── index.ejs                    # Home page
│   ├── classes.ejs                  # Classes listing
│   ├── members.ejs                  # Members listing
│   ├── join.ejs                     # Join form
│   ├── thanks.ejs                   # Thank you page
│   ├── error.ejs                    # Error page
│   └── partials/
│       └── navigation.ejs           # Navigation bar
└── public/
    ├── css/
    │   └── fitness_tracker.css      # Styles
    └── images/
        └── README.md                # Image instructions
```

## 🔑 Key Concepts

### 1. Controllers

Controllers separate business logic from routes:

**Before (Lesson 14):**
```javascript
app.get("/members", (req, res) => {
  Member.find({})
    .then(members => res.render("members", { members }))
    .catch(err => console.log(err));
});
```

**After (Lesson 15):**
```javascript
// In main.js
app.get("/members", memberController.getAllMembers, (req, res) => {
  res.render("members", { members: req.data });
});

// In membersController.js
exports.getAllMembers = (req, res, next) => {
  Member.find({})
    .then(members => {
      req.data = members;
      next();
    })
    .catch(err => next(err));
};
```

### 2. CRUD Operations

#### Create (C)
```javascript
exports.saveMember = (req, res) => {
  let newMember = new Member({
    name: req.body.name,
    email: req.body.email,
    membershipLevel: req.body.membershipLevel
  });

  newMember.save()
    .then(result => res.render("thanks", { memberName: result.name }))
    .catch(error => res.send(error));
};
```

#### Read (R)
```javascript
exports.getAllMembers = (req, res, next) => {
  Member.find({})
    .exec()
    .then(members => {
      req.data = members;
      next();
    })
    .catch(error => next(error));
};
```

#### Update (U) - Coming in Lesson 16
```javascript
Member.findByIdAndUpdate(id, { name: "New Name" })
  .then(result => console.log(result));
```

#### Delete (D) - Coming in Lesson 16
```javascript
Member.findByIdAndDelete(id)
  .then(result => console.log(result));
```

### 3. Middleware Pattern

Middleware functions can pass data to the next function:

```javascript
// Middleware 1: Fetch data
app.get("/members", 
  memberController.getAllMembers,  // Sets req.data
  (req, res) => {                   // Uses req.data
    res.render("members", { members: req.data });
  }
);
```

### 4. Seed Data

The `seed.js` file populates your database with test data:

```javascript
let members = [
  { name: "Alex Thunder", email: "alex@fitness.com", membershipLevel: "Premium" },
  { name: "Sarah Strong", email: "sarah@fitness.com", membershipLevel: "VIP" }
];

Member.deleteMany()  // Clear existing data
  .then(() => Member.insertMany(members))  // Insert new data
  .then(() => console.log("Seed complete!"));
```

## 🛣️ Routes

| Method | Route | Controller | Description |
|--------|-------|------------|-------------|
| GET | `/` | homeController.index | Home page |
| GET | `/classes` | homeController.showClasses | Classes listing |
| GET | `/members` | memberController.getAllMembers | View all members |
| GET | `/join` | memberController.getJoinPage | Join form |
| POST | `/join` | memberController.saveMember | Save new member |

## 📊 Database Structure

**Database:** `fitness_tracker_db`

**Collection:** `members`

**Schema:**
```javascript
{
  name: String (required),
  email: String (required, lowercase),
  membershipLevel: String (enum: ['Basic', 'Premium', 'VIP']),
  joinedDate: Date (default: now)
}
```

## 🎮 Features

### 1. Home Page
- Welcome hero section
- Feature cards
- Tech info about Lesson 15

### 2. Classes Page
- Display fitness classes
- Instructor and time info
- CTA to join

### 3. Members Page
- List all members from database
- Show membership level badges
- Display join date
- Member statistics

### 4. Join Page
- Form to add new members
- Membership level selection
- Benefits comparison

### 5. Thank You Page
- Confirmation of signup
- Display submitted data
- Next steps guide

## 🔧 MongoDB Shell Commands

```bash
# Open MongoDB shell
mongo

# Use our database
use fitness_tracker_db

# Show collections
show collections

# Find all members
db.members.find().pretty()

# Find by membership level
db.members.find({ membershipLevel: "Premium" })

# Count members
db.members.count()

# Update a member
db.members.updateOne(
  { email: "alex@fitness.com" },
  { $set: { membershipLevel: "VIP" } }
)

# Delete a member
db.members.deleteOne({ email: "alex@fitness.com" })

# Clear all members
db.members.deleteMany({})
```

## 📝 Differences from Teacher's Version

| Feature | Teacher (Recipe App) | Your Version (Fitness Tracker) |
|---------|---------------------|--------------------------------|
| Theme | Recipes/Subscribers | Fitness/Members |
| Database | recipe_db | fitness_tracker_db |
| Model | Subscriber | Member |
| Fields | name, email, zipCode | name, email, membershipLevel, joinedDate |
| Routes | /contact, /subscribe | /join, /join (POST) |
| Extra | - | Membership levels, classes page |

## ⚠️ Common Issues

### "Cannot GET /members"
- Make sure the route is defined in `main.js`
- Check that the controller is imported

### "req.data is undefined"
- Make sure middleware calls `next()`
- Check that data is assigned to `req.data`

### Form not saving?
- Check form `action` and `method`
- Verify `name` attributes match controller
- Check MongoDB is running

### Seed script not working?
- Make sure MongoDB is running
- Check database connection string
- Run: `node seed.js`

## 💡 Try It Yourself

Enhance the project:
1. Add a "delete member" button
2. Create an "edit member" form
3. Add search/filter functionality
4. Create a "Workout" model
5. Add pagination for members list
6. Implement member statistics dashboard

## 🎓 Next Steps

**Lesson 16 (Capstone)** will add:
- Full CRUD with Update and Delete
- Better error handling
- More complex queries
- Production-ready features

---

**Awesome work on CRUD operations!** 🎉
