'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('challengeApp', ['ngRoute']);

app.
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html',controller:'homeCtrl'});
  $routeProvider.when('/challenge',{templateUrl:'partials/challenge.html',controller:'challengeCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
