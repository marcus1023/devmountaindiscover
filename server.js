var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var studentsController = require('./controllers/students.js');
var userAccounts = require('./controllers/userAccounts.js');
var config = require('./config.js');


var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));

// var students = [
//   {id: 123, name: "marcus", lastName: "ogden", home: "North Carolina"},
//   {id: 223, name: "Nathan", lastName: "McCoy", home: "Kintuckey"},
//   {id: 333, name: "Manny", lastName: "quiz", home: "Brooklin"}
// ]


app.get('/api/user/accounts', userAccounts.allUserAccounts);
app.post('/api/user/accounts', userAccounts.checkUserPass);
app.get('/api/user/connect', userAccounts.connect);






app.listen(3000, function(){
  console.log('I\'m listening');
})
