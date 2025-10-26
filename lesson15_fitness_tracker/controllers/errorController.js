"use strict";

exports.logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

exports.respondNoResourceFound = (req, res) => {
  res.status(404);
  res.render("error");
};

exports.respondInternalError = (err, req, res, next) => {
  console.log(`ERROR occurred: ${err.stack}`);
  res.status(500);
  res.send("500 - Internal Server Error");
};
