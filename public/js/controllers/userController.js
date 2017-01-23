angular.module('discoverApp').controller('userController', function($rootScope,$scope, mainService, userService, $window){


// create user section
$scope.createUserProfile = function(firstName, lastName, email, password, newUser){
  console.log(firstName, lastName, email, password)
  if(firstName && lastName && email && password){
    $('.create-profile-form').hide()
    $('.create-profile-section h3').show()
    $('#field-prompt-5').hide()
    userService.createUser(newUser)
  }
   if(!firstName){
    $('#field-prompt-1').show()
    $('#field-prompt-5').show()
  }else{
    $('#field-prompt-1').hide()
  }
   if(!lastName){
    $('#field-prompt-2').show()
    $('#field-prompt-5').show()
  }else{
    $('#field-prompt-2').hide()
  }
   if(!email){
    $('#field-prompt-3').show()
    $('#field-prompt-5').show()
  }else{
    $('#field-prompt-3').hide()
  }
   if(!password){
    $('#field-prompt-4').show()
    $('#field-prompt-5').show()
  }else{
    $('#field-prompt-4').hide()
  }
  if(!firstName || !lastName || email || !password) {
    $('#field-prompt-5').show()
  }
  }

$scope.getUsers = function(){
  userService.getUsers().then(function(res){
    $scope.userAccounts = res
  })
}


$scope.getUser = function(userAccount){
  userService.getUser(userAccount).then(function(res){
    data = res.data
    if(data === "wrongPass"){
      alert("wrong pass brotha")
    }else{
      $rootScope.currentUser = data
      window.location = 'http://localhost:3000/#/userprofile'
    }
  })
}


$scope.getUserConnect = function(){
  userService.getUserConnect().then(function(res){
    $scope.currentUser = res.data;
    // $scope.currentUserCompanies = res.data[0].companies
    // $scope.githubUser = res.data[0].githubUsername
    // var data = res.data[0]
    // if(data.type === "company"){
    //   $scope.currentUser.studentsReport = data.students.length
    // }
    // var githubUser = res.data[0].githubUsername
    // console.log("yoooo nig",githubUser )
    //   userService.githubUser(githubUser).then(function(res){
    //     console.log(res)
    //     $scope.currentUserGitRepos = res.data.public_repos
    //   })
  })
}

$scope.getUserConnect();

})
