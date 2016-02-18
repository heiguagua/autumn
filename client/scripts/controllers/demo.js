var app = angular.module('app', []);

app.controller('DemoController',['$scope', function($scope){
  $scope.test='Hello Autumn!';
  $scope.hank='Hank';
  console.log('SUCESS');
}])
