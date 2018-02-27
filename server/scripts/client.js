// First param to module is the name, matches ng-app in HTML
// Second is dependency array
const app = angular.module('myApp', ['ngRoute'])// <--Pass in angular-route module

app.config(function($routeProvider){
    $routeProvider.when( '/', {
        templateUrl: 'views/home.html'
    }).when('/about',{
        templateUrl: 'viewx/about.html'
    }).otherwise({redirectTo: '/' });
})