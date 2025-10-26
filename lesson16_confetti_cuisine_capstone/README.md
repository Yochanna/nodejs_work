# Lesson 16 - Confetti Cuisine Capstone 🎉

## 🎯 Project Overview

This is the **Unit 3 Capstone Project** that brings together everything learned about MongoDB, Mongoose, Express, and EJS. It's a full-stack cooking course website with database integration.

### What This Project Demonstrates:
- ✅ MongoDB database integration
- ✅ Mongoose models with validation
- ✅ Full CRUD operations (Create, Read, Delete)
- ✅ MVC architecture (Models, Views, Controllers)
- ✅ Form handling and validation
- ✅ Dynamic views with EJS
- ✅ Error handling
- ✅ Seed data for testing
- ✅ Responsive design

## 🚀 Getting Started

### Prerequisites

**1. MongoDB must be installed and running**

```bash
# Check if MongoDB is installed
mongod --version

# Start MongoDB
mongod

# Or as a service (Mac)
brew services start mongodb-community

# Or as a service (Linux)
sudo service mongod start
```

### Installation

**1. Install dependencies**
```bash
npm install
```

**2. Seed the database (optional but recommended)**
```bash
npm run seed
```

This will populate the database with 5 test subscribers.

**3. Start the server**
```bash
npm start
```

**4. Open your browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
lesson16_confetti_cuisine_capstone/
├── main.js                          # Main server file
├── package.json                     # Dependencies
├── seed.js                          # Database seed script
│
├── models/
│   └── subscriber.js                # Subscriber schema & model
│
├── controllers/
│   ├── homeController.js            # Home & courses logic
│   ├── subscribersController.js     # Subscriber CRUD operations
│   └── errorController.js           # Error handling
│
├── views/
│   ├── layout.ejs                   # Main layout template
│   ├── index.ejs                    # Home page
│   ├── courses.ejs                  # Courses listing
│   ├── course-detail.ejs            # Individual course page
│   ├── subscribers.ejs              # Subscribers listing
│   ├── contact.ejs                  # Subscribe form
│   ├── thanks.ejs                   # Thank you page
│   └── error.ejs                    # 404 error page
│
└── public/
    ├── css/
    │   ├── confetti_cuisine.css     # Main styles
    │   └── bootstrap.css            # Grid system
    ├── js/
    │   └── confettiCuisine.js       # Client-side JavaScript
    └── images/
        └── README.md                # Image instructions
```

## 🛣️ Routes

| Method | Route | Controller | Description |
|--------|-------|------------|-------------|
| GET | `/` | homeController.index | Home page |
| GET | `/courses` | homeController.showCourses | All courses |
| GET | `/courses/:courseId` | homeController.showCourseDetail | Course details |
| GET | `/subscribers` | subscriberController.getAllSubscribers | View subscribers |
| GET | `/contact` | subscriberController.getSubscriptionPage | Subscribe form |
| POST | `/subscribe` | subscriberController.saveSubscriber | Save subscriber |
| POST | `/subscribers/delete/:id` | subscriberController.deleteSubscriber | Delete subscriber |

## 📊 Database Structure

**Database Name:** `confetti_cuisine`

**Collection:** `subscribers`

**Schema:**
```javascript
{
  name: String (required, trimmed),
  email: String (required, unique, lowercase, trimmed),
  zipCode: Number (min: 10000, max: 99999),
  subscribedDate: Date (default: now)
}
```

## 🎓 Key Concepts Demonstrated

### 1. MVC Architecture

**Model** (models/subscriber.js)
```javascript
const subscriberSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  zipCode: { type: Number, min: 10000, max: 99999 }
});
```

**View** (views/subscribers.ejs)
```html
<% subscribers.forEach(subscriber => { %>
  <div class="subscriber">
    <p><%= subscriber.name %></p>
    <p><%= subscriber.email %></p>
  </div>
<% }); %>
```

**Controller** (controllers/subscribersController.js)
```javascript
exports.getAllSubscribers = (req, res) => {
  Subscriber.find({})
    .then(subscribers => res.render("subscribers", { subscribers }))
    .catch(error => console.log(error));
};
```

### 2. CRUD Operations

#### Create (C)
```javascript
exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  });
  newSubscriber.save()
    .then(result => res.render("thanks", { subscriberName: result.name }))
    .catch(error => res.send(error));
};
```

#### Read (R)
```javascript
exports.getAllSubscribers = (req, res) => {
  Subscriber.find({})
    .sort({ subscribedDate: -1 })
    .then(subscribers => res.render("subscribers", { subscribers }))
    .catch(error => console.log(error));
};
```

#### Delete (D)
```javascript
exports.deleteSubscriber = (req, res) => {
  Subscriber.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/subscribers"))
    .catch(error => console.log(error));
};
```

### 3. Form Handling

**HTML Form** (views/contact.ejs)
```html
<form action="/subscribe" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <input type="text" name="zipCode" pattern="[0-9]{5}" required>
  <button type="submit">Subscribe</button>
