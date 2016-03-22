'use strict';
/* Contacts Group Controllers */

var ContactsGroupController = angular.module('ContactsGroupController', ['ui.router', 'ContactsGroupService', 'GlobalModule']);

ContactsGroupController.controller('ContactsGroupController.contactsGroup', ['$scope', '$q', '$uibModal', 'ContactsGroupService.http',
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
      http.fetchContactsGroup(_httpParams).then(function(data) {
        $scope.ContactUsers = data.body;
      });
    };

    // Init Pagination Parameters for Http
    var _httpParams = {};
    _httpParams.skip = 1;
    _httpParams.limit = $scope.Paging.itemsPerPage;

    //Init Table
    http.fetchContactsGroup(_httpParams).then(function(data) {
      $scope.ContactUsers = data.body;
      $scope.Paging.totalItems = data.head.total;
    });

    // Modal for Create
    $scope.Create = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'contactsGroupModal.html',
        controller: 'ContactsGroupController.contactsGroupModal'
      });
      modalInstance.result.then(function(_httpParams) {
        // Save operation by promise
      }, function() {
        console.info('Modal dismissed');
      });
    };

    // Modal for Update
    $scope.Update = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'contactsGroupModal.html',
        controller: 'ContactsGroupController.contactsGroupModal'
      });
      modalInstance.result.then(function(item) {
        _httpParams = item;
      }, function() {
        console.info('Modal dismissed');
      });
    };

  }
])

ContactsGroupController.controller('ContactsGroupController.contactsGroupModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    $scope.OperationType = '添加';
    var _modelResult = {};
    $scope.Confirm = function() {
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
]);


'use strict';
/* Contacts Group Service */

var ContactsGroupService = angular.module('ContactsGroupService', []);

ContactsGroupService.factory('ContactsGroupService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function fetchContactsGroup(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.get(
        API.path + '/api/contacts-group', {
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
      fetchContactsGroup: fetchContactsGroup
    }
  }
]);
