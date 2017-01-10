angular.module('discoverApp').service('userService', function($http, $q){


  this.getUsers = function(){
    return $http({
      method: 'GET',
      url: "/api/user/accounts"
    })
  }

  this.getUser = function(userAccount){

     return $http({
      method: 'POST',
      url: "/api/user/accounts",
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



});
