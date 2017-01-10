module.exports = {
  allStudents: function(req, res, next){
    res.status(200).json(students)
  }
}
var students = [
  {id: 123, name: "Marcus", lastName: "Ogden", password:'Password1', profileImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg'},
  {id: 223, name: "Nathan", lastName: "McCoy", password:'Password1', profileImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg'},
  {id: 333, name: "Manny", lastName: "Brooklinman", password:'Password1', profileImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg'}
]
