"use strict";

// Logging middleware
exports.logRequestPaths = (req, res, next) => {
  console.log(`Request made to: ${req.url}`);
  next();
};

// Show home page
exports.index = (req, res) => {
  res.render("index");
};

// Show classes page
exports.showClasses = (req, res) => {
  const classes = [
    { name: "Yoga Flow", instructor: "Sarah Chen", time: "Mon/Wed 6:00 AM" },
    { name: "HIIT Training", instructor: "Mike Johnson", time: "Tue/Thu 7:00 PM" },
    { name: "Spin Class", instructor: "Emma Davis", time: "Mon/Wed/Fri 5:30 PM" },
    { name: "Pilates", instructor: "Lisa Martinez", time: "Tue/Thu 9:00 AM" }
  ];

  res.render("classes", { offeredClasses: classes });
};
