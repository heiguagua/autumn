'use strict';
/* Login Controllers */

var loginControllers = angular.module('loginControllers', ['loginServices']);

loginControllers.controller('LoginController', ['$scope', 'LoginService',
  function($scope, LoginService) {
    console.log(LoginService.query());
    $scope.username = 'admin';
    $scope.password = 'admin';
  }
]);
