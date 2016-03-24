/* Resource Catalog Directives */
var GlobalModule = angular.module('GlobalModule', []);
// Resource Catalog Directive
GlobalModule.directive('wiservPagination', ['$timeout', '$compile',
  function($timeout, $compile) {
    return {
      restrict: 'AE',
      scope: {
        pagin: '&config'
      },
      template: "<div wiserv-pagination config='Pagin()' class='pull-right'></div>",
      link: function(scope, element, attrs) {
        scope.pagin().then(function(result){
          console.log();
          scope.haha = result;
          var temp = result.total;
          //console.log( (temp+8-1)/8 >> 0);
        })
      }
    }
  }
]);

// Datetime Picker
GlobalModule.controller('GlobalModuleController.dateTimePickerCtrl', ['$scope',
  function($scope) {
    $scope.$watch('RangeTime', function(oldVal, newVal) {
      console.log("RangeTime: " + $scope.RangeTime);
    });
  }
])

GlobalModule.directive('wiservDateTimePicker', [function() {
  return {
    restrict: 'AE',
    controller: 'GlobalModuleController.dateTimePickerCtrl',
    scope: {
      'RangeTime': '='
    },
    link: function(scope, element, attrs) {
      var format = "YYYY-MM-DD HH:mm:ss";
      var date = new Date();
      element.daterangepicker({
        "singleDatePicker": false,
        "showDropdowns": true,
        "showWeekNumbers": true,
        "timePicker": true,
        "timePicker24Hour": true,
        "timePickerIncrement": 1,
        "timePickerSeconds": true,
        "autoApply": false,
        "ranges": {
          "今天": [
            moment(date).startOf('days'),
            moment(date).endOf('days')
          ],
          "最近7天": [
            moment(date).subtract(7, 'days').startOf('days'),
            moment(date).endOf('days')
          ],
          "最近30天": [
            moment(date).subtract(30, 'days').startOf('days'),
            moment(date).endOf('days')
          ],
          "本月": [
            moment(date).startOf('months'),
            moment(date).endOf('months')
          ],
          "上月": [
            moment(date).subtract(1, 'months').startOf('months'),
            moment(date).subtract(1, 'months').endOf('months')
          ]
        },
        "locale": {
          "format": format,
          "separator": " 至 ",
          "applyLabel": "确认",
          "cancelLabel": "取消",
          "fromLabel": "从",
          "toLabel": "到",
          "customRangeLabel": "自定义",
          "daysOfWeek": [
            "天",
            "一",
            "二",
            "三",
            "四",
            "五",
            "六"
          ],
          "monthNames": [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ],
          "firstDay": 1
        },
        "opens": "left",
        "drops": "down",
        "buttonClasses": "btn btn-sm",
        "applyClass": "btn-success",
        "cancelClass": "btn-default"
      }, function(start, end, label) {});

    }
  }
}])
