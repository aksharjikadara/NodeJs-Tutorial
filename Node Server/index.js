const http = require("http");
const fs = require('fs')

const apiData = fs.readFileSync('user.json', 'utf-8')
const home = fs.readFileSync('index.html', 'utf-8')
const notFound = fs.readFileSync('404.html', 'utf-8')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(home);
    }else if(req.url == '/api'){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(apiData);
    }else{
        res.statusCode = 404
        res.end(notFound)
    }
});

server.listen(3000, () => {
  console.log("Server is running on 3000");
});
