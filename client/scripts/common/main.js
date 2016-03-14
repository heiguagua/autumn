'use strict';

/*============ #Controller ============*/
var MainController = angular.module('MainController', ['ui.router', 'MainService', 'MainDirective']);
//
MainController.controller('MainController.main', ['$rootScope', '$scope',
  function($rootScope, $scope) {

  }
])


/*============ #Service ============*/
var MainService = angular.module('MainService', []);
// Menu Tree
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


/*============ #Directive ============*/
var MainDirective = angular.module('MainDirective', ['MainService']);
// Toggle Button
MainDirective.directive('wiservMainWrapper', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.toggler')[0].addEventListener('click', function() {
          element.find('.content').toggleClass("content-collapse");
          element.find('.sidebar').toggleClass("sidebar-collapse");
          element.find('.content>.navbar').toggleClass("nav-collapse");
        });
      }
    }
  }
]);
// Menu Tree
MainDirective.directive('wiservMenuTree', ['MainService.menuTree',
  function(menuTree) {
    return {
      restrict: 'AE',
      controller: 'MainController.main',
      link: function(scope, element, attrs) {
        menuTree.then(function(response) {
          scope.menus = response.data;
          scope.$applyAsync(function() {
            element.metisMenu({
              preventDefault: false
            });
          });
        }, function(response) {
          console.error(response.status + response.statusText);
        });
      }
    };
  }
]);
