angular.module('discoverApp',  ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl: "../templates/home-tmpl.html",
            controller: "mainController"
        })
        .state('signin',{
            url:'/signin',
            templateUrl: "../templates/signin-tmpl.html",
            controller: "userController"
        })
        .state('eSignUp',{
            url:'/eSignUp',
            templateUrl: "../templates/employerSignUp.html",
            controller: "userController"
        })
        .state('sSignUp',{
            url:'/sSignUp',
            templateUrl: "../templates/studentSignUp.html",
            controller: "userController"
        })
        .state('mainSignUp',{
            url:'/mainSignUp',
            templateUrl: "../templates/mainSignUp.html",
            controller: "userController"
        })
        .state('createProfile',{
            url:'/createProfile',
            templateUrl: "../templates/createProfile.php",
            controller: "userController"
        })
        .state('createEmployerProfile',{
            url:'/createEmployerProfile',
            templateUrl: "../templates/createEmployerProfile.html",
            controller: "userController"
        })
        .state('newProject',{
            url:'/newProject',
            templateUrl: "../templates/newProject.php",
            controller: "projectController"
        })
        .state('newProfilePiece',{
            url:'/newProfilePiece',
            templateUrl: "../templates/newProfilePiece.html",
            controller: "projectController"
        })
        .state('userprofile',{
            url:'/userprofile',
            templateUrl: "../templates/userprofile.html",
            controller: "userController"
        })
        .state('githubConnect',{
            url:'/githubConnect',
            templateUrl: "../templates/githubConnect.html",
            controller: "userController"
        })
        .state('userprofile.newsfeed',{
            url:'/newsfeed',
            templateUrl: "../templates/userprofileNewsfeed.html",
            controller: "userController"
        })
        .state('userprofile.timeline',{
            url:'/timeline',
            templateUrl: "../templates/userprofileTimeline.html",
            controller: "userController"
        })
        .state('companyProfile.newsfeed',{
            url:'/newsfeed',
            templateUrl: "../templates/userprofileNewsfeed.html",
            controller: "userController"
        })
        .state('companyProfile.timeline',{
            url:'/timeline',
            templateUrl: "../templates/userprofileTimeline.html",
            controller: "userController"
        })
        .state('companyProfile',{
            url:'/companyProfile',
            templateUrl: "../templates/companyProfile.html",
            controller: "userController"
        })
        .state('employerInfo',{
            url:'/employerInfo',
            templateUrl: "../templates/employerInfo.html",
            controller: "employerController"
        })
        .state('studentLineup',{
          url:"/studentLineup",
          templateUrl: "../templates/students/student-lineup.html",
          controller: "userController"
        })
        .state('james',{
            url:'/james',
            templateUrl: "../templates/james-tmpl.html",
            controller: "mainController"
        })
        .state('mike',{
            url:'/mike',
            templateUrl: "templates/mike-tmpl.html",
            controller: "mainController"
        })
        .state('sally',{
            url:'/sally',
            templateUrl: "templates/sally-tmpl.html",
            controller: "mainController"
        })
        .state('joan',{
            url:'/joan',
            templateUrl: "templates/joan-tmpl.html",
            controller: "mainController"
        })
        .state('LItest',{
            url:'/LItest',
            templateUrl: "templates/linkedinTestingPage.html",
            controller: "userController"
        })
        .state('timertempl',{
            url:'/timertempl',
            templateUrl: "templates/timertempl.html",
            controller: "linkedinController"
        })
        .state('outfacingStudent',{
            url:'/outfacingStudent',
            templateUrl: "templates/students/outfacing-student.html",
            controller: "userController"
        })
        .state('searchresults',{
            url:'/searchresults',
            templateUrl: "templates/search-results.html",
            controller: "userController"
        })




        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/');
    });
