'use strict';
/* Common Service */

var MainService = angular.module('MainService', []);

MainService.service('MainService.login', ['$http',
  function($http) {
    $http({
      method: 'POST',
      url: 'http://localhost:5000/api/test',
      withCredentials: true
    }).success(function(data, status, headers, config) {
      console.log('HTTP Cookie : ' + document.cookie);
      console.log('HTTP Response : ' + data);
    }).error(function(data, status, headers, config) {
      console.error("HTTP Status Code : " + status);
    });
  }
]);

MainService.service('MainService.menuTree', ['$http', 'API',
  function($http, API) {
    if (API && API.path) {
      return $http({
        method: 'GET',
        url: API.path + '/api/menu',
        withCredentials: true
      });
    } else {
      console.error('API Not Found in config.js');
    }
  }
]);
