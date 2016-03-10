'use strict';
/* Login Service */

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
