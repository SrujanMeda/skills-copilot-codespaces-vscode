// create web server
const http = require('http');
// http.createServer(function(req,res){
//     // set the response http header with status code 200
//     // and content type as text/plain
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     // send the response body "Hello World"
//     res.end('Hello World\n');
// }).listen(3000);
// console.log('Server running at http://localhost:3000/');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');