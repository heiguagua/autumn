'use strict';
/* Server Manage Controllers */

var ServerManageController = angular.module('ServerManageController', ['ui.router', 'GlobalModule', 'ServerManageService', 'ServerManageDirective']);

/* Server Manage Controller */
ServerManageController.controller('ServerManageController.serverManage', ['$scope', 'ServerManageService.http',
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
            key: 'serverID',
            name: '服务器ID'
          }, {
            key: 'IPAddress',
            name: 'IP地址'
          }, {
            key: 'hdUseRate',
            name: '硬盘使用率'
          }, {
            key: 'cpuUseRate',
            name: 'CPU使用率'
          }, {
            key: 'memoryUseRate',
            name: '内存使用率'
          }, {
            key: 'connectStatus',
            name: '服务器连接状态'
          }],
          'pagination': {
            "count": 5,
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
])


'use strict';
/* Server Mangage Service */

var ServerManageService = angular.module('ServerManageService', []);

ServerManageService.factory('ServerManageService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetch() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http.get(
        API.path + '/api/server-manage', {
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
/* Server Manage Directives */

var ServerManageDirective = angular.module('ServerManageDirective', ['ServerManageService']);

// Server Manage Directive
ServerManageDirective.directive('wiservServerManage', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'serverID',
            title: '服务器ID'
          }, {
            field: 'IPAddress',
            title: 'IP地址'
          }, {
            field: 'hdUseRate',
            title: '硬盘使用率'
          }, {
            field: 'cpuUseRate',
            title: 'CPU使用率'
          }, {
            field: 'memoryUseRate',
            title: '内存使用率'
          }, {
            field: 'connectStatus',
            title: '服务器连接状态'
          }],
          data: [],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);
