const fs = require('fs');

function index ( req, res ){
	if(req.session.role != 'admin') res.redirect('/')
	let data = {
		role:req.session.role
	}
	res.render('admin-dashboard', data);
}


function juri ( req, res ){
	if(req.session.role != 'juri') res.redirect('/')
	let data = {
		role:req.session.role
	}
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
	if(users[user]){
		if(users[user].password === pass) {
			return {status: true, data:users[user]};
		}else{
			return {status:false, msg: "password not match"}
		}
	}else{
		return {status: false, msg: "user not found"};
	}
}

function login(req, res){
	const username = req.body.username;
	const password = req.body.password;
	let auth = authenticate(username, password);
	console.log(auth)
	if(auth.status){
		req.session.role = auth.data.role
		console.log({session: req.session})
		if(req.session.role == 'admin'){
			res.redirect('/admin')
		}else{
			res.redirect('/juri')
		}
	}else{
		console.log(auth.msg)
		res.redirect('/')
	}	
}
module.exports.index = index;
module.exports.login = login;
module.exports.juri = juri;