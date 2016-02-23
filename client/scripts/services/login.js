'use strict';
/* Login Service */

var loginService = angular.module('loginServices', ['ngResource']);

loginService.service('LoginService', ['$resource',
  function($resource) {
    return $resource('login', {}, {
      query: {method:'POST', params:{username:'admin', password: 'password'}, isArray:true}
    });
  }
]);
