'use strict';
/* Data Visit Info Controllers */

var DataVisitInfoController = angular.module('DataVisitInfoController', ['ui.router', 'DataVisitInfoService', 'DataVisitInfoDirective']);

DataVisitInfoController.controller('DataVisitInfoController.dataVisitInfo', ['$scope',
  function($scope) {}
])




'use strict';
/* Data Visit Info Service */

var DataVisitInfoService = angular.module('DataVisitInfoService', []);

DataVisitInfoService.service('DataVisitInfoService.dataVisitInfo', ['$http', 'API',
  function($http, API) {
    if (API && API.path) {
      return $http({
        method: 'GET',
        url: API.path + '/api/data-visit-info',
        withCredentials: true
      });
    } else {
      console.error('API Not Found in data-visit-info.js');
    }
  }
]);




'use strict';
/* Data Visit Info Directives */

var DataVisitInfoDirective = angular.module('DataVisitInfoDirective', ['DataVisitInfoService']);

// Data Visit Info Directive
DataVisitInfoDirective.directive('wiservDataVisitInfo', ['DataVisitInfoService.dataVisitInfo',
  function(dataVisitInfo) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        dataVisitInfo.then(function(response){
          var datas = response.data;
          var dataShow = [];
          var data;
          for(var i = 0; i<datas.rows.length; i++) {
            data = {
              userName: datas.rows[i].visitor,
              IPAddress: datas.rows[i].visitIp,
              visitTime: datas.rows[i].visitTime,
              dataName: datas.rows[i].dataName,
              visitType: datas.rows[i].visitTypeName,
              visitContent: datas.rows[i].params
            }
            dataShow[i]  = data;
          }
          element.find('#table').bootstrapTable({
            columns: [{
              field: 'state',
              checkbox: true,
              clickToSelect: true
            }, {
              field: 'userName',
              title: '用户'
            }, {
              field: 'IPAddress',
              title: 'IP地址'
            }, {
              field: 'visitTime',
              title: '访问时间'
            }, {
              field: 'dataName',
              title: '元数据名称'
            }, {
              field: 'visitType',
              title: '访问类型'
            }, {
              field: 'visitContent',
              title: '访问内容'
            }],
            data:dataShow,
            pagination: true,
            pageNumber: 1,
            showRefresh: true,
            showColumns: true
          });
        },function(response){
          console.log(response.status + response.statusText);
        })



      }
    }
  }
]);
