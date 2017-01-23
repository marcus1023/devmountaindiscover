angular.module('discoverApp').controller('projectController', function($http, $scope, mainService, projectService, $window){


$scope.createProject = function(project){
  projectService.createProject(project);
}




})
