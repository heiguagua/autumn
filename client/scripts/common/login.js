'use strict';

/*============ #Controller ============*/
var LoginController = angular.module('LoginController', ['ui.router']);

LoginController.controller('LoginController.login', ['$rootScope', '$scope', '$state',
  function($rootScope, $scope, $state) {
    // Define a global object for current page
    $scope.login = {};
    // Binding submit event
    $scope.login.submit = function() {
      // var parameters = {
      //   username: $scope.login.username,
      //   password: $scope.login.password
      // }
      // HttpAuth.get({parameters},function(data){
      //   if(data.head.status === 200 && data.head.token!=null){
      //     var appScope = $rootScope;
      //     appScope.token = data.head.token;
      //     appScope.$broadcast('authChanged');
      //     $state.go("main.dashboard");
      //   }
      // });
      $state.go("main.dashboard");
    }
  }
]);


/*============ #Service ============*/
// var LoginService = angular.module('LoginService',['ngResource']);
//
// LoginService.factory('HttpAuth', ['$resource',
//   function($resource) {
//     return $resource('http://localhost:5000/api/auth', {}, {
//       withCredentials: true
//     });
//   }
// ]);
