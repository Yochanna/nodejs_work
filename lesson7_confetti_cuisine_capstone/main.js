const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

// Define routes
router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.html
  });
  utils.getFile("views/index.html", res);
});

router.get("/courses.html", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.html
  });
  utils.getFile("views/courses.html", res);
});

router.get("/contact.html", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.html
  });
  utils.getFile("views/contact.html", res);
});

router.post("/contact", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.html
  });
  utils.getFile("views/thanks.html", res);
});

// Serve static files from public directory
router.get("/public/confetti_cuisine.css", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.css
  });
  utils.getFile("public/confetti_cuisine.css", res);
});

router.get("/public/bootstrap.css", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.css
  });
  utils.getFile("public/bootstrap.css", res);
});

router.get("/public/confettiCuisine.js", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.js
  });
  utils.getFile("public/confettiCuisine.js", res);
});

// Serve images
router.get("/public/product.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.jpg
  });
  utils.getFile("public/product.jpg", res);
});

router.get("/public/people.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, {
    "Content-Type": contentTypes.jpg
  });
  utils.getFile("public/people.jpg", res);
});

// Create and start server
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
