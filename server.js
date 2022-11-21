const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Response from the server");
  })
  .listen(8282, "127.0.0.1");

//if we want to display html

http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(
    `
    <html>
    <body>
    <h1 style="background:black">INSIDE THE SERVER!</h1>
    </body>
    </html>
    `)
    res.end("Response from the server");
  })
  .listen(8282, "127.0.0.1");

 
