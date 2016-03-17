'use strict';
/* plat department statistics Controllers */

var PlatDeptStatisticController = angular.module('PlatDeptStatisticController', ['ui.router', 'PlatDeptStatisticService', 'PlatDeptStatisticDirective']);

PlatDeptStatisticController.controller('PlatDeptStatisticController.platDeptStatistic', ['$scope',
  function($scope) {}
])




'use strict';
/* plat department statistics Service */

var PlatDeptStatisticService = angular.module('PlatDeptStatisticService', []);

PlatDeptStatisticService.service('PlatDeptStatisticService.platDeptStatistic', ['$http', 'API',
  function($http, API) {
    if (API && API.path) {
      return $http({
        method: 'GET',
        url: API.path + '/api/plat-dept-statistic',
        withCredentials: true
      });
    } else {
      console.error('API Not Found in plat-dept-statistic.js');
    }
  }
]);




'use strict';
/* Plat statistic Directives */

var PlatDeptStatisticDirective = angular.module('PlatDeptStatisticDirective', ['PlatDeptStatisticService']);

// Plat statistic  Directive
PlatDeptStatisticDirective.directive('wiservPlatDeptStatistic', ['PlatDeptStatisticService.platDeptStatistic',
  function(platDeptStatistic) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        platDeptStatistic.then(function(response) {
          var datas = response.data;
          window.console.log(datas.rows[1][0]);
          /* department data */
          var deptChart = echarts.init(element.find('#dep-column')[0]);
          var deptOpt = {
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['普通文件', '数据库文件']
            },
            color: ['#3399CC', '#99CC33'],
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
              axisLabel: {
                interval: 0,
                rotate: 45
              },
              data: datas.rows[0]
            }],
            yAxis: [{
              type: 'value'
            }],
            series: [{
              name: '普通文件[MB]',
              type: 'bar',
              data: datas.rows[1][0].data,
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
              type: 'bar',
              data: datas.rows[1][1].data,
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
            }]
          };

          deptChart.setOption(deptOpt);

          /*  */
          //var platHisChart = echarts.init(element.find('#plat-his-chart')[0]);

          /* department history data chart */
          Date.prototype.format = function(format) {
            var o = {
              "M+": this.getMonth() + 1,
              // month
              "d+": this.getDate(),
              // day
              "h+": this.getHours(),
              // hour
              "m+": this.getMinutes(),
              // minute
              "s+": this.getSeconds(),
              // second
              "q+": Math.floor((this.getMonth() + 3) / 3),
              // quarter
              "S": this.getMilliseconds()
                // millisecond
            };
            if (/(y+)/.test(format) || /(Y+)/.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
              if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
              }
            }
            return format;
          };
          var deptHisChart = echarts.init(element.find('#dept-history')[0]);
          var fileList = datas.fileList;
          var dbList = datas.dbList;
          var allList = datas.allList;
          var fileDateList = [];
          var fileValueList = [];
          var dbValueList = [];
          var allValueList = [];
          for (var i = 0; i < fileList.length; i++) {
            fileDateList.push((new Date(fileList[i][0])).format('yyyy-MM-dd'));
            fileValueList.push(fileList[i][1]);
          }
          for (var i = 0; i < dbList.length; i++) {
            dbValueList.push(dbList[i][1]);
          }
          for (var i = 0; i < allList.length; i++) {
            allValueList.push(allList[i][1]);
          }





          var deptHisOpt = {
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['普通文件', '数据库文件', '全部']
            },
            color: ['#3399CC', '#99CC33', '#456073'],
            toolbox: {
              show: true,
              feature: {
                mark: {
                  show: true
                },
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
              boundaryGap: false,
              data: fileDateList
            }],
            yAxis: [{
              type: 'value',
              axisLabel: {
                formatter: '{value} [MB]'
              }
            }],
            series: [{
              name: '普通文件[MB]',
              type: 'line',
              data: fileValueList,
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
              data: dbValueList,
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
              name: '全部[MB]',
              type: 'line',
              data: allValueList,
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

          deptHisChart.setOption(deptHisOpt);

        }, function(response) {
          console.log(response.status + response.statusText);
        })



      }
    }
  }
]);
