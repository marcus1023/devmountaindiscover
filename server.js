var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var studentsController = require('./controllers/students.js');
var userAccounts = require('./controllers/userAccounts.js');
var config = require('./config.js');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var passport = require('passport');
var request = require('request');
var massive = require('massive');

var connectionString = "postgres://postgres:Myvault2@localhost/devdiscover";
var massiveInstance = massive.connectSync({connectionString : connectionString})
var app = express();

app.set('db', massiveInstance);
var db = app.get('db');

var UserConnect = ""

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize());

app.get('/api/user/accounts', userAccounts.allUserAccounts);
app.get('/api/user/connect', function(req, res, next){
	res.status(200).json(UserConnect)
});
app.post('/api/user/createproject', function(req,res,next){
	let data = req.body
	console.log(data)
	let title = data.title;
	let disc = data.disc;
	let link = data.link;
	db.createproject([title, disc, link], function(err, res){
		console.log("done", res, err)
	})
});
app.post('/api/user/createuser', function(req,res,next){
	let data = req.body
	let name = data.firstName + " " + data.lastName
	let email = data.email
	let password = data.password
	db.createuser([name, email, password], function(err, res){
		console.log("done", res, err)
	})
});
app.post('/api/user/verify', function(req,res,next){
	let data = req.body
	let email = data.email
	var password = data.password
	db.verifyuser([email], function(err, result){
		if(result[0]){
			var verifyPass = result[0].password
			if(verifyPass === password){
				UserConnect = result[0]
				return res.send(result[0])
			}else{
				return res.send("wrongPass")
			}
		}
	})
})





app.listen(3000, function(){
  console.log('I\'m listening on port 3000');
})
