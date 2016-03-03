'use strict';
/* Login Controllers */

var LoginController = angular.module('LoginController', ['ui.router', 'LoginService']);

LoginController.controller('LoginController.login', ['$scope', '$state', 'LoginService.login',
  function($scope, $state, LoginService) {
    // Define a global object for current page
    $scope.login = {};
    // Binding login info
    $scope.login.username = 'admin';
    $scope.login.password = 'admin';
    // Binding submit event
    $scope.login.submit = function() {
      $state.go("main.dashboard");
    }
  }
]);
