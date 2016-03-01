'use strict';
/* Dashboard Directives */

var DashboardDirective = angular.module('DashboardDirective', ['DashboardService', 'ngResource']);

DashboardDirective.directive("defaultDash", ['DashboardService.platformPie', 'DashboardService.platformHis', 'DashboardService.platformDataBar', function(platformPie, platformHis, platformDataBar) {
  return {
    restrict: "AE",
    replace: true,
    link: function(scope, element, attrs) {
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
    }
  }
}]);

DashboardDirective.directive("dashboardView", [function() {
  return {
    restrict: "AE",
    replace: true,
    link: function(scope, element, attrs) {
      element.find('#table').bootstrapTable({
        columns: [{
          field: 'state',
          checkbox: true
        }, {
          field: 'id',
          title: 'Item ID'
        }, {
          field: 'name',
          title: 'Item Name'
        }, {
          field: 'price',
          title: 'Item Price'
        }],
        data: [{
          id: 1,
          name: 'Item 1',
          price: '$1'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }, {
          id: 2,
          name: 'Item 2',
          price: '$2'
        }],
        pagination: true,
        pageNumber: 1,
        toolbar: ".toolbar",
        clickToSelect: true,
        showRefresh: true,
        showToggle: true,
        showColumns: true
      });
    }
  }
}]);
