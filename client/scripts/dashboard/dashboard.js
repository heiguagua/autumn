'use strict';

/*============ #Controller ============*/
var DashboardController = angular.module('DashboardController', ['DashboardService', 'DashboardDirective']);

DashboardController.controller('DashboardController.dashboard', ['$scope',
  function($scope) {

  }
])


/*============ #Service ============*/
'use strict';
/* Dashboard Service */

var DashboardService = angular.module('DashboardService', []);

DashboardService.service('DashboardService.platformPie', ['$http',
  function($http) {
    var platformPieJson = {
      "total": 2,
      "status": true,
      "rows": [{
        "vol": "202.82KB",
        "name": "普通文件",
        "y": 0.0019860334571288802
      }, {
        "vol": "99.53MB",
        "name": "数据库文件",
        "y": 0.9980139665428711
      }]
    };
    return platformPieJson;
  }
]);

DashboardService.service('DashboardService.platformHis', ['$http',
  function($http) {
    var platformHisJson = {
      "allList": [
        [1453824000000, 88.95],
        [1454256000000, 99.67],
        [1454342400000, 99.67],
        [1454428800000, 99.67],
        [1454515200000, 99.67],
        [1454601600000, 99.67],
        [1454688000000, 99.67],
        [1454774400000, 99.67],
        [1454860800000, 99.67],
        [1454947200000, 99.67],
        [1455033600000, 99.67],
        [1455120000000, 99.67],
        [1455206400000, 99.67],
        [1455292800000, 99.67],
        [1455379200000, 99.67],
        [1455465600000, 99.67],
        [1455552000000, 99.67],
        [1455638400000, 99.67],
        [1455724800000, 99.73],
        [1455811200000, 99.73],
        [1455897600000, 99.73],
        [1455984000000, 99.73],
        [1456070400000, 99.73],
        [1456156800000, 99.73],
        [1456243200000, 99.73],
        [1456329600000, 99.73],
        [1456416000000, 99.73],
        [1456502400000, 99.73],
        [1456588800000, 99.73],
        [1456675200000, 99.73],
        [1456761600000, 99.73]
      ],
      "unit": "MB",
      "fileList": [
        [1453824000000, 0.09],
        [1454256000000, 0.14],
        [1454342400000, 0.14],
        [1454428800000, 0.14],
        [1454515200000, 0.14],
        [1454601600000, 0.14],
        [1454688000000, 0.14],
        [1454774400000, 0.14],
        [1454860800000, 0.14],
        [1454947200000, 0.14],
        [1455033600000, 0.14],
        [1455120000000, 0.14],
        [1455206400000, 0.14],
        [1455292800000, 0.14],
        [1455379200000, 0.14],
        [1455465600000, 0.14],
        [1455552000000, 0.14],
        [1455638400000, 0.14],
        [1455724800000, 0.2],
        [1455811200000, 0.2],
        [1455897600000, 0.2],
        [1455984000000, 0.2],
        [1456070400000, 0.2],
        [1456156800000, 0.2],
        [1456243200000, 0.2],
        [1456329600000, 0.2],
        [1456416000000, 0.2],
        [1456502400000, 0.2],
        [1456588800000, 0.2],
        [1456675200000, 0.2],
        [1456761600000, 0.2]
      ],
      "status": "HEALTH",
      "valueDecimals": 2,
      "dbList": [
        [1453824000000, 88.86],
        [1454256000000, 99.53],
        [1454342400000, 99.53],
        [1454428800000, 99.53],
        [1454515200000, 99.53],
        [1454601600000, 99.53],
        [1454688000000, 99.53],
        [1454774400000, 99.53],
        [1454860800000, 99.53],
        [1454947200000, 99.53],
        [1455033600000, 99.53],
        [1455120000000, 99.53],
        [1455206400000, 99.53],
        [1455292800000, 99.53],
        [1455379200000, 99.53],
        [1455465600000, 99.53],
        [1455552000000, 99.53],
        [1455638400000, 99.53],
        [1455724800000, 99.53],
        [1455811200000, 99.53],
        [1455897600000, 99.53],
        [1455984000000, 99.53],
        [1456070400000, 99.53],
        [1456156800000, 99.53],
        [1456243200000, 99.53],
        [1456329600000, 99.53],
        [1456416000000, 99.53],
        [1456502400000, 99.53],
        [1456588800000, 99.53],
        [1456675200000, 99.53],
        [1456761600000, 99.53]
      ]
    };
    return platformHisJson;
  }
]);

DashboardService.service('DashboardService.platformDataBar', ['$http',
  function($http) {
    var platformDataBarJson = {
      "total": 2,
      "status": true,
      "rows": [{
        "name": "普通文件数据量",
        "volume": "202.82KB",
        "increase": "0.00Byte",
        "latest": "0.00Byte"
      }, {
        "name": "数据库数据量",
        "volume": "99.53MB",
        "increase": "0.00Byte",
        "latest": "0.00Byte"
      }]
    };
    return platformDataBarJson;
  }
]);


/*============ #Directive ============*/
'use strict';
/* Dashboard Directives */

var DashboardDirective = angular.module('DashboardDirective', ['DashboardService']);

