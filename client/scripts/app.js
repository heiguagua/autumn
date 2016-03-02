'use strict';
/* Bootstrap Application */

var app = angular.module('app', [
  'ui.router',
  'Config',
  'LoginController',
  'MainController',
  'DashboardController',
  'ResourceCatalogController'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'scripts/partials/login.html',
      controller: 'LoginController.login'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'scripts/partials/main.html',
      controller: 'MainController.main'
    })
    .state('main.dashboard', {
      url: '/dashboard',
      templateUrl: 'scripts/partials/dashboard.html',
      controller: 'DashboardController.dashboard'
    })
    .state('main.resourceCatalog', {
      url: '/resourceCatalog',
      templateUrl: 'scripts/partials/resourceCatalog.html',
      controller: 'ResourceCatalogController.resourceCatalog'
    })
}]);
