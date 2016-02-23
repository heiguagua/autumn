'use strict';
/* Login Controllers */

var loginControllers = angular.module('loginControllers', ['loginServices']);

loginControllers.controller('LoginController', ['$scope', 'LoginService',
  function($scope, LoginService) {
    console.log(LoginService);
    $scope.username = 'admin';
    $scope.password = 'admin';
  }
]);
