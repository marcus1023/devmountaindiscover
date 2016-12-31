angular.module('discoverApp').controller('mainController', function( $scope, mainService){

$scope.test = "hello World"

$scope.getAlumni = function(){
   $scope.allAlumni = mainService.getAlumni();
}


$scope.getAlumni();

})
