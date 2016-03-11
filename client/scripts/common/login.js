'use strict';

/*============ #Controller ============*/
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


/*============ #Service ============*/
var LoginService = angular.module('LoginService',[]);

LoginService.service('LoginService.login', ['$http',
  function($http) {
    $http({
      method: 'POST',
      url: 'http://localhost:5000/api/test',
      withCredentials: true
    }).success(function(data, status, headers, config) {
      console.log('HTTP Cookie : ' + document.cookie);
      console.log('HTTP Response : ' + data);
    }).error(function(data, status, headers, config) {
      console.error("HTTP Status Code : "+status);
    });
  }
]);
