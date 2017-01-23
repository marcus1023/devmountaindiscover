angular.module('discoverApp').service('linkedinService', function($http, $q ){

  this.getLinkedIn = function(){
    var defer = $q.defer()
    $http({
     method: 'GET',
     url: "http://swapi.co/api/people/1/"
   }).then(function(res){
     console.log('worked')
     defer.resolve(res)
   })
   return defer.promise
  }



})
