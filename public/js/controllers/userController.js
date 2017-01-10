angular.module('discoverApp').controller('userController', function($scope, mainService, userService, $window){

$scope.happy = "shit ballz"

$scope.getUsers = function(){
  userService.getUsers().then(function(res){
    $scope.userAccounts = res
  })
}

$scope.getUser = function(userAccount){
  userService.getUser(userAccount).then(function(res){
    var data = res.data
    if(data.type === "student"){
      $window.location.href = '#/userprofile';
    }else if(data.type === "company"){
      $window.location.href = '#/companyProfile';
    }
  })
}

$scope.getUserConnect = function(){
  userService.getUserConnect().then(function(res){
    console.log(res)
    $scope.currentUser = res.data[0];
    $scope.currentUserCompanies = res.data[0].companies
    $scope.githubUser = res.data[0].githubUsername
    var data = res.data[0]
    if(data.type === "company"){
      $scope.currentUser.studentsReport = data.students.length
    }
    var githubUser = res.data[0].githubUsername
    console.log("yoooo nig",githubUser )
      userService.githubUser(githubUser).then(function(res){
        console.log(res)
        $scope.currentUserGitRepos = res.data.public_repos
      })
  })
}



// $scope.getGithub = function(githubUser){
//   userService.githubUser(githubUser).then(function(res){
//     console.log("hi!")
//     console.log(res)
//   })
// }

$scope.getUserConnect();

})
