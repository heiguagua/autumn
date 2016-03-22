'use strict';
/* Alarm Info Controllers */

var AlarmInfoController = angular.module('AlarmInfoController', ['ui.router', 'AlarmInfoService', 'GlobalModule']);

AlarmInfoController.controller('AlarmInfoController.alarmInfo', ['$scope', '$q', '$uibModal','AlarmInfoService.http',
function($scope, $q, $uibModal, http) {
  // Promise
  var Qdefer = $q.defer();
  var Qpromise = Qdefer.promise;

  // Pagination
  $scope.Paging = {};
  $scope.Paging.maxSize = 5;
  $scope.Paging.itemsPerPage = 12;
  $scope.Paging.pageChanged = function() {
    _httpParams.skip = $scope.Paging.currentPage;
    _httpParams.limit = $scope.Paging.itemsPerPage;
    http.fetchAlarmInfo(_httpParams).then(function(data) {
      $scope.AlarmInfos = data.body;
    });
  };

  // Init Pagination Parameters for Http
  var _httpParams = {};
  _httpParams.skip = 1;
  _httpParams.limit = $scope.Paging.itemsPerPage;

  //Init Table
  http.fetchAlarmInfo(_httpParams).then(function(data) {
    $scope.AlarmInfos = data.body;
    $scope.Paging.totalItems = data.head.total;
  });

  // Search
  $scope.Search = function(){
    _httpParams.alarmTypeName = $scope.AlarmType;
    _httpParams.alarmName = $scope.AlarmName;
    http.fetchAlarmInfo(_httpParams).then(function(data){
      $scope.AlarmInfos = data.body;
    });
  }


}
])




'use strict';
/* Alarm Info Service */

var AlarmInfoService = angular.module('AlarmInfoService', []);

AlarmInfoService.factory('AlarmInfoService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchAlarmInfo(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/alarm-Info', {
          withCredentials: true,
          cache: false,
          params: params
        }).success(function(data, status, headers, config) {
        Qdefer.resolve(data);
      }).error(function(data, status, headers, config) {
        console.error(status);
        Qdefer.reject();
      })
      return Qpromise;
    };
    return {
      fetchAlarmInfo: fetchAlarmInfo
    }
  }
]);
