# Confetti Cuisine - Lesson 12 Capstone Project

A complete cooking course website built with **Express.js**, **EJS templates**, and **static file serving**.

## 🎯 Project Overview

This is an enhanced version of the Lesson 12 capstone project that demonstrates:
- ✅ Express.js server setup
- ✅ EJS templating with layouts
- ✅ Static file serving (CSS, JS, images)
- ✅ Form handling (GET and POST)
- ✅ Route parameters
- ✅ Error handling (404 and 500)
- ✅ MVC architecture (Model-View-Controller)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run the Server

```bash
npm start
```

Visit: **http://localhost:3000**

## 📁 Project Structure

```
lesson12_confetti_cuisine_enhanced/
├── main.js                      # Main Express server
├── package.json                 # Dependencies
├── controllers/
│   ├── homeController.js        # Route handlers for pages
│   └── errorController.js       # Error handling logic
├── views/
│   ├── layout.ejs               # Main layout template
│   ├── index.ejs                # Home page
│   ├── courses.ejs              # Courses listing
│   ├── course-detail.ejs        # Individual course page (NEW!)
│   ├── contact.ejs              # Contact form
│   ├── thanks.ejs               # Thank you page
│   └── error.ejs                # Error page
└── public/                      # Static files directory
    ├── css/
    │   ├── confetti_cuisine.css # Main stylesheet
    │   └── bootstrap.css        # Grid system
    ├── js/
    │   └── confettiCuisine.js   # Client-side JavaScript
    ├── images/                  # Image directory
    │   └── README.md            # Image instructions
    └── 404.html                 # Static 404 page
```

## 🎨 Features

### Core Features (From Teacher's Version)
- Home page with welcome message
- Courses listing page
- Contact form with POST handling
- Thank you page after form submission
- Error handling for 404 and 500 errors
- Static file serving for CSS, JS, and images

### ✨ Enhancements (Student Version)

#### 1. **Course Details Page** (NEW ROUTE)
- Individual page for each course
- Route: `/courses/:courseId`
- Shows detailed information about each course

#### 2. **Enhanced Course Data**
- Added `id`, `description`, `duration`, and `level` to each course
- 4 courses instead of 3 (added "Callback Cookies")

#### 3. **Better UI/UX**
- Course cards with hover effects
- Badges for duration and level
- Stats box on home page
- Confirmation box on thank you page
- Improved button styles with animations

#### 4. **Form Enhancements**
- Client-side validation
- Additional course selection dropdown
- Better form styling
- Personalized thank you message with submitted data

#### 5. **JavaScript Enhancements**
- Form validation
- Smooth scrolling
- Button animations
- Console logging for debugging
- Performance monitoring

#### 6. **CSS Improvements**
- Responsive design
- Fade-in animations
- Better color scheme
- Improved spacing and typography
- Mobile-friendly layout

#### 7. **Better Error Handling**
- Custom 404 page with styling
- Error messages passed to templates
- Logging middleware for all requests

## 🛣️ Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/courses` | List all courses |
| GET | `/courses/:courseId` | View individual course details (NEW!) |
| GET | `/contact` | Contact form |
| POST | `/contact` | Handle form submission |
| GET | `*` | 404 error page |

## 📝 How Static Files Work

### In `main.js`:
```javascript
app.use(express.static("public"));
```

### This means:
- Files in `public/` are served directly
- `public/css/confetti_cuisine.css` → `http://localhost:3000/css/confetti_cuisine.css`
- `public/js/confettiCuisine.js` → `http://localhost:3000/js/confettiCuisine.js`
- `public/images/people.jpg` → `http://localhost:3000/images/people.jpg`

### In EJS templates:
```html
<link rel="stylesheet" href="/css/confetti_cuisine.css">
<script src="/js/confettiCuisine.js"></script>
<img src="/images/people.jpg">
```

**Note:** Don't include "public" in the path!

## 🎓 Learning Objectives

### What You'll Learn:
1. **Express.js Basics**
   - Setting up a server
   - Middleware usage
   - Route handling

2. **Templating with EJS**
   - Layouts and partials
   - Passing data to views
   - Loops and conditionals

3. **Static File Serving**
   - Organizing assets
   - Serving CSS, JS, and images
   - Best practices

4. **Form Handling**
   - GET vs POST requests
   - Parsing form data
   - Redirecting after submission

5. **MVC Architecture**
   - Separating concerns
   - Controllers for logic
   - Views for presentation

6. **Error Handling**
   - 404 errors
   - 500 errors
   - Custom error pages

## 🔧 Customization Ideas

Want to practice more? Try these:
1. Add a "Testimonials" page
2. Create a database connection (MongoDB)
3. Add user authentication
4. Implement a shopping cart
5. Add more form fields (phone, address)
6. Create an admin panel
7. Add image uploads
8. Implement search functionality

## 📚 Dependencies

- **express**: Web framework
- **ejs**: Templating engine
- **express-ejs-layouts**: Layout support for EJS
- **http-status-codes**: HTTP status code constants

## 🐛 Troubleshooting

### Port already in use?
Change the port in `main.js`:
```javascript
app.set("port", process.env.PORT || 3001);
```

### Images not showing?
1. Make sure images are in `public/images/`
2. Check the file names match exactly
3. Use placeholder URLs for testing

### CSS not loading?
1. Check the path in `layout.ejs`
2. Make sure `app.use(express.static("public"))` is in `main.js`
3. Clear browser cache

## 📖 Comparison with Teacher's Version

| Feature | Teacher's Version | Your Version |
|---------|------------------|--------------|
| Courses | 3 courses | 4 courses |
| Course Details | No | Yes (NEW!) |
| Form Fields | Name, Email | Name, Email, Course Selection |
| JavaScript | Empty file | Form validation, animations |
| CSS | Basic styling | Enhanced with animations |
| Thank You Page | Generic | Personalized with data |
| Logging | None | Request logging middleware |
| Mobile Responsive | Basic | Improved |

## 🎉 Success!

You've built a complete web application with:
- ✅ Multiple pages
- ✅ Dynamic content
- ✅ Form handling
- ✅ Static file serving
- ✅ Error handling
- ✅ Clean code structure

**Great job!** 🎊

---

## 📝 Notes

- This project follows the same structure as the teacher's example
- All enhancements are beginner-friendly
- Comments are added throughout the code
- The theme (Confetti Cuisine) is maintained
- Core concepts from Lesson 12 are preserved

## 🤝 Credits

Based on "Get Programming with Node.js" - Lesson 12
Enhanced by: [Your Name]
Date: 2025

---

**Happy Coding! 🚀**
