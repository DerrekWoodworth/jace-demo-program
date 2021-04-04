const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
  const url = req.url.substring(1)
  // If the request contains weather, then we want to get the weather for that location
  if (url.includes("weather")) {
    console.log("Trying to access: " + url)
    try {
      const data = fs.readFileSync(url)
      res.writeHead(200)
      res.end(data)
    } catch (err) {
      console.log(err)
      res.writeHead(404)
      res.end("File: " + url + " was not found on server")
    }
  } else {
    try{
      res.writeHead(200);
      res.end(fs.readFileSync("index.html"));
    } catch (err) {
      console.log(err)
      res.writeHead(500)
      res.end("Error reading index.html")
    }
  }
}

const server = http.createServer(requestListener);
server.listen(8080);

