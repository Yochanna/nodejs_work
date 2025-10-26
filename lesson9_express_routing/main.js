const port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController");

// Middleware to parse URL-encoded data and JSON
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// Custom middleware to log request paths
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

// GET route with route parameters
app.get("/items/:vegetable", homeController.sendReqParam);

// POST route to handle form submissions
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
