const http = require("http");
const fs = require('fs')

const data = fs.readFileSync('user.json', 'utf-8')

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(data);
});

server.listen(3000, () => {
  console.log("Server is running on 3000");
});
