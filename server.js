var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(12346);

console.log("eof server.js");

process.on( 'SIGINT', function() {
  console.log( "\ngracefully shutting down from  SIGINT (Crtl-C)" );
  // some other closing procedures go here
  process.exit( );
});