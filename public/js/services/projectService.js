angular.module('discoverApp').service('projectService', function($http, $q){

this.createProject = function(newProject){
   return $http({
    method: 'POST',
    url: "/api/user/createproject",
    data: newProject
  })
}

});
