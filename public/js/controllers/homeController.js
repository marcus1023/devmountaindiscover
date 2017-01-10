angular.module('discoverApp').controller('homeController', function( $scope, mainService, projectsService){

$scope.test = "hello World"

$scope.getAlumni = function(){
   $scope.allAlumni = mainService.getAlumni();
}

$scope.allProjects = function(){
  var allProjects = projectsService.getProjects();
  $scope.cssMain = allProjects[0];
  console.log($scope.cssMain)
  console.log(allProjects)
}

$scope.getAlumni();
$scope.allProjects();
})
