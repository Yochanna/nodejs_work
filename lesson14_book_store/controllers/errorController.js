"use strict";

exports.pageNotFoundError = (req, res) => {
  res.status(404);
  res.sendFile(__dirname + "/../public/404.html");
};

exports.internalServerError = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500);
  res.send("500 - Internal Server Error");
};
