'use strict';
/* Bootstrap Application */

var app = angular.module('app', ['ui.router','loginControllers']);

app.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /login
  $urlRouterProvider.otherwise('/login');
  // Now set up the states
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'scripts/partials/login.html',
      controller: 'LoginController'
    })
    .state('main',{
      url: '/main',
      templateUrl: 'scripts/partials/main.html',
      controller: 'MainController'
    })
});
