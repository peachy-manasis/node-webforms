var mysql = require('mysql');

var conn = mysql.createConnection({
	host: "localhost",
	user: "peachy",
	password: "peachy",
	database: "node_test"
});

conn.connect(function(err)
{
	if(err) throw err;
	console.log("Connected!");

	var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

	conn.query(sql, function(err, result)
	{
		if(err) throw err;
		console.log("record added!");
	});
});