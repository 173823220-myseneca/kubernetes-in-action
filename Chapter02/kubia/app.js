const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + "v0.2 of this application" + "\n");
};

var www = http.createServer(handler);
www.listen(8080);

