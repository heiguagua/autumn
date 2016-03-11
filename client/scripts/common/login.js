'use strict';

/*============ #Controller ============*/
var LoginController = angular.module('LoginController', ['ui.router', 'LoginService']);

LoginController.controller('LoginController.login', ['$scope', '$state', 'HttpAuth',
  function($scope, $state, HttpAuth) {
    // Define a global object for current page
    $scope.login = {};
    // Binding login info
    var test = HttpAuth.get(function(data){
      $scope.login.username = data.username;
      $scope.login.password = data.password;
    });
    // Binding submit event
    $scope.login.submit = function() {
      $state.go("main.dashboard");
    }
  }
]);


/*============ #Service ============*/
var LoginService = angular.module('LoginService',['ngResource']);

LoginService.factory('HttpAuth', ['$resource',
  function($resource) {
    return $resource('http://localhost:5000/api/auth', {}, {
      withCredentials: true
    });
  }
]);
