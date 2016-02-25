'use strict';
/* Common Service */

var commonService = angular.module('commonServices', ['ngResource']);

commonService.service('LoginService', ['$resource', '$http',
  function($resource, $http) {
    $http({
      method: 'POST',
      url: 'http://localhost:5000/api/user',
      withCredentials: true
    }).success(function(data, status, headers, config) {
      console.log('HTTP Cookie : ' + document.cookie);
      console.log('HTTP Response : ' + data);
    }).error(function(data, status, headers, config) {
      console.error("HTTP Status Code : "+status);
    });
  }
]);
