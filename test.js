var http = require('http');
var dt = require('./mydatetimemodule');

http.createServer(function(req, res)
{
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Henlo world!');
	res.end('The current date and time is:');
	res.end();
}).listen(8080);