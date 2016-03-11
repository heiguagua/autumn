'use strict';
/* Init System Controllers */

var InitSystemController = angular.module('InitSystemController', ['ui.router', 'InitSystemService', 'InitSystemDirective']);

InitSystemController.controller('InitSystemController.initSystem', ['$scope',
  function($scope) {}
])




'use strict';
/* Init System Service */

var InitSystemService = angular.module('InitSystemService', []);

InitSystemService.service('InitSystemService.initSystem', ['$http',
  function($http) {

  }
]);



'use strict';
/* Init System Directives */

var InitSystemDirective = angular.module('InitSystemDirective', ['InitSystemService']);

// Init System Directive
InitSystemDirective.directive('wiservInitSystem', [
  function() {
  }
]);
