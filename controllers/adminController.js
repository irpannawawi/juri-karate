const fs = require('fs');


function index ( req, res ){
	res.render('admin-dashboard')
}

function login(req, res){
	const username = req.body.username;
	const password = req.body.password;
	
}
module.exports.index = index;
module.exports.login = login;