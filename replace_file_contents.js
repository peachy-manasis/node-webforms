var fs = require('fs');

fs.writeFile('newfile3.txt', 'Henlo dis is new contnet ok fren ty... :) ', function(err)
{
	if(err) throw err;
	console.log('File updated!');
});