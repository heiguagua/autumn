'use strict';
/* Common Controllers */

var commonControllers = angular.module('commonControllers', ['ui.router', 'commonServices', 'commonDirectives']);

commonControllers.controller('LoginController', ['$scope', '$state', 'LoginService',
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

commonControllers.controller('MainController',['$scope',
  function($scope){

  }
])
