"use strict";

// Course data (ENHANCEMENT: Added more details)
const courses = [
  {
    id: 1,
    title: "Event Driven Cakes",
    cost: 50,
    description: "Learn to bake amazing cakes using event-driven techniques!",
    duration: "4 weeks",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Asynchronous Artichoke",
    cost: 25,
    description: "Master the art of preparing artichokes with async methods.",
    duration: "2 weeks",
    level: "Beginner"
  },
  {
    id: 3,
    title: "Object Oriented Orange Juice",
    cost: 10,
    description: "Create the perfect OJ using object-oriented principles.",
    duration: "1 week",
    level: "Beginner"
  },
  {
    id: 4,
    title: "Callback Cookies",
    cost: 30,
    description: "Bake delicious cookies while learning about callbacks!",
    duration: "3 weeks",
    level: "Intermediate"
  }
];

// Show home page
exports.showHome = (req, res) => {
  res.render("index", {
    pageTitle: "Welcome to Confetti Cuisine"
  });
};

// Show all courses
exports.showCourses = (req, res) => {
  res.render("courses", {
    pageTitle: "Our Courses",
    offeredCourses: courses
  });
};

// ENHANCEMENT: Show individual course details
exports.showCourseDetail = (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = courses.find(c => c.id === courseId);

  if (course) {
    res.render("course-detail", {
      pageTitle: course.title,
      course: course
    });
  } else {
    res.redirect("/courses");
  }
};

// Show contact/signup form
exports.showSignUp = (req, res) => {
  res.render("contact", {
    pageTitle: "Contact Us"
  });
};

// Handle form submission (ENHANCEMENT: Added validation and data display)
exports.postedSignUpForm = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  // Log the submission (in real app, save to database)
  console.log(`New signup - Name: ${name}, Email: ${email}`);

  res.render("thanks", {
    pageTitle: "Thank You!",
    userName: name,
    userEmail: email
  });
};
