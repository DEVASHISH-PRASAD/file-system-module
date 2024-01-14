const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write(
      "<h1>I Am Happy To Learn Full Stack Web Development From PW Skills.</h1>"
    );
  } else {
    res.write("<h1>THERE IS NO CONTENT TO DISPLAY</h1>");
  }
  res.end();
});

server.listen(5002);
console.log("Server is created successfully");
