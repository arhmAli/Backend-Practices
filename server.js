const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Response from the server");
  })
  .listen(8282, "127.0.0.1");
