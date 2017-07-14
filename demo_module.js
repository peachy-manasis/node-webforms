var http = require('http');
var dt = require('./mydatetimemodule');

http.createServer(function(req, res)
{
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('The current date and time is: ' + dt.myDateTime());
}).listen(8080);