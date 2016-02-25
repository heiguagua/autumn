'use strict';
/* Common Service */

var commonService = angular.module('commonServices', ['ngResource']);

commonService.service('LoginService', ['$resource', '$http',
  function($resource, $http) {
    $http({
      method: 'POST',
      url: 'http://localhost:5000/api/user'
    }).success(function(data, status, headers, config) {
      console.log(data);
    }).error(function(data, status, headers, config) {
      console.error("HTTP Status Code : "+status);
    });
  }
]);
