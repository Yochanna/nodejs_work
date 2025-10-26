"use strict";

exports.showHome = (req, res) => {
  res.render("index", {
    pageTitle: "Book Store - Mongoose Models"
  });
};
