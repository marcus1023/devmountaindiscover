angular.module('discoverApp').controller('projectController', function($rootScope, $http, $scope, mainService, userService, projectService, $window){

$scope.createProject = function(project){
  let userID = $scope.currentUser.id
  console.log(userID, project)
  fullProject = {id: userID, project: project}
  projectService.createProject(fullProject).then(function(res){
    window.location = 'http://localhost:3000/#/companyProfile/timeline'
  })
}


// Data Persist
$scope.getUserConnect = function(){
  userService.getUserConnect().then(function(res){
    let data = res.data;
    let email = data.email
    $scope.currentUser = res.data;
    $rootScope.currentUser = res.data;
    let githubUser = data.githubuser
    if(githubUser){
      userService.gitHubConnect(githubUser,email).then(function(res){
        $scope.currentUser.gitrepos = res.data.public_repos
      })
    }else{
      $('#githubConnect').show()
    }

  })
}
$scope.getUserConnect();


})
