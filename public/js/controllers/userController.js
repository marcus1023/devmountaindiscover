angular.module('discoverApp').controller('userController', function($http ,$rootScope,$scope, mainService, userService, projectService, $window){

$scope.currentUser;
$scope.outfacingUser;
// linkedin Oauth
$scope.linkedinOauth = function(){
  userService.linkedinOauth().then(function(res){
    console.log("SUCCESS in LINKEDIN")
  })
}
// create user section
$scope.createUserProfile = function(firstName, lastName, email, password, type, newUser){
  console.log(newUser)
  if(type === "Employer2017" || type === "Student2017"){
    if(firstName && lastName && email && password ){
      $('.create-profile-form').hide()
      $('.create-profile-section h3').show()
      $('#field-prompt-5').hide()
        window.location = 'http://localhost:3000/#/signin'
        userService.createUser(newUser).then(function(res){
          console.log("success!")
        })
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
    if(!firstName || !lastName || !email || !password) {
      $('#field-prompt-5').show()
    }
  }else{
    $('#wrong-invite').show()
  }
}


$scope.getUser = function(userAccount){
  userService.getUser(userAccount).then(function(res){
    var data = res.data
    console.log(data)
    if(data === "wrong"){
      $('#wrong-pass').show()
    }else{
      if(data.acctype === 'Student'){
        window.location = 'http://localhost:3000/#/userprofile/newsfeed'
      }else if(data.acctype === 'Employer'){
        window.location = 'http://localhost:3000/#/companyProfile/newsfeed'
      }
    }
  })
}
$scope.gitHubConnect = function(userInfo){
  var githubUser = userInfo.username
  let password = userInfo.password
  let email = $scope.currentUser.email
  if(githubUser && password === $scope.currentUser.password ){
    userService.gitHubConnect(githubUser,email).then(function(res){
      window.location = 'http://localhost:3000/#/userprofile'
    })
  }else{
  }
}

// $scope.$on('LastRepeaterElement', function(){
//   console.log();
//   $('#activity-tag-html').show()
//
// });
$scope.goToStudent = function (id){
  userId = {id:id}
  userService.goToStudent(userId).then(function(res){
    console.log("this is the res data",res.data)
    $scope.currentUser.outfacingUser = res.data
    window.location = 'http://localhost:3000/#/outfacingStudent'
  })
}

$scope.getUserConnect = function(){
  userService.getUserConnect().then(function(res){
    let data = res.data;
    // console.log(data)
    let email = data.email
    userService.currentuser = res.data;
    projectService.currentuser = res.data;
    $rootScope.currentUser = res.data;
    let githubUser = data.githubuser
    if(githubUser){
      userService.gitHubConnect(githubUser,email).then(function(res){
        $scope.currentUser.gitrepos = res.data.public_repos
      })
    }else{
      $('#githubConnect').show()
    }
    userService.getUserProjects(data.id).then(function(res){
      // console.log(res)
      $scope.currentUser.projectData = res.data
    })
    userService.getAllStudents().then(function(res){
      $scope.currentUser.allStudents = res.data
    })
    userService.goToStudentConnect().then(function(res){
      console.log(res.data)
      $scope.currentUser.outfacingUser = res.data

      // console.log($scope.currentUser.outfacingUser
    })
  })
}


$scope.getUserConnect();

$scope.uploadProfilePic = function(){
  var blobFile = $('#filechooser')[0].files[0];
  var test = {blobFile: blobFile}
  userService.imagetesting(test).then(function(res){
  })


}

// profile updates
$scope.newProfileimg = function(){

 var newImg = prompt("type in image url (image from file comming soon...)")
 if(newImg){
   var email = $scope.currentUser.email
   var imgUpdate = {image: newImg, email: email}
  userService.newProfileimg(imgUpdate).then(function(res){
    location.reload();
  })
 }
}
$scope.newUserBio = function(){
     $('#newUserBio').show()
     $('.save-user-bio').show()
}
$scope.saveUserBio = function(){
     $('#newUserBio').hide()
     $('.save-user-bio').hide()
     var newUserBio = $('#newUserBio').val()
     var email = $scope.currentUser.email
     var userBioUpdate = {userbio: newUserBio, email: email }
     userService.saveUserBio(userBioUpdate).then(function(res){
       location.reload();
     })
}
// save user
$scope.saveUser = function(userId){
  console.log(userId)
  userService.saveUser(userId).then(function(res){
    console.log("there and back again")
  })
}
//Raw jquery

$('#explainInvite').click(function(){
  $('#Invite-section').show()
})





})
