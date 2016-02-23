'use strict';
/*Login Controllers */
var LoginController = angular.module('LoginController', []);

LoginController.controller('loginController', ['$scope',
  function($scope) {
    $scope.username = 'admin';
    $scope.password = 'admin';
  }
]);