</form>
```

**Controller** (controllers/subscribersController.js)
```javascript
exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  });
  newSubscriber.save()
    .then(result => res.render("thanks"))
    .catch(error => res.send(error));
};
```

### 4. Error Handling

```javascript
// Duplicate email error
if (error.code === 11000) {
  res.send("This email is already subscribed!");
}

// 404 error
app.use((req, res) => {
  res.status(404).render("error", {
    errorMessage: "Page not found"
  });
});
```

## 🎨 Features

### Home Page
- Hero section with gradient background
- Feature cards for navigation
- Tech info about the capstone
- Responsive design

### Courses Page
- 4 cooking courses with details
- Price, duration, level, instructor
- Individual course detail pages
- Enroll CTA buttons

### Course Detail Page (NEW!)
- Full course information
- What you'll learn section
- Enroll and back buttons

### Subscribers Page
- List all subscribers from database
- Display subscription date
- Delete functionality with confirmation
- Empty state when no subscribers
- Statistics box

### Contact Page
- Subscribe form with validation
- 5-digit ZIP code pattern
- Client-side and server-side validation
- Benefits list

### Thank You Page
- Personalized confirmation
- Display submitted data
- Next steps guide
- Navigation buttons

## 🔧 MongoDB Shell Commands

```bash
# Open MongoDB shell
mongo

# Use our database
use confetti_cuisine

# Show collections
show collections

# Find all subscribers
db.subscribers.find().pretty()

# Count subscribers
db.subscribers.count()

# Find by email
db.subscribers.findOne({ email: "jon@jonwexler.com" })

# Update a subscriber
db.subscribers.updateOne(
  { email: "jon@jonwexler.com" },
  { $set: { zipCode: 10017 } }
)

# Delete a subscriber
db.subscribers.deleteOne({ email: "jon@jonwexler.com" })

# Clear all subscribers
db.subscribers.deleteMany({})

# Drop the collection
db.subscribers.drop()
```

## 📝 Enhancements Over Teacher's Version

| Feature | Teacher | Your Enhanced Version |
|---------|---------|----------------------|
| **Courses** | 3 courses | 4 courses with more details |
| **Course Details** | ❌ No | ✅ Individual course pages |
| **Subscriber Model** | Basic | Enhanced with validation |
| **Delete Function** | ❌ No | ✅ Delete with confirmation |
| **Styling** | Basic | Enhanced with animations |
| **JavaScript** | Minimal | Form validation + animations |
| **Error Handling** | Basic | Duplicate email detection |
| **Seed Data** | 3 subscribers | 5 subscribers |
| **Request Logging** | ❌ No | ✅ Timestamp logging |
| **Responsive** | Basic | Fully responsive |

## ⚠️ Common Issues & Solutions

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Start MongoDB with `mongod`

### Duplicate Email Error
```
E11000 duplicate key error collection
```
**Solution:** This is expected! The email field is unique. Try a different email.

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3000
```
**Solution:** 
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>
```

### Views Not Rendering
**Solution:** Make sure `express-ejs-layouts` is installed and configured:
```javascript
app.use(layouts);
app.set("view engine", "ejs");
```

## 💡 Try It Yourself

Enhance the project further:

1. **Add Update Functionality**
   - Create an edit form
   - Implement `findByIdAndUpdate()`
   - Add edit button to subscribers page

2. **Add Search/Filter**
   - Search subscribers by name or email
   - Filter by ZIP code range
   - Sort by different fields

3. **Add Pagination**
   - Limit subscribers per page
   - Add next/previous buttons
   - Show page numbers

4. **Create Course Model**
   - Move courses to database
   - Add CRUD for courses
   - Link courses to subscribers

5. **Add Authentication**
   - User login/signup
   - Protected routes
   - Session management

6. **Add Email Notifications**
   - Send confirmation emails
   - Use nodemailer
   - Email templates

## 🎓 What You've Learned

By completing this capstone, you've mastered:

- ✅ **MongoDB** - NoSQL database operations
- ✅ **Mongoose** - ODM for MongoDB
- ✅ **Express.js** - Web server framework
- ✅ **EJS** - Templating engine
- ✅ **MVC Pattern** - Code organization
- ✅ **CRUD Operations** - Create, Read, Delete
- ✅ **Form Handling** - POST requests
- ✅ **Validation** - Client and server-side
- ✅ **Error Handling** - Graceful failures
- ✅ **Responsive Design** - Mobile-friendly

## 🚀 Next Steps

**Unit 4** will cover:
- User authentication and sessions
- Password hashing
- Authorization and permissions
- Flash messages
- More advanced Mongoose features

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [EJS Documentation](https://ejs.co/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**🎉 Congratulations on completing Unit 3!** 

You've built a full-stack web application with database integration. This is a major milestone in your web development journey!

---

## 📄 License

MIT License - Feel free to use this project for learning and practice.

## 👨‍💻 Author

Created as part of "Get Programming with Node.js" coursework.

---

**Happy Coding! 🚀**
