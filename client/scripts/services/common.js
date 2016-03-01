'use strict';
/* Common Service */

var commonService = angular.module('commonServices', ['ngResource']);

commonService.constant('CONFIG', {name:'uinika'});

commonService.service('LoginService', ['$resource', '$http',
  function($resource, $http) {
    $http({
      method: 'POST',
      url: 'http://localhost:5000/test',
      withCredentials: true
    }).success(function(data, status, headers, config) {
      console.log('HTTP Cookie : ' + document.cookie);
      console.log('HTTP Response : ' + data);
    }).error(function(data, status, headers, config) {
      console.error("HTTP Status Code : "+status);
    });
  }
]);

commonService.service('MenuTreeService', ['$resource', '$http', 'API',
  function($resource, $http, API) {
    if( API && API.path ){
      return $http({
        method: 'GET',
        url: API.path+'/menu/getRoleMenuList_ajax.action',
        withCredentials: true
      });
    }
    else{
      console.error('API Not Found in config.js');
    }
  }
]);
