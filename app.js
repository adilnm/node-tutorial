var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", 'utf8');
myReadStream.on('data', function(chunk){
    console.log('new chunk')
    console.log(chunk)
}) 
// var server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hey ninjas");
// });

// server.listen(3000, "127.0.0.1");

// console.log('Now listening to port 3000')
