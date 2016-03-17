'use strict';
/* plat statistics Controllers */

var PlatStatisticController = angular.module('PlatStatisticController', ['ui.router', 'PlatStatisticService', 'PlatStatisticDirective']);

PlatStatisticController.controller('PlatStatisticController.platStatistic', ['$scope',
  function($scope) {}
])




'use strict';
/* plat statistics  Service */

var PlatStatisticService = angular.module('PlatStatisticService', []);

PlatStatisticService.service('PlatStatisticService.platStatistic', ['$http', 'API',
  function($http, API) {
    if (API && API.path) {
      return $http({
        method: 'GET',
        url: API.path + '/api/plat-statistic',
        withCredentials: true
      });
    } else {
      console.error('API Not Found in plat-statistic.js');
    }
  }
]);




'use strict';
/* Plat statistic Directives */

var PlatStatisticDirective = angular.module('PlatStatisticDirective', ['PlatStatisticService']);

// Plat statistic  Directive
PlatStatisticDirective.directive('wiservPlatStatistic', ['PlatStatisticService.platStatistic',
  function(platStatistic) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {

        platStatistic.then(function(response){
          var datas = response.data;
          /* platform data chart */
          var platChart = echarts.init(element.find('#plat-pie-chart')[0]);
          var platopt = {
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c}MB ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['普通文件', '数据库文件']
            },
            color: ['#3399CC', '#99CC33'],
            series: [{
              name: '平台容量统计',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: datas.rows,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }]
          };

          platChart.setOption(platopt);

          /* platform history data chart */
          var platHisChart = echarts.init(element.find('#plat-his-chart')[0]);
          var platHisOpt = {
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['普通文件', '数据库文件','全部']
            },
            color: ['#3399CC', '#99CC33','#456073'],
            toolbox: {
              show: true,
              feature: {
                dataView: {
                  show: true,
                  readOnly: false
                },
                magicType: {
                  show: true,
                  type: ['line', 'bar']
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            calculable: true,
            xAxis: [{
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
              type: 'value'
            }],
            series: [{
              name: '普通文件[MB]',
              type: 'line',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 16.7, 15.6, 12.2, 32.6, 20.0, 6.4, 3.3],
              markPoint: {
                data: [{
                  type: 'max',
                  name: '最大值'
                }, {
                  type: 'min',
                  name: '最小值'
                }]
              },
              markLine: {
                data: [{
                  type: 'average',
                  name: '平均值'
                }]
              }
            }, {
              name: '数据库文件[MB]',
              type: 'line',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 15.6, 12.2, 48.7, 18.8, 6.0, 2.3],
              markPoint: {
                data: [{
                  name: '年最高',
                  value: 182.2,
                  xAxis: 7,
                  yAxis: 183
                }, {
                  name: '年最低',
                  value: 2.3,
                  xAxis: 11,
                  yAxis: 3
                }]
              },
              markLine: {
                data: [{
                  type: 'average',
                  name: '平均值'
                }]
              }
            },{
              name: '全部[MB]',
              type: 'line',
              data: [2.0, 14.9, 17.0, 23.2, 35.6, 76.7, 35.6, 62.2, 32.6, 20.0, 16.4, 23.3],
              markPoint: {
                data: [{
                  type: 'max',
                  name: '最大值'
                }, {
                  type: 'min',
                  name: '最小值'
                }]
              },
              markLine: {
                data: [{
                  type: 'average',
                  name: '平均值'
                }]
              }
            }]
          };
          platHisChart.setOption(platHisOpt);

        },function(response){
          console.log(response.status + response.statusText);
        })



      }
    }
  }
]);
