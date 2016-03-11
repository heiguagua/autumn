'use strict';

/*============ #Controller ============*/
var MainController = angular.module('MainController', ['ui.router', 'MainService', 'MainDirective']);

MainController.controller('MainController.main', ['$scope',
  function($scope) {}
])


/*============ #Service ============*/
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
        menuTree.then(function(response){
          scope.menus = response.data;
          scope.$applyAsync(function(){
            element.metisMenu({
              preventDefault: false
            });
          });
        },function(response){
          console.error(response.status + response.statusText);
        });
      }
    };
  }
]);
