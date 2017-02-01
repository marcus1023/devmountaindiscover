angular.module('discoverApp').service('projectService', function($http, $q){

this.currentuser;

this.createProject = function(fullProject){
   return $http({
    method: 'POST',
    url: "/api/user/createproject",
    data: fullProject
  })
}

});
