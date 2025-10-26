"use strict";

const httpStatus = require("http-status-codes");

// Handle 404 errors
exports.pageNotFoundError = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error", {
    pageTitle: "Page Not Found",
    errorMessage: "Oops! The page you're looking for doesn't exist."
  });
};

// Handle 500 errors
exports.internalServerError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is experiencing issues!`);
};
