var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var studentsController = require('./controllers/students.js');
var userAccounts = require('./controllers/userAccounts.js');
var config = require('./config.js');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var passport = require('passport');
var massive = require('massive');
var projects = require('./controllers/projectController');
var connectionString = "postgres://postgres:Myvault2@localhost/devdiscover";
var massiveInstance = massive.connectSync({connectionString : connectionString})
var app = express();

app.set('db', massiveInstance);
var db = app.get('db');


var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session());


app.use(session({
	secret: config.sessionSecret,
	resave: true,
	saveUninitialized: false,
	cookie: {
		maxAge:(1000*60*60*24*7)
	}
}));

// linkedin Oauth -
passport.use(new LinkedInStrategy({
  clientID: '86xnj5ownsu022',
  clientSecret: '3RPX0VF0YUYQRuB8',
  callbackURL: "http://localhost:3000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));

app.get('/auth/linkedin',
  passport.authenticate('linkedin', { state: 'sdfgdsfgsd4444'  }),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });
  app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: 'http://localhost:3000/#/companyProfile/newsfeed',
  failureRedirect: 'http://localhost:3000/#/signin'
}));
passport.serializeUser((user, done) => {
  return done(null, user)
})
passport.deserializeUser((user, done) => {
  return done(null, user)
})

//user connect SESSION
app.get('/api/user/connect', function(req, res, next){
	res.status(200).json(req.session.user)
});
app.post('/api/user/saveUser', function(req, res, next){
	console.log(req.body)
	let newUser = req.body.id
	let userId = req.session.user.id
	db.getSavedUsers([userId], function(err, result){
		let savedUsers = result[0].savedusers.split();
		if(savedUsers.indexOf(newUser) !== -1){
			savedUsers.push(newUser)
			console.log(savedUsers)
		}else{
			console.log('already in ')
		}
		var newSavedUsers = savedUsers.join(',')
		console.log(newSavedUsers)
		db.updateSavedUsers([newSavedUsers, userId], function(err, result){
			console.log(result)
		})
	})
});

//user Create projects
app.post('/api/user/createproject', function(req,res,next){
  	let project = req.body.project
  	let title = project.title
  	let disc = project.disc
  	let link = project.link
  	let image = project.image
  	let githublink = project.githublink
  	let html;
		if(project.html5 === true){
			html = "HTML5"
		}
  	let css;
		if(project.css === true){
			css = "CSS"
		}
  	let angular;
		if(project.angular === true){
			angular = "Angular"
		}
  	let node;
		if(project.node === true){
			node = "Node"
		}
  	let database;
		if(project.database === true){
			database = "Database"
		}
  	let id = req.session.user.id
		// console.log(css,node,angular)
		// console.log('this should be the id', req.session.user.id)
  	let accType = req.session.user.acctype
		let type;
		if(accType === "Student"){
			type = "Profile Piece"
		}else if(accType === "Employer"){
			type = "Project"
		}
  	db.addToProjects([id, title, disc, image, link, type, githublink, html, css, angular, node, database], function(err, result){
  		 res.send(result)
  	})
  })
// get user projects
app.post('/api/user/getUserProjects', function(req,res,next){
	var userId = req.body.data
	db.getUserProjects([userId], function(err, result){
		req.session.projectsData = result
		// console.log(req.session.projectsData)
		 res.send(result)
	})
})
// outfacing user
app.post('/api/user/goToStudent', function(req,res,next){
	let id = req.body.id
	var studentArr = req.session.allStudents
	for(var i = 0; i < studentArr.length; i++){
		if(studentArr[i].id === id){
			req.session.outfacingStudent = studentArr[i]
			db.getUserProjects([id], function(err, result){
				req.session.outfacingStudent.projectData = result;
				// console.log(result)
				return res.send(req.session.outfacingStudent)
			})
		}
	}
	// return res.send(req.session.outfacingStudent)
})
app.get('/api/user/goToStudentConnect', function(req,res,next){
	if(req.session.outfacingStudent){
		var id = req.session.outfacingStudent.id
		db.getUserProjects([id], function(err, result){
			req.session.outfacingStudent.projectData = result;
			// console.log(result)
			return res.send(req.session.outfacingStudent)
		})
	}
})
//get all students
app.get('/api/user/getAllStudents', function(req,res,next){
	var acctype = "Student"
	db.getAllStudents([acctype], function(err, result){
		req.session.allStudents = result;
		res.send(result);
		// console.log(req.session.allStudents)
	})
})
	// res.status(200).json("these are the projects")
app.post('/api/user/createuser', function(req,res,next){
	let data = req.body
	let name = data.firstName
	let lastname = data.lastName
	let email = data.email
	let password = data.password
	let userType = data.type
	let type = ''
	if(userType === "Employer2017"){
		console.log("Employer")
		type = "Employer"
	}else if(userType === "Student2017"){
		console.log("Student")
		type = "Student"
	}
	let profileimg = 'http://loyalkng.com/wp-content/uploads/2010/01/facebook-art-no-photo-image-batman-mickey-mouse-spock-elvis-rick-roll.jpg'
	db.createuser([name, email, password, profileimg, lastname, type], function(err, result){
		 res.send(result)
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
				userId = result[0].id
				req.session.user = result[0]
				 return res.send(req.session.user)
			}else{
				return res.send("wrong")
			}
		}
	})
})
// Profile Updates
app.post('/api/user/profileimgUpdate', function(req,res,next){
	let data = req.body
	// console.log(data)
	let img = data.image
	req.session.user.profileimage = img
	let email = data.email
	db.profileimgUpdate([img, email], function(err, result){
		res.send(result[0])
	})
})
app.post('/api/user/githubUserUpdate', function(req,res,next){
	let data = req.body
	let repos = data.repos
	// console.log(repos)
	let githubUser = data.githubUser
	req.session.user.githubuser = githubUser
	req.session.user.gitrepos = repos
	let email = data.email
	db.githubUserUpdate([githubUser, repos, email], function(err, result){
		res.send('test')
	})
})

app.post('/api/user/saveUserBio', function(req,res,next){
	let data = req.body
	// console.log(data)
	let newUserBio = data.userbio
	req.session.user.userbio = newUserBio
	let email = data.email
	db.saveUserBio([newUserBio, email], function(err, result){
		res.send(result[0])
	})
})




app.listen(3000, function(){
  console.log('I\'m listening on port 3000');
})
