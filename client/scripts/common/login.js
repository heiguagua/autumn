'use strict';

/*============ #Controller ============*/
var LoginController = angular.module('LoginController', ['ui.router', 'LoginService']);

LoginController.controller('LoginController.login', ['$scope', '$state', 'HttpAuth',
  function($scope, $state, HttpAuth) {
    // Define a global object for current page
    $scope.login = {};
    // Binding submit event
    $scope.login.submit = function() {
      var parameters = {
        username: $scope.login.username,
        password: $scope.login.password
      }
      HttpAuth.get({parameters},function(data){
        if(data.head.status === 200){
          $state.go("main.dashboard");
        }
      });
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
