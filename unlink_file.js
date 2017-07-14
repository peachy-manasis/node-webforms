var fs = require('fs');

fs.unlink('newfile1.txt', function(err)
{
	if(err) throw err;
	console.log('Successfully removed file!');
});