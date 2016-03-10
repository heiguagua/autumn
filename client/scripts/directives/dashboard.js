'use strict';
/* Dashboard Directives */

var DashboardDirective = angular.module('DashboardDirective', ['DashboardService']);

// dashboard directive
DashboardDirective.directive('myDefaultDash', ['DashboardService.platformPie', 'DashboardService.platformHis', 'DashboardService.platformDataBar', function(platformPie, platformHis, platformDataBar) {
  return {
    restrict: 'AE',
    link: function(scope, element, attrs) {
      //Highcharts.setOptions(themeArr[4]);
      element.find('.serverRate').highcharts({
        credits: {
          enabled: false
        },
        chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },

        title: {
          text: '硬盘使用率',
          verticalAlign: 'bottom'
        },

        pane: {
          startAngle: -120,
          endAngle: 120,
          background: [{
            backgroundColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, '#FFF'],
                [1, '#333']
              ]
            },
            borderWidth: 0,
            outerRadius: '109%'
          }, {
            backgroundColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, '#333'],
                [1, '#FFF']
              ]
            },
            borderWidth: 1,
            outerRadius: '107%'
          }, {
            // default background
          }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
          }]
        },

        // the value axis
        yAxis: {
          min: 0,
          max: 100,

          minorTickInterval: 'auto',
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: 'inside',
          minorTickColor: '#666',

          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
            step: 2,
            rotation: 'auto'
          },
          title: {
            text: '%'
          },
          plotBands: [{
            from: 0,
            to: 50,
            color: '#55BF3B' // green
          }, {
            from: 50,
            to: 80,
            color: '#DDDF0D' // yellow
          }, {
            from: 80,
            to: 100,
            color: '#DF5353' // red
          }]
        },

        series: [{
          name: '硬盘使用率',
          data: [80],
          tooltip: {
            valueSuffix: ' %'
          }
        }]

      });
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
        }
        /*,function(chart){
            //在图表内的指定位置画一个圆
            //第一个参数表示圆心距离图表左侧边缘的距离值
            //第二个参数表示圆心距离图表上侧边缘的距离值
            //第三个参数表示圆半径大小
            chart.renderer.circle(115, 142, 60).attr({
            fill: '#1aadce',
            stroke: 'black',
            'stroke-width': 0
        }).add();
        }
        */
      );
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

      // platform data charts
      element.find('#high-pie-donut').highcharts({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: 'Browser<br>shares',
          align: 'center',
          verticalAlign: 'bottom',
          y: 50
        },
        credits: {
          enabled: false
        },
        tooltip: {
          pointFormat: '<b>{point.percentage:.1f}%</b><br><b>{point.vol}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            dataLabels: {
              enabled: true,
              format: '{point.name}:<b>{point.percentage:.1f}% <br>约{point.vol}</b>',
              distance: 10,
              style: {
                fontWeight: 'bold',
                color: 'black',
                textShadow: '0px 1px 2px white'
              }
            },
            startAngle: 45,
            endAngle: 405,
            showInLegend: true
          }
        },
        exporting: {
          enabled: false
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          borderWidth: 0
        },
        series: [{
          type: 'pie',
          name: '占用空间',
          data: platformPie.rows
        }]
      });

      // platformDataBar
      /*
      var dataBarEle = element.find("#platformDataBar").children(":eq(0)");
      element.find("#platformDataBar").html("");
      for (var i = 0; i < platformDataBar.rows.length; i++) {
        var _vclone = dataBarEle.clone();
        if (i > 0) {
          _vclone.addClass("margin-top");
        }
        _vclone.show();
        _vclone.find(".data-name").html(platformDataBar.rows[i].name);

        _vclone.find(".data-value").html(platformDataBar.rows[i].volume);
        _vclone.find(".data-increase").html("今日新增  " + platformDataBar.rows[i].increase);
        _vclone.find(".latest-increase").html("最近7天新增" + platformDataBar.rows[i].latest + "&nbsp;");
        element.find("#platformDataBar").append(_vclone);
      }
      */

      // platform history data charts
      element.find('#high-chart').highcharts('StockChart', {
        rangeSelector: {
          selected: 1,
          inputDateFormat: "%Y-%m-%d",
          buttons: [{
            type: 'day',
            count: 1,
            text: '1天'
          }, {
            type: 'day',
            count: 7,
            text: '7天'
          }, {
            type: 'month',
            count: 1,
            text: '1月'
          }, {
            type: 'year',
            count: 1,
            text: '1年'
          }, {
            type: 'all',
            text: 'All'
          }]
        },
        credits: {
          enabled: false
        },

        xAxis: {
          dateTimeLabelFormats: { // don't display the dummy year
            second: '%m-%d %H:%M:%S',
            minute: '%m-%d %H:%M',
            hour: '%m-%d %H:%M',
            day: '%m-%d',
            week: '%m-%d',
            month: '%Y-%m',
            year: '%Y'
          }
        },
        legend: {
          enabled: true,
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          borderWidth: 0
        },
        navigator: {
          xAxis: {
            dateTimeLabelFormats: { // don't display the dummy year
              second: '%m-%d %H:%M:%S',
              minute: '%m-%d %H:%M',
              hour: '%m-%d %H:%M',
              day: '%m-%d',
              week: '%m-%d',
              month: '%Y-%m',
              year: '%Y'
            }
          }
        },
        series: [{
          name: '普通文件[' + platformHis['unit'] + ']',
          data: platformHis['fileList'],
          type: 'spline',
          tooltip: {
            valueDecimals: platformHis['valueDecimals']
          }
        }, {
          name: '数据库[' + platformHis['unit'] + ']',
          data: platformHis['dbList'],
          type: 'spline',
          tooltip: {
            valueDecimals: platformHis['valueDecimals']
          }
        }, {
          name: '全部[' + platformHis['unit'] + ']',
          data: platformHis['allList'],
          type: 'spline',
          tooltip: {
            valueDecimals: platformHis['valueDecimals']
          }
        }]
      });

      var json = {
        "total": 2,
        "status": true,
        "rows": [
          ["安监局", "国土局", "环保局", "监察局", "交通局", "教育局", "民政局", "人口与计划生育局", "市场服务中心", "市监局", "司法局", "残联局", "统计局", "城管局", "地税局", "发改局", "工商局", "公安局", "规划局", "国税局", "交通局办公室", "办公室"],
          [{
            "name": "普通文件[MB]",
            "data": [0.0, 0.0, 0.0, 0.0, 0.12, 0.0, 0.07, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
          }, {
            "name": "数据库[MB]",
            "data": [0.0, 0.0, 0.0, 0.0, 75.0, 0.0, 46.16, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
          }]
        ]
      };

      window.console.log(json.rows[0]);
      $('#high-column').highcharts({
        chart: {
          type: 'column'
        },
        title: {
          text: '部门数据概况'
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: json.rows[0]
        },
        yAxis: {
          min: 0,
          title: {
            text: ''
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: 'bold',
              color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
          }
        },
        legend: {
          align: 'left',
          x: 20,
          verticalAlign: 'top',
          y: 0,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          formatter: function() {
            return '<b>' + this.x + '</b><br/>' +
              this.series.name + ': ' + this.y + '<br/>' +
              '总量: ' + this.point.stackTotal;
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
              style: {
                textShadow: '0 0 3px black, 0 0 3px black'
              }
            }
          }
        },
        series: json.rows[1]
      });


      var jsonhis = {
        "allList": [
          [1453824000000, 0.0],
          [1454256000000, 0.0],
          [1454342400000, 0.0],
          [1454428800000, 0.0],
          [1454515200000, 0.0],
          [1454601600000, 0.0],
          [1454688000000, 0.0],
          [1454774400000, 0.0],
          [1454860800000, 0.0],
          [1454947200000, 0.0],
          [1455033600000, 0.0],
          [1455120000000, 0.0],
          [1455206400000, 0.0],
          [1455292800000, 0.0],
          [1455379200000, 0.0],
          [1455465600000, 0.0],
          [1455552000000, 0.0],
          [1455638400000, 0.0],
          [1455724800000, 0.0],
          [1455811200000, 0.0],
          [1455897600000, 0.0],
          [1455984000000, 0.0],
          [1456070400000, 0.0],
          [1456156800000, 0.0],
          [1456243200000, 0.0],
          [1456329600000, 0.0],
          [1456416000000, 0.0],
          [1456502400000, 0.0],
          [1456588800000, 0.0],
          [1456675200000, 0.0],
          [1456761600000, 0.0],
          [1456848000000, 0.0],
          [1456934400000, 0.0],
          [1457020800000, 0.0],
          [1457107200000, 0.0],
          [1457193600000, 0.0],
          [1457280000000, 0.0],
          [1457366400000, 0.0],
          [1457452800000, 0.0],
          [1457539200000, 0.0]
        ],
        "unit": "MB",
        "fileList": [
          [1453824000000, 0.0],
          [1454256000000, 0.0],
          [1454342400000, 0.0],
          [1454428800000, 0.0],
          [1454515200000, 0.0],
          [1454601600000, 0.0],
          [1454688000000, 0.0],
          [1454774400000, 0.0],
          [1454860800000, 0.0],
          [1454947200000, 0.0],
          [1455033600000, 0.0],
          [1455120000000, 0.0],
          [1455206400000, 0.0],
          [1455292800000, 0.0],
          [1455379200000, 0.0],
          [1455465600000, 0.0],
          [1455552000000, 0.0],
          [1455638400000, 0.0],
          [1455724800000, 0.0],
          [1455811200000, 0.0],
          [1455897600000, 0.0],
          [1455984000000, 0.0],
          [1456070400000, 0.0],
          [1456156800000, 0.0],
          [1456243200000, 0.0],
          [1456329600000, 0.0],
          [1456416000000, 0.0],
          [1456502400000, 0.0],
          [1456588800000, 0.0],
          [1456675200000, 0.0],
          [1456761600000, 0.0],
          [1456848000000, 0.0],
          [1456934400000, 0.0],
          [1457020800000, 0.0],
          [1457107200000, 0.0],
          [1457193600000, 0.0],
          [1457280000000, 0.0],
          [1457366400000, 0.0],
          [1457452800000, 0.0],
          [1457539200000, 0.0]
        ],
        "status": "HEALTH",
        "valueDecimals": 2,
        "dbList": [
          [1453824000000, 0.0],
          [1454256000000, 0.0],
          [1454342400000, 0.0],
          [1454428800000, 0.0],
          [1454515200000, 0.0],
          [1454601600000, 0.0],
          [1454688000000, 0.0],
          [1454774400000, 0.0],
          [1454860800000, 0.0],
          [1454947200000, 0.0],
          [1455033600000, 0.0],
          [1455120000000, 0.0],
          [1455206400000, 0.0],
          [1455292800000, 0.0],
          [1455379200000, 0.0],
          [1455465600000, 0.0],
          [1455552000000, 0.0],
          [1455638400000, 0.0],
          [1455724800000, 0.0],
          [1455811200000, 0.0],
          [1455897600000, 0.0],
          [1455984000000, 0.0],
          [1456070400000, 0.0],
          [1456156800000, 0.0],
          [1456243200000, 0.0],
          [1456329600000, 0.0],
          [1456416000000, 0.0],
          [1456502400000, 0.0],
          [1456588800000, 0.0],
          [1456675200000, 0.0],
          [1456761600000, 0.0],
          [1456848000000, 0.0],
          [1456934400000, 0.0],
          [1457020800000, 0.0],
          [1457107200000, 0.0],
          [1457193600000, 0.0],
          [1457280000000, 0.0],
          [1457366400000, 0.0],
          [1457452800000, 0.0],
          [1457539200000, 0.0]
        ]
      };
      $('#high-chart2').highcharts('StockChart', {
        credits: {
          enabled: false
        },
        rangeSelector: {
          selected: 1,
          inputDateFormat: "%Y-%m-%d",
          buttons: [{
            type: 'day',
            count: 1,
            text: '1天'
          }, {
            type: 'day',
            count: 7,
            text: '7天'
          }, {
            type: 'month',
            count: 1,
            text: '1月'
          }, {
            type: 'year',
            count: 1,
            text: '1年'
          }, {
            type: 'all',
            text: 'All'
          }]
        },
        xAxis: {
          dateTimeLabelFormats: { // don't display the dummy year
            second: '%m-%d %H:%M:%S',
            minute: '%m-%d %H:%M',
            hour: '%m-%d %H:%M',
            day: '%m-%d',
            week: '%m-%d',
            month: '%Y-%m',
            year: '%Y'
          }
        },
        legend: {
          enabled: true,
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          borderWidth: 0
        },
        navigator: {
          xAxis: {
            dateTimeLabelFormats: { // don't display the dummy year
              second: '%m-%d %H:%M:%S',
              minute: '%m-%d %H:%M',
              hour: '%m-%d %H:%M',
              day: '%m-%d',
              week: '%m-%d',
              month: '%Y-%m',
              year: '%Y'
            }
          }
        },
        series: [{
          name: '普通文件[' + jsonhis['unit'] + ']',
          data: jsonhis['fileList'],
          type: 'spline',
          tooltip: {
            valueDecimals: jsonhis['valueDecimals']
          }
        }, {
          name: '数据库[' + jsonhis['unit'] + ']',
          data: jsonhis['dbList'],
          type: 'spline',
          tooltip: {
            valueDecimals: jsonhis['valueDecimals']
          }
        }, {
          name: '全部[' + jsonhis['unit'] + ']',
          data: jsonhis['allList'],
          type: 'spline',
          tooltip: {
            valueDecimals: jsonhis['valueDecimals']
          }
        }]
      });

    }
  }
}]);
