angular.module('discoverApp').controller('linkedinController', function($scope, linkedinService ){

$scope.test = 'this app is working'

$scope.getLinkedIn = function(){
  linkedinService.getLinkedIn().then(function(res){
    console.log(res)
  })
  window.open('https://www.linkedin.com/developer/apps/5056516/auth', '_blank');
}




})
