const fs = require('fs');

function index ( req, res ){
	// if(req.session.role != 'admin') res.redirect('/')
	let data = {
		role:req.session.role
	}
	res.render('admin-dashboard', data);
}


function juri ( req, res ){
	// if(req.session.role != 'juri') res.redirect('/')
	let data = {
		role:req.session.role,
		username:req.session.username
	}
	console.log(data)
	res.render('juri-dashboard', data);
}


function authenticate(user, pass){
	let users = {
		admin:{	password: 'abrakadabra', role: 'admin' },
		juri1:{ password: 'passjur1', role: 'juri' },
		juri2:{ password: 'passjur2', role: 'juri' },
		juri3:{ password: 'passjur3', role: 'juri' },
		juri4:{ password: 'passjur4', role: 'juri' },
		juri5:{ password: 'passjur5', role: 'juri' },

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
		req.session.username = username
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