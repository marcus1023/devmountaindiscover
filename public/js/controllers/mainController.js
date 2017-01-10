angular.module('discoverApp').controller('mainController', function( $scope, mainService, projectsService){


$scope.getAlumni = function(){
   $scope.allAlumni = mainService.getAlumni();
}

$scope.allProjects = function(){
  var allProjects = projectsService.getProjects();
  $scope.cssMain = allProjects[0];
  console.log($scope.cssMain)
  console.log(allProjects)
}




})
