"use strict";

exports.respondNoResourceFound = (req, res) => {
  res.status(404);
  res.render("error", {
    pageTitle: "404 - Page Not Found",
    errorMessage: "The page you're looking for doesn't exist."
  });
};

exports.respondInternalError = (err, req, res, next) => {
  console.error(`ERROR occurred: ${err.stack}`);
  res.status(500);
  res.send("500 - Internal Server Error");
};
