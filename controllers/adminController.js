const fs = require('fs');
const session = require('express-session');
function index ( req, res ){
	res.render('admin-dashboard');
}


function juri ( req, res ){
	res.render('juri-dashboard');
}


function authenticate(user, pass){
	let users = {
		admin:{	password: 'abrakadabra', role: 'admin' },
		juri1:{ password: 'passjur1', role: 'jur1' },
		juri2:{ password: 'passjur2', role: 'jur2' },
		juri3:{ password: 'passjur3', role: 'jur3' },
		juri4:{ password: 'passjur4', role: 'jur4' },
		juri5:{ password: 'passjur5', role: 'jur5' },

	}
	console.log(user)
	if(users[user].password === pass){
		return true;
	}else{
		return false
	}
}

function login(req, res){
	const username = req.body.username;
	const password = req.body.password;
	let auth = authenticate(username, password);
	
	if(auth){
		req.session.user = "udin"
	}
	res.send('oke')
	
}
module.exports.index = index;
module.exports.login = login;
module.exports.juri = juri;