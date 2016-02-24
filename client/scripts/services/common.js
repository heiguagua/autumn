'use strict';
/* Common Service */

var commonService = angular.module('commonServices', ['ngResource']);

commonService.service('LoginService', ['$resource',
  function($resource) {
    return $resource('login', {}, {
      query: {method:'POST', params:{username:'admin', password: 'password'}, isArray:true}
    });
  }
]);
