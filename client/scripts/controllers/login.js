'use strict';
/* Login Controllers */

var loginControllers = angular.module('loginControllers', ['ui.router', 'loginServices']);

loginControllers.controller('LoginController', ['$scope', '$state', 'LoginService',
  function($scope, $state, LoginService) {
    // Define a global object for current page
    $scope.login = {};
    // Binding login info
    $scope.login.username = 'admin';
    $scope.login.password = 'admin';
    // Binding submit event
    $scope.login.submit = function(){
      $state.go("main");
    }
  }
]);
