'use strict';
/* Common Directive */

var commonDirectives = angular.module('commonDirectives', ['ngResource']);

commonDirectives.service('MainDirective', ['$resource',
  function($resource) {
    return $resource('login', {}, {
      query: {method:'POST', params:{username:'admin', password: 'password'}, isArray:true}
    });
  }
]);
