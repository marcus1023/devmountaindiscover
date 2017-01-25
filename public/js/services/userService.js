angular.module('discoverApp').service('userService', function($http, $q){


  this.getUsers = function(){
    return $http({
      method: 'GET',
      url: "/api/user/accounts"
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
  this.getUser = function(userAccount){
     return $http({
      method: 'POST',
      url: "/api/user/verify",
      data: userAccount
    })
  }

  this.githubUser = function(githubUser){
    return $http({
      method: 'GET',
      url: "https://api.github.com/users/" + githubUser
    })
  }

  this.getUserConnect = function(){
    return $http({
      method: 'GET',
      url: "/api/user/connect"
    })
  }

  this.createUser = function(newUser){
     return $http({
      method: 'POST',
      url: "/api/user/createuser",
      data: newUser
    })
  }
  this.imagetesting = function(blobFile){
     return $http({
      method: 'POST',
      url: "/api/user/imagetesting",
      data: blobFile
    })
  }




});
