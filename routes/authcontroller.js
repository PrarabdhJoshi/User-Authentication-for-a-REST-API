var jwt = require('jsonwebtoken');
module.exports.authenticate = function(req,res){
	var user = {
		usrname: 'test',
		email : 'example@test.com'
	}

	var token = jwt.sign(user, process.env.SECRET_KEY,{
		expiresIn: 30000 
	});
	res.json({
		success: true,
		token: token
	})

}