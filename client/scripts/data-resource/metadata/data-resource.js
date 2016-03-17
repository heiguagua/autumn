'use strict';
/* Data Resource Controllers */

var DataResourceController = angular.module('DataResourceController', ['ui.router', 'DataResourceService', 'DataResourceDirective', 'angularModalService']);

DataResourceController.controller('DataResourceController.dataResource', ['$scope', 'DataResourceService.http', 'ModalService',
  function($scope, http, modalService) {
    $scope.init = {
      'count': 5,
      'page': 1,
      'sortBy': 'name',
      'sortOrder': 'dsc'
    };
    $scope.reloadCallback = function() {};

    $scope.filterBy = {
      'resName': ''
    };
    $scope.search = function() {
      $scope.reloadCallback();
    };
    $scope.getResource = function(params, paramsObj) {
      window.console.log(paramsObj);
      return http.fetch(paramsObj).then(function(response) {
        return {
          'rows': response.body,
          'header': [{
            key: 'checkbox',
            name: ""
          }, {
            key: 'resName',
            name: '资源名称'
          }, {
            key: 'resCat',
            name: '资源目录分类'
          }, {
            key: 'resDept',
            name: '资源所属部门'
          }, {
            key: 'resCreateTime',
            name: '资源创建时间'
          }, {
            key: 'resAccessStaus',
            name: '资源接入状态'
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

    $scope.checked = function(row) {
      $scope.checkedItem = row;
    }

    $scope.remove = function() {
      http.deleteRow($scope.checkedItem).then(function(response) {
        $scope.reloadCallback();
      });
    }

    /* show add dialog*/
    $scope.showAdd = function() {
      modalService.showModal({
        templateUrl: 'modal.html',
        controller: "DataResourceModalController",
        inputs: {
          title: "添加数据接入资源",
          resName: null,
          resCat: null,
          resDept: null,
          resTheme: null,
          resService: null,
          resDesc: null
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          window.console.log("add result: " + result);
          http.add(result).then(function(response) {
            window.console.log(response);
          });
        });
      });
    };

    /* show edit dialog*/
    $scope.showEdit = function() {
      modalService.showModal({
        templateUrl: 'modal.html',
        controller: "DataResourceModalController",
        inputs: {
          title: "修改数据接入资源",
          resName: $scope.checkedItem.resName,
          resCat: $scope.checkedItem.resCat,
          resDept: $scope.checkedItem.resDept,
          resTheme: $scope.checkedItem.resTheme,
          resService: $scope.checkedItem.resService,
          resDesc: $scope.checkedItem.resDesc
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          window.console.log("edit result: " + result);
          http.update(result).then(function(response) {
            window.console.log(response);
          });
        });
      });
    };

  }
]);

DataResourceController.controller('DataResourceModalController', [
  '$scope', 'DataResourceService.http', '$element', 'title','resName', 'resCat','resDept','close',
  function($scope, http, $element, title, resName, resCat, resDept, close) {
    $scope.resName = resName;
    $scope.resCat = null;
    $scope.resDept = resDept;
    $scope.resTheme = null;
    $scope.resService = null;
    $scope.resDesc = null;
    $scope.title = title;

    $scope.close = function() {
      close({
        resName: $scope.resName,
        resCat: $scope.resCat,
        resDept: $scope.resDept,
        resTheme: $scope.resTheme,
        resService: $scope.resService,
        resDesc: $scope.resDesc
      }, 500); // close, but give 500ms for bootstrap to animate
    };


  }
]);



'use strict';
/* Data Resource Service */

var DataResourceService = angular.module('DataResourceService', []);

DataResourceService.factory('DataResourceService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetch(paramsObj) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http.get(
        API.path + '/api/data-resource', {
          withCredentials: true,
          cache: false,
          params: paramsObj
        }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(statusa);
        deferred.reject();
      })
      return promise;
    }
    function add(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      window.console.log(params);
      $http.post(
        API.path + '/api/data-resource', {
          withCredentials: true,
          cache: false,
          params: {
            resName:params.resName
          }
        }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(statusa);
        deferred.reject();
      })
      return promise;
    }
    function update(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      window.console.log(params);
      $http.put(
        API.path + '/api/data-resource', {
          withCredentials: true,
          cache: false,
          params: {
            resName:params.resName
          }
        }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(statusa);
        deferred.reject();
      })
      return promise;
    }

    function deleteRow(paramsObj) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      $http.delete(
        API.path + '/api/data-resource', {
          withCredentials: true,
          cache: false,
          params: {
            resName: paramsObj.resName,
            resCat: paramsObj.resCat
          }
        }).success(function(data, status, headers, config) {
        deferred.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(statusa);
        deferred.reject();
      })
      return promise;
    }
    return {
      fetch: fetch,
      deleteRow: deleteRow,
      update: update,
      add: add
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

/**
DataResourceDirective.directive('wiservModalDialog', [
  function() {
    return {
      restrict: 'AE',
      scope: {
        title: '=',
        template: '='
      },
      link: function(scope, element, attrs) {
        scope.showModal = function() {
          scope.viewModal = true;
        }
        scope.closeModal = function() {
          scope.viewModal = false;
        }
      }
    }
  }
]);
**/
