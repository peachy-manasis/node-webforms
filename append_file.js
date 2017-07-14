var fs = require('fs');

fs.appendFile('newfile1.txt', 'Henlo frens, is vvv good day from G O O D G I R L E ! ! !', function(err)
{
	if(err) throw err;
	console.log('Saved to file!');
});