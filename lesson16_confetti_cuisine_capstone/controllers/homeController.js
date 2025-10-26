"use strict";

// Course data with more details
let courses = [
  {
    id: 1,
    title: "Event Driven Cakes",
    cost: 50,
    description: "Learn to bake amazing cakes using event-driven techniques!",
    duration: "4 weeks",
    level: "Intermediate",
    instructor: "Chef Eggplant"
  },
  {
    id: 2,
    title: "Asynchronous Artichoke",
    cost: 25,
    description: "Master the art of preparing artichokes with async methods.",
    duration: "2 weeks",
    level: "Beginner",
    instructor: "Professor Souffle"
  },
  {
    id: 3,
    title: "Object Oriented Orange Juice",
    cost: 10,
    description: "Create the perfect OJ using object-oriented principles.",
    duration: "1 week",
    level: "Beginner",
    instructor: "Chef Citrus"
  },
  {
    id: 4,
    title: "Callback Cookies",
    cost: 30,
    description: "Bake delicious cookies while learning about callbacks!",
    duration: "3 weeks",
    level: "Intermediate",
    instructor: "Baker Promise"
  }
];

// Show home page
exports.index = (req, res) => {
  res.render("index", {
    pageTitle: "Welcome to Confetti Cuisine"
  });
};

// Show all courses
exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses,
    pageTitle: "Our Courses"
  });
};

// ENHANCEMENT: Show individual course details
exports.showCourseDetail = (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = courses.find(c => c.id === courseId);

  if (course) {
    res.render("course-detail", {
      course: course,
      pageTitle: course.title
    });
  } else {
    res.redirect("/courses");
  }
};
