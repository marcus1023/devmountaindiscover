angular.module('discoverApp',  ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('james',{
            url:'/james',
            templateUrl: "../templates/james-tmpl.html"
        })
        .state('mike',{
            url:'/mike',
            templateUrl: "templates/mike-tmpl.html"
        })
        .state('sally',{
            url:'/sally',
            templateUrl: "templates/sally-tmpl.html"
        })
        .state('joan',{
            url:'/joan',
            templateUrl: "templates/joan-tmpl.html"
        })




        $urlRouterProvider
            .otherwise('/');
    });
