var app = angular.module('app', ['ui.router','LoginController']);

app.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "scripts/partials/login.html",
      controller: 'loginController'
    });
});
