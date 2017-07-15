var url = require('url');
var address = 'http://localhost:8080/default.htm?year=2017&month=July';
var q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var url_data = q.query;
console.log(url_data.month);