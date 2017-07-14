var fs = require('fs');

fs.rename('newfile2.txt', 'newerfile_number2.txt', function(err)
{
	if(err) throw err;
	console.log("successfully renamed file!");
});