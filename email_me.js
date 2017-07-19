var emailer = require('nodemailer');

var transporter = emailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'speachypeach@gmail.com',
		pass: 'Welcome!@'
	}
});

var mail_options = {
	from: 'speachypeach@gmail.com',
	to: 'speachy20@gmail.com',
    tls: { rejectUnauthorized: false },
	subject: 'NodeJS Email',
	text: 'Henlo fren!'
};

transporter.sendMail(mail_options, function(error, info)
{
	if(error)
	{
		console.log(error);
	}
	else
	{
		console.log('Sent email to fren!!!');
	}
});