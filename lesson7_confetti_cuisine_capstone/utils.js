const fs = require("fs");

const getFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>File Not Found</h1>");
    } else {
      res.write(data);
    }
    res.end();
  });
};

module.exports = {
  getFile
};
