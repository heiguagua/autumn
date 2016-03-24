'use strict';

/*============ #Controller ============*/
var MainController = angular.module('MainController', ['ui.router', 'MainService', 'MainDirective', 'GlobalModule']);
//
MainController.controller('MainController.main', ['$rootScope', '$scope', '$q', '$uibModal', 'MainService.http',
  function($rootScope, $scope, $q, $uibModal, http) {
    $scope.first_menu = null;
    $scope.second_menu = null;
    $scope.third_menu = null;
    $scope.breadcrumbs = [];

    /* Dynamic breadcrumbs */
    $scope.createBread = function(ev) {
      var target = ev.target;
      var menu_title = target.innerText;
      var href = target.getAttribute('href');
      window.console.log(href);
      var menu_level = target.getAttribute('data-level');
      switch (menu_level) {
        case '1':
          $scope.firstMenu = {
            'menu_title': menu_title,
            'menu_href': href
          };
          $scope.secondMenu = null;
          $scope.thirdMenu = null;
          break;
        case '2':
          $scope.thirdMenu = null;
          $scope.secondMenu = {
            'menu_title': menu_title,
            'menu_href': href
          };
          break;
        case '3':
          $scope.thirdMenu = {
            'menu_title': menu_title,
            'menu_href': href
          };
          break;
        default:
          window.console.log('not support');
      }
      $scope.breadcrumbs = [];
      var filteredBread = _.compact(_.concat($scope.firstMenu, $scope.secondMenu, $scope.thirdMenu));
      $scope.breadcrumbs = filteredBread;
    }

    var _httpParams = {};

    /* Update User Info */
    $scope.UpdateUser = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'updateUserModal.html',
        controller: 'MainController.updateUserModal'
      });
      modalInstance.result.then(function(_httpParams) {
        http.updateUser(_httpParams).then(function(data) {
          if ('200' === data.head.status) {
            return data.head;
          }
        }).then(function(head) {
          return head.message;
        }).then(function(message) {
          // Pop alert
          window.console.log(message);
          $scope.Alerts = [{
            type: 'success',
            message: message,
            timeout: 1200
          }];
          $scope.CloseAlert = function(index) {
            $scope.Alerts.splice(index, 1);
          };
        });
      }, function() {
        console.info('Modal dismissed');
      });
    }

    /* Update User Pasword */
    $scope.UpdatePassword = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'updatePasswordModal.html',
        controller: 'MainController.updatePasswordModal'
      });
      modalInstance.result.then(function(_httpParams) {
        http.updateUser(_httpParams).then(function(data) {
          if ('200' === data.head.status) {
            return data.head;
          }
        }).then(function(head) {
          return head.message;
        }).then(function(message) {
          // Pop alert
          window.console.log(message);
          $scope.Alerts = [{
            type: 'success',
            message: message,
            timeout: 1200
          }];
          $scope.CloseAlert = function(index) {
            $scope.Alerts.splice(index, 1);
          };
        });
      }, function() {
        console.info('Modal dismissed');
      });
    }

    /* Sign Out */
    $scope.SignOut = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'signOutModal.html',
        controller: 'MainController.signOutModal'
      });
      modalInstance.result.then(function(_httpParams) {

      }, function() {
        console.info('Modal dismissed');
      });
    }


  }
])

/* Update User Modal */
MainController.controller('MainController.updateUserModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    var _modelResult = {};
    $scope.Confirm = function () {
      _modelResult.personName = $scope.Model.personName;
      _modelResult.gender = $scope.Model.gender;
      _modelResult.phoneNo = $scope.Model.phoneNo;
      _modelResult.email = $scope.Model.email;
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
]);

/* Update User Modal */
MainController.controller('MainController.updatePasswordModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    var _modelResult = {};
    $scope.Confirm = function () {
      _modelResult.oldPassword = $scope.Model.oldPassword;
      _modelResult.newPassword = $scope.Model.newPassword;
      _modelResult.reNewPassword = $scope.Model.reNewPassword;
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
]);

/* Sign Out Modal */
MainController.controller('MainController.signOutModal', [
  '$scope', '$uibModalInstance',
  function($scope, $uibModalInstance) {
    $scope.Model = {};
    var _modelResult = {};
    $scope.Confirm = function () {
      $uibModalInstance.close(_modelResult);
    };
    $scope.Cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
]);


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

MainService.factory('MainService.http', ['$http', '$q', 'API',
  function($http, $q, API) {
    function updateUser(params) {
      var Qdefer = $q.defer();
      var Qpromise = Qdefer.promise;
      $http.put(
        API.path + '/api/login-user/1', {
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
      updateUser: updateUser
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
