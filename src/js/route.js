// myAppModule.config(function ($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: 'pages/home.html', 
//             controller: 'homeController'
//         })
//         .when('/about', {
//             templateUrl: 'pages/about.html',
//             controller: 'aboutController'
//         })
//         .when('/contact', {
//             templateUrl: 'pages/contact.html',
//             controller: 'contactController'
//         })
//         .otherwise({
//             templateUrl: 'pages/routeNotFound.html',
//             controller: 'notFoundController'
//         });
// });
myAppModule.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .state('about', {
            url: "/about",
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })
        .state('notFound', {
            url: "/notFound",
            templateUrl: 'views/routeNotFound.html',
            controller: 'notFoundController'
        });
    $urlRouterProvider.when('',"/");
    $urlRouterProvider.otherwise("/notFound");
})