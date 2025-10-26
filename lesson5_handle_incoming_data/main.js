const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer();

const getJSONString = obj => {
  return JSON.stringify(obj, null, 2);
};

const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/contact": "<h1>Contact Us</h1>"
};

app.on("request", (req, res) => {
  console.log(`Method: ${getJSONString(req.method)}`);
  console.log(`URL: ${getJSONString(req.url)}`);
  console.log(`Headers: ${getJSONString(req.headers)}`);

  var body = [];
  req.on("data", (bodyData) => {
    body.push(bodyData);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(`Request Body Contents: ${body}`);
  });

  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });

  if (routeResponseMap[req.url]) {
    res.end(routeResponseMap[req.url]);
  } else {
    res.end("<h1>Welcome!</h1>");
  }
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
