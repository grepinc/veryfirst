var http = require("http");

http.createServer(function(res, resp){
   resp.writeHead(200, {"content-type" : "text/plain"});
   resp.end("Hello world");
}).listen(30001);

console.log(process.env); //eslint-disable-line no-console
