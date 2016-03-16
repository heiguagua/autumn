'use strict';
/* data visit statistics Controllers */

var DataVisitStatisticController = angular.module('DataVisitStatisticController', ['ui.router', 'DataVisitStatisticService', 'DataVisitStatisticDirective']);

DataVisitStatisticController.controller('DataVisitStatisticController.dataVisitStatistic', ['$scope',
  function($scope) {}
])




'use strict';
/* data visit statistics  Service */

var DataVisitStatisticService = angular.module('DataVisitStatisticService', []);

DataVisitStatisticService.service('DataVisitStatisticService.dataVisitStatistic', ['$http', 'API',
  function($http, API) {
    if (API && API.path) {
      return $http({
        method: 'GET',
        url: API.path + '/api/data-visit-statistic',
        withCredentials: true
      });
    } else {
      console.error('API Not Found in data-visit-statistic.js');
    }
  }
]);




'use strict';
/* data visit statistic Directives */

var DataVisitStatisticDirective = angular.module('DataVisitStatisticDirective', ['DataVisitStatisticService']);

// data visit statistic  Directive
DataVisitStatisticDirective.directive('wiservDataVisitStatistic', ['DataVisitStatisticService.dataVisitStatistic',
  function(dataVisitStatistic) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {

        dataVisitStatistic.then(function(response){
          var datas = response.data;
          var categories = [];
          var values = [];
          for(var i=0; i<datas.rows.length; i++) {
            categories.push(datas.rows[i].name);
            values.push(datas.rows[i].value);
          }
          /* data visit statistic by theme */
          var dataVisitChart = echarts.init(element.find('#dataPicDiv')[0]);
          var dataVisitOpt = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c}MB ({d}%)"
            },
            title: {
              text:'按主题',
              x: 'center'
            },
            color: ['#3399CC', '#99CC33'],
            series: [{
              name: '按主题',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: datas.rows[0],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }]
          };
          dataVisitChart.setOption(dataVisitOpt);


          /* data visit statistic by department */
          var dataDeptChart = echarts.init(element.find('#dataPicDept')[0]);
          var dataDeptOpt = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c}MB ({d}%)"
            },
            title: {
              text:'按部门',
              x: 'center'
            },
            color: ['#3399CC', '#99CC33'],
            series: [{
              name: '按部门',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: datas.rows[1],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }]
          };
          dataDeptChart.setOption(dataDeptOpt);

          /* data visit statistic by service */
          var dataServiceChart = echarts.init(element.find('#dataPicService')[0]);
          var dataServiceOpt = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c}MB ({d}%)"
            },
            title: {
              text:'按服务',
              x: 'center'
            },
            color: ['#3399CC', '#99CC33'],
            series: [{
              name: '按服务',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: datas.rows[2],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }]
          };
          dataServiceChart.setOption(dataServiceOpt);

        },function(response){
          console.log(response.status + response.statusText);
        })



      }
    }
  }
]);
