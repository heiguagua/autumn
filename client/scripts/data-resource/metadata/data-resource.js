'use strict';
/* Data Resource Controllers */

var DataResourceController = angular.module('DataResourceController', ['ui.router', 'DataResourceService', 'DataResourceDirective']);

DataResourceController.controller('DataResourceController.dataResource', ['$scope', 'DataResourceService.http',
  function($scope, http) {
    $scope.init = {
      'count': 5,
      'page': 1,
      'sortBy': 'name',
      'sortOrder': 'dsc',
      'filterBase': 1
    };
    $scope.filterBy = {
      '': '',
      '': ''
    };
    $scope.getResource = function(params, paramsObj) {
      return http.fetch().then(function(response) {
        return {
          'rows': response.body,
          'header': [{
            key: 'resName',
            value: '资源名称'
          }, {
            key: 'resCat',
            value: '资源源目录分类'
          }, {
            key: 'resDept',
            value: '资源所属部门'
          }, {
            key: 'resCreateTime',
            value: '资源创建时间'
          }, {
            key: 'resAccessStaus',
            value: '资源接入状态'
          }],
          'pagination': {
            "count": 10,
            "page": 1,
            "pages": 7,
            "size": response.body.length
          },
          'sortBy': 'name',
          'sortOrder': 'asc'
        }
      });
    }

  }
]);




'use strict';
/* Data Resource Service */

var DataResourceService = angular.module('DataResourceService', []);

DataResourceService.factory('DataResourceService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetch() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http.get(
        API.path + '/api/data-resource', {
          withCredentials: true,
          cache: false
        }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(statusa );
        deferred.reject();
      })
      return promise;
    }
    return {
      fetch: fetch
    }
  }
]);


'use strict';
/* Data Resource Directives */

var DataResourceDirective = angular.module('DataResourceDirective', ['DataResourceService']);

// Data Resource Directive
DataResourceDirective.directive('wiservDataResource', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });


      }
    }
  }
]);
