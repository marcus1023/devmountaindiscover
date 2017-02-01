angular.module('discoverApp').service('userService', function($rootScope, $http, $q){



  this.linkedinOauth = function(){
    return $http({
      method: 'GET',
      url: "/auth/linkedin"
    })
  }
  this.getAllStudents = function(){
    return $http({
      method: 'GET',
      url: "/api/user/getAllStudents"
    })
  }
  // update user profiles
  this.newProfileimg = function(imgUpdate){
    return $http({
      method: 'POST',
      url: "/api/user/profileimgUpdate",
      data: imgUpdate
    })
  }
  this.saveUserBio = function(userBioUpdate){
    return $http({
      method: 'POST',
      url: "/api/user/saveUserBio",
      data: userBioUpdate
    })
  }
  this.gitHubConnect = function(githubUser, email){
    var defer = $q.defer();
    let githubUserUpdate = {githubUser: githubUser, email: email}

     $http({
      method: 'GET',
      url: "https://api.github.com/users/" + githubUser
    }).then(function(res){
      githubUserUpdate.repos = res.data.public_repos
      // console.log( res.data.public_repos)
      $http({
       method: 'POST',
       url:'/api/user/githubUserUpdate',
       data: githubUserUpdate
     })
      defer.resolve(res)
    })
  return  defer.promise
  }

// user connect  calls
  this.getUserConnect = function(){
    return $http({
      method: 'GET',
      url: "/api/user/connect"
    })
  }
  this.getUserProjects = function(data){
    var newData = {data:data}
    return $http({
      method: 'POST',
      url: "/api/user/getUserProjects",
      data: newData
    })
  }
  this.getUser = function(userAccount){
     return $http({
      method: 'POST',
      url: "/api/user/verify",
      data: userAccount
    })
  }
  this.goToStudent = function(id){
    return $http({
     method: 'POST',
     url: "/api/user/goToStudent",
     data: id
   })
  }
  this.goToStudentConnect = function(){
    return $http({
     method: 'GET',
     url: "/api/user/goToStudentConnect"
   })
  }
// user creation reqs
  this.createUser = function(newUser){
     return $http({
      method: 'POST',
      url: "/api/user/createuser",
      data: newUser
    })
  }
//save user
this.saveUser = function(userid){
  var user = {id: userid}
  console.log(user)
  return $http({
   method: 'POST',
   url: "/api/user/saveUser",
   data: user
 })
}

// User Type Dependencies

this.userTypeDependencies = function(data){
  let type = data.acctype
  if(type === "Student"){
    console.log(data.name + " is a " + type)
    $('#add-to-queue').show();
  }else if (type === "Employer"){
    console.log(data.lastname + " is an " + type)
    $('#save-student').show();
  }
}



});