// dashboard directive
DashboardDirective.directive('myDefaultDash', ['DashboardService.platformPie', 'DashboardService.platformHis', 'DashboardService.platformDataBar', function(platformPie, platformHis, platformDataBar) {
  return {
    restrict: 'AE',
    link: function(scope, element, attrs) {
      element.find('.serverRate2').highcharts({
        chart: {
          type: 'pie'
        },
        title: {
          text: "硬盘使用率",
          align: 'center',
          verticalAlign: 'bottom',
          style: {
            color: '#719620',
            fontSize: '12px'
          }
        },
        plotOptions: {
          pie: {
            size: 50, //图表直径大小
            borderColor: null,
            dataLabels: {
              distance: -28,
              formatter: function() {
                if (this.point.name == "harddisk")
                  return "";
                else
                  return "19.55%";
              },
              style: {
                fontSize: "12px"
              }
            },
            innerSize: '92%',
            colors: [
              '#719620',
              'rgba(113, 150, 32, 0.16)'
            ]
          }
        },
        tooltip: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        series: [{
          data: [
            ['harddisk', 19.55],
            ['all', 100 - 19.55]
          ]
        }]
      });
      element.find('.serverRate3').highcharts({
        chart: {
          type: 'pie'
        },
        title: {
          text: "CPU使用率",
          align: 'center',
          verticalAlign: 'bottom',
          style: {
            color: '#8464CA',
            fontSize: '12px'
          }
        },
        plotOptions: {
          pie: {
            size: 50, //图表直径大小
            borderColor: null,
            dataLabels: {
              distance: -28,
              formatter: function() {
                if (this.point.name == "cpu")
                  return "";
                else
                  return "24.2%";
              },
              style: {
                fontSize: "12px",
                color: '#FFF'
              }
            },
            innerSize: '90%',
            colors: [
              '#8464CA',
              'rgba(149, 124, 206, 0.17)'
            ]
          }
        },
        tooltip: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        series: [{
          data: [
            ['cpu', 54.2],
            ['all', 100 - 54.2]
          ]
        }]
      });

      /* memory rate */
      element.find('.serverRate4').highcharts({
        chart: {
          type: 'pie'
        },
        title: {
          text: "内存使用率",
          align: 'center',
          verticalAlign: 'bottom',
          style: {
            color: '#5280E0',
            fontSize: '12px'
          }
        },
        plotOptions: {
          pie: {
            size: 50, //图表直径大小
            borderColor: null,
            dataLabels: {
              distance: -28,
              formatter: function() {
                if (this.point.name == "memory")
                  return "";
                else
                  return "19.55%";
              },
              style: {
                fontSize: "12px",
                color: '#FFF'
              }
            },
            innerSize: '90%',
            colors: [
              '#5280E0',
              'rgba(82, 128, 224, 0.19)'
            ]
          }
        },
        tooltip: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        series: [{
          data: [
            ['memory', 19.55],
            ['all', 100 - 19.55]
          ]
        }]
      });

      /* CPU rate detail */
      function randomData() {
        now = new Date(+now + oneDay);
        value = Math.round(Math.random() * 80);
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
            Math.round(value)
          ]
        }
      }
      var myChart = echarts.init(element.find('#realtime-rate')[0]);
      var data = [];
      var now = +new Date(2016, 3, 3);
      var oneDay = 24 * 3600 * 1000;
      var value = Math.random() * 1000;
      for (var i = 0; i < 100; i++) {
        data.push(randomData());
      }

      var option = {
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' : ' + params.value[1];
          },
          axisPointer: {
            animation: false
          }
        },
        color: ['#3399CC'],
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          name: '百分比',
          type: 'value',
		  max: 100,
          splitLine: {
            show: false
          }
        },
        series: [{
          name: 'CPU使用率',
          type: 'line',
          showSymbol: false,
		  smooth:true,
          hoverAnimation: false,
		  areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#99CCFF'
                    }, {
                        offset: 1,
                        color: '#3399CC'
                    }])
                }
            },
          data: data
        }]
      };
      myChart.setOption(option);

      /* platform data chart */
      var platChart = echarts.init(element.find('#plat-pie-chart')[0]);
      var platopt = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
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
          data: [{
            value: 335,
            name: '普通文件'
          }, {
            value: 310,
            name: '数据库文件'
          }],
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
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '普通文件',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
          name: '数据库文件',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
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
      platHisChart.setOption(platHisOpt);

      /* department data */
      var deptChart = echarts.init(element.find('#dept-chart')[0]);
      var deptopt = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['普通文件[MB]', '数据库文件[MB]']
        },
        color: ['#3399CC', '#99CC33'],
        toolbox: {
          show: true,
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['安监局', '国土局', '环保局', '监察局', '交通局', '教育局', '民政局','人口与计划生育局','市场服务中心','市监局','司法局','残联局','统计局','城管局','地税局','发改局',]
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          }
        },
        series: [{
          name: '普通文件[MB]',
          type: 'line',
          data: [11, 11, 15, 13, 12, 13, 10 ,20 ,26 ,21 ,23 ,12 ,12 ,14 ,15, 23],
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
          data: [31 ,23 ,12 ,12 ,14 ,15, 23,31, 11, 15, 33, 12, 8, 10 ,20 ,36],
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
      deptChart.setOption(deptopt);

    }
  }
}]);
