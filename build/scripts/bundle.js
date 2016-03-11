'use strict';
/* Bootstrap Application */

var app = angular.module('app', [
  'ui.router',
  'Config',
  'LoginController',
  'MainController',
  'DashboardController',
  'ResourceCatalogController',
  'DataResourceController',
  'DataInfoController',
  'DataAuthorityController',
  'DataAuthorityApplyController',
  'DataAuditInfoController',
  'DataReleaseInfoController',
  'DataOfflineInfoController',
  'DataVisitInfoController',
  'ServerManageController',
  'ContactsGroupController',
  'AlarmRuleController',
  'AlarmInfoController',
  'DcmConfigController',
  'SysSettingCategoryController',
  'SysDictCategoryController',
  'LogManageController',
  'InitSystemController',
  'SysDepManageController',
  'UserManageController',
  'SysRoleController',
  'DataRoleController'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginController.login'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'partials/main.html',
      controller: 'MainController.main'
    })
    .state('main.dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController.dashboard'
    })
    .state('main.resource-catalog', {
      url: '/resource-catalog',
      templateUrl: 'partials/data-resource/resource-catalog/resource-catalog.html',
      controller: 'ResourceCatalogController.resourceCatalog'
    })
    .state('main.data-resource', {
      url: '/data-resource',
      templateUrl: 'partials/data-resource/metadata/data-resource.html',
      controller: 'DataResourceController.dataResource'
    })
    .state('main.data-info', {
      url: '/data-info',
      templateUrl: 'partials/data-resource/metadata/data-info.html',
      controller: 'DataInfoController.dataInfo'
    })
    .state('main.data-authority', {
      url: '/data-authority',
      templateUrl: 'partials/data-resource/metadata/data-authority.html',
      controller: 'DataAuthorityController.dataAuthority'
    })
    .state('main.data-authority-apply', {
      url: '/data-authority-apply',
      templateUrl: 'partials/data-resource/metadata/data-authority-apply.html',
      controller: 'DataAuthorityApplyController.dataAuthorityApply'
    })
    .state('main.data-audit-info', {
      url: '/data-audit-info',
      templateUrl: 'partials/data-resource/data/data-audit-info.html',
      controller: 'DataAuditInfoController.dataAuditInfo'
    })
    .state('main.data-release-info', {
      url: '/data-release-info',
      templateUrl: 'partials/data-resource/data/data-release-info.html',
      controller: 'DataReleaseInfoController.dataReleaseInfo'
    })
    .state('main.data-offline-info', {
      url: '/data-offline-info',
      templateUrl: 'partials/data-resource/data/data-offline-info.html',
      controller: 'DataOfflineInfoController.dataOfflineInfo'
    })
    .state('main.data-visit-info', {
      url: '/data-visit-info',
      templateUrl: 'partials/data-status/data-visit-info.html',
      controller: 'DataVisitInfoController.dataVisitInfo'
    })
    .state('main.server-manage', {
      url: '/server-manage',
      templateUrl: 'partials/platform-operations/server-manage.html',
      controller: 'ServerManageController.serverManage'
    })
    .state('main.contacts-group', {
      url: '/contacts-group',
      templateUrl: 'partials/platform-operations/platform-alarm/contacts-group.html',
      controller: 'ContactsGroupController.contactsGroup'
    })
    .state('main.alarm-rule', {
      url: '/alarm-rule',
      templateUrl: 'partials/platform-operations/platform-alarm/alarm-rule.html',
      controller: 'AlarmRuleController.alarmRule'
    })
    .state('main.alarm-info', {
      url: '/alarm-info',
      templateUrl: 'partials/platform-operations/platform-alarm/alarm-info.html',
      controller: 'AlarmInfoController.alarmInfo'
    })
    .state('main.dcm-config', {
      url: '/dcm-config',
      templateUrl: 'partials/platform-configuration/dcm-config.html',
      controller: 'DcmConfigController.dcmConfig'
    })
    .state('main.sys-setting-category', {
      url: '/sys-setting-category',
      templateUrl: 'partials/platform-configuration/sys-setting-category.html',
      controller: 'SysSettingCategoryController.sysSettingCategory'
    })
    .state('main.sys-dict-category', {
      url: '/sys-dict-category',
      templateUrl: 'partials/platform-configuration/sys-dict-category.html',
      controller: 'SysDictCategoryController.sysDictCategory'
    })
    .state('main.log-manage', {
      url: '/log-manage',
      templateUrl: 'partials/platform-configuration/log-manage.html',
      controller: 'LogManageController.logManage'
    })
    .state('main.init-system', {
      url: '/init-system',
      templateUrl: 'partials/platform-configuration/init-system.html',
      controller: 'InitSystemController.initSystem'
    })
    .state('main.sys-dep-manage', {
      url: '/sys-dep-manage',
      templateUrl: 'partials/organization-person/sys-dep-manage.html',
      controller: 'SysDepManageController.sysDepManage'
    })
    .state('main.user-manage', {
      url: '/user-manage',
      templateUrl: 'partials/organization-person/user-manage.html',
      controller: 'UserManageController.userManage'
    })
    .state('main.sys-role', {
      url: '/sys-role',
      templateUrl: 'partials/organization-person/sys-role.html',
      controller: 'SysRoleController.sysRole'
    })
    .state('main.data-role', {
      url: '/data-role',
      templateUrl: 'partials/organization-person/data-role.html',
      controller: 'DataRoleController.dataRole'
    })
}]);

'use strict';
/* Application Configration */

var Config = angular.module('Config', []);

Config.constant('API', {
  path:'http://localhost:5000'
});

'use strict';

/* Common Directives */
var commonDirectives = angular.module('commonDirectives', ['ngResource', 'commonServices']);
commonDirectives.directive('wiservTest', [
  function() {
    return {
      restrict: 'AE',
      template: "<h1>This is a Directives</h1>",
      link: function(scope, element, attrs) {
        console.log(element.text());
      }
    };
  }
]);
commonDirectives.directive("mainWrapper", [
  function() {
    return {
      restrict: "AE",
      replace: true,
      link: function(scope, element, attrs) {
        element.find('#sidebarToggler')[0].addEventListener('click', function() {
          element.find('#content').toggleClass("content-collapse");
          element.find('#navMenu').toggleClass("ml-250");
        });
      }
    }
}]);

/*content view directive*/
commonDirectives.directive("contentView",[function() {
  return {
    restrict : "AE",
    replace : true,
    link : function(scope, element, attrs) {
      $('#table').bootstrapTable({
    columns: [{
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
    }]
});
    }
  }
}]);

/* bootstrap table directive*/
commonDirectives.directive("btTable",[function() {
  return {
    restrict : "AE",
    replace: true,
    link: function(scope, element, attrs){

      element.find('#sidebarToggler')[0].addEventListener('click', function() {
        var $content = $(element.find('#content')[0]);
        $content.toggleClass("content-collapse");
      });
    }
  }
}]);

/*content view directive*/
commonDirectives.directive("contentView",[function() {
  return {
    restrict : "AE",
    replace : true,
    link : function(scope, element, attrs) {
      $('#table').bootstrapTable({
    columns: [{
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
    }]
});
    }
  }
}]);

/* bootstrap table directive*/
commonDirectives.directive("btTable",[function() {
  return {
    restrict : "AE",
    replace: true,
    link: function(scope, element, attrs){
      var slideout = new Slideout({
        'panel': element.find('#content')[0],
        'menu': element.find('#navMenu')[0],
        'padding': 250,
        'tolerance': 70
      });
      slideout.open();
      element.find('#sidebarToggler')[0].addEventListener('click', function() {
        slideout.toggle();
      });
    }
  }
}]);

/* menu */
commonDirectives.directive('menuTree', ['MenuTreeService',
  function(MenuTreeService) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        MenuTreeService.then(function(resp) {
          console.log(resp.data.menuVoList);
        }, function(resp) {
          console.error(resp);
        })
        console.log(element.text());
      }
    };
  }
]);

'use strict';

/*============ #Controller ============*/
var LoginController = angular.module('LoginController', ['ui.router', 'LoginService']);

LoginController.controller('LoginController.login', ['$scope', '$state', 'LoginService.login',
  function($scope, $state, LoginService) {
    // Define a global object for current page
    $scope.login = {};
    // Binding login info
    $scope.login.username = 'admin';
    $scope.login.password = 'admin';
    // Binding submit event
    $scope.login.submit = function() {
      $state.go("main.dashboard");
    }
  }
]);


/*============ #Service ============*/
var LoginService = angular.module('LoginService',[]);

LoginService.service('LoginService.login', ['$http',
  function($http) {
    $http({
      method: 'POST',
      url: 'http://localhost:5000/api/test',
      withCredentials: true
    }).success(function(data, status, headers, config) {
      console.log('HTTP Cookie : ' + document.cookie);
      console.log('HTTP Response : ' + data);
    }).error(function(data, status, headers, config) {
      console.error("HTTP Status Code : "+status);
    });
  }
]);

'use strict';

/*============ #Controller ============*/
var MainController = angular.module('MainController', ['ui.router', 'MainService', 'MainDirective']);

MainController.controller('MainController.main', ['$scope',
  function($scope) {}
])


/*============ #Service ============*/
var MainService = angular.module('MainService', []);

MainService.service('MainService.login', ['$http',
  function($http) {
    $http({
      method: 'POST',
      url: 'http://localhost:5000/api/test',
      withCredentials: true
    }).success(function(data, status, headers, config) {
      console.log('HTTP Cookie : ' + document.cookie);
      console.log('HTTP Response : ' + data);
    }).error(function(data, status, headers, config) {
      console.error("HTTP Status Code : " + status);
    });
  }
]);

MainService.service('MainService.menuTree', ['$http', 'API',
  function($http, API) {
    if (API && API.path) {
      return $http({
        method: 'GET',
        url: API.path + '/api/menu',
        withCredentials: true
      });
    } else {
      console.error('API Not Found in config.js');
    }
  }
]);


/*============ #Directive ============*/
var MainDirective = angular.module('MainDirective', ['MainService']);

// Toggle Button
MainDirective.directive('wiservMainWrapper', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.toggler')[0].addEventListener('click', function() {
          element.find('.content').toggleClass("content-collapse");
          element.find('.sidebar').toggleClass("sidebar-collapse");
          element.find('.content>.navbar').toggleClass("nav-collapse");
        });
      }
    }
  }
]);

// Menu Tree
MainDirective.directive('wiservMenuTree', ['MainService.menuTree',
  function(menuTree) {
    return {
      restrict: 'AE',
      controller: 'MainController.main',
      link: function(scope, element, attrs) {
        menuTree.then(function(response){
          scope.menus = response.data;
          scope.$applyAsync(function(){
            element.metisMenu({
              preventDefault: false
            });
          });
        },function(response){
          console.error(response.status + response.statusText);
        });
      }
    };
  }
]);

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

      function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
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
      var data2 = [];
      var now = +new Date(1997, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var value = Math.random() * 1000;
      for (var i = 0; i < 1000; i++) {
        data.push(randomData());
        data2.push(randomData());
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
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          name: '百分比',
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '硬盘使用率',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }]
      };
      myChart.setOption(option);


      /* platform data chart */
      var platChart = echarts.init(element.find('#high-pie-donut')[0]);
      var platopt = {
        backgroundColor: '#FFF',

        title: {
          text: '平台容量统计',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },

        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [{
            value: 335,
            name: '普通文件'
          }, {
            value: 210,
            name: '数据库文件'
          }].sort(function(a, b) {
            return a.value - b.value
          }),
          roseType: 'angle',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531'
            }
          }
        }]
      };
      platChart.setOption(platopt);

    }
  }
}]);

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
          var datas = response.data[0];
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
          window.console.log(dataShow);
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

'use strict';
/* Data Role Controllers */

var DataRoleController = angular.module('DataRoleController', ['ui.router', 'DataRoleService', 'DataRoleDirective']);

DataRoleController.controller('DataRoleController.dataRole', ['$scope',
  function($scope) {}
])



'use strict';
/* Data Role Service */

var DataRoleService = angular.module('DataRoleService', []);

DataRoleService.service('DataRoleService.dataRole', ['$http',
  function($http) {

  }
]);



'use strict';
/* Data Role Directives */

var DataRoleDirective = angular.module('DataRoleDirective', ['DataRoleService']);

// System Role Directive
DataRoleDirective.directive('wiservDataRole', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'roleName',
            title: '角色名'
          }, {
            field: 'sysTypeName',
            title: '角色类型'
          }, {
            field: 'roleDesc',
            title: '角色描述'
          }],
          data: [{
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: 'gfd'
          }, {
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: 'dfgfdg'
          }, {
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: '查看自己部门的数据统计情况，对自己部门可访问的数据进行数据交换'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Sys Department Management Controllers */

var SysDepManageController = angular.module('SysDepManageController', ['ui.router', 'SysDepManageService', 'SysDepManageDirective']);

SysDepManageController.controller('SysDepManageController.sysDepManage', ['$scope',
  function($scope) {}
])




'use strict';
/* System Department Manage Service */

var SysDepManageService = angular.module('SysDepManageService', []);

SysDepManageService.service('SysDepManageService.sysDepManage', ['$http',
  function($http) {

  }
]);



'use strict';
/* System Department Management Directives */

var SysDepManageDirective = angular.module('SysDepManageDirective', ['SysDepManageService']);

// Sys Dict Category Directive
SysDepManageDirective.directive('wiservSysDepManage', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'depShortName',
            title: '部门短名称'
          }, {
            field: 'depName',
            title: '部门名称'
          }, {
            field: 'parentName',
            title: '上级部门名称'
          }, {
            field: 'accessStatusName',
            title: '部门状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            depShortName: '安监局',
            depName: '安监局',
            parentName: '-',
            accessStatusName: '未接入',
            operator: '<a href='+'"#"'+'>接入</a>'
          }, {
            depShortName: '安监局',
            depName: '安监局',
            parentName: '-',
            accessStatusName: '未接入',
            operator: '<a href='+'"#"'+'>接入</a>'
          }, {
            depShortName: '安监局',
            depName: '安监局',
            parentName: '-',
            accessStatusName: '未接入',
            operator: '<a href='+'"#"'+'>接入</a>'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* System Role Controllers */

var SysRoleController = angular.module('SysRoleController', ['ui.router', 'SysRoleService', 'SysRoleDirective']);

SysRoleController.controller('SysRoleController.sysRole', ['$scope',
  function($scope) {}
])



'use strict';
/* System Role Service */

var SysRoleService = angular.module('SysRoleService', []);

SysRoleService.service('SysRoleService.sysRole', ['$http',
  function($http) {

  }
]);



'use strict';
/* System Role Directives */

var SysRoleDirective = angular.module('SysRoleDirective', ['SysRoleService']);

// System Role Directive
SysRoleDirective.directive('wiservSysRole', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'roleName',
            title: '角色名'
          }, {
            field: 'sysTypeName',
            title: '角色类型'
          }, {
            field: 'roleDesc',
            title: '角色描述'
          }],
          data: [{
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: '查看自己部门的数据统计情况，对自己部门可访问的数据进行数据交换'
          }, {
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: '查看自己部门的数据统计情况，对自己部门可访问的数据进行数据交换'
          }, {
            roleName: '各部门数据主管',
            sysTypeName: '普通用户',
            roleDesc: '查看自己部门的数据统计情况，对自己部门可访问的数据进行数据交换'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* User Management Controllers */

var UserManageController = angular.module('UserManageController', ['ui.router', 'UserManageService', 'UserManageDirective']);

UserManageController.controller('UserManageController.userManage', ['$scope',
  function($scope) {}
])




'use strict';
/* User Management Service */

var UserManageService = angular.module('UserManageService', []);

UserManageService.service('UserManageService.userManage', ['$http',
  function($http) {

  }
]);



'use strict';
/* User Management Directives */

var UserManageDirective = angular.module('UserManageDirective', ['UserManageService']);

// User Management Directive
UserManageDirective.directive('wiservUserManage', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'username',
            title: '用户名'
          }, {
            field: 'personName',
            title: '姓名'
          }, {
            field: 'genderName',
            title: '性别'
          }, {
            field: 'sysTypeName',
            title: '用户类型'
          }, {
            field: 'orgName',
            title: '组织机构'
          }, {
            field: 'updateTime',
            title: '修改时间'
          }, {
            field: 'createTime',
            title: '创建时间'
          }, {
            field: 'lastLoginTime',
            title: '最后登录时间'
          }],
          data: [{
            username: '1sf',
            personName: 'sdfds',
            genderName: '男',
            sysTypeName: '普通用户',
            orgName: '安监局',
            updateTime: '2016-02-12 12:14:21',
            createTime: '2016-02-12 12:14:21',
            lastLoginTime: '2016-02-12 12:14:21'
          }, {
            username: '1sf',
            personName: 'sdfds',
            genderName: '男',
            sysTypeName: '普通用户',
            orgName: '安监局',
            updateTime: '2016-02-12 12:14:21',
            createTime: '2016-02-12 12:14:21',
            lastLoginTime: '2016-02-12 12:14:21'
          }, {
            username: '1sf',
            personName: 'sdfds',
            genderName: '男',
            sysTypeName: '普通用户',
            orgName: '安监局',
            updateTime: '2016-02-12 12:14:21',
            createTime: '2016-02-12 12:14:21',
            lastLoginTime: '2016-02-12 12:14:21'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Dcm Config Controllers */

var DcmConfigController = angular.module('DcmConfigController', ['ui.router', 'DcmConfigService', 'DcmConfigDirective']);

DcmConfigController.controller('DcmConfigController.dcmConfig', ['$scope',
  function($scope) {}
])




'use strict';
/* Dcm Config Service */

var DcmConfigService = angular.module('DcmConfigService', []);

DcmConfigService.service('DcmConfigService.dcmConfig', ['$http',
  function($http) {

  }
]);




'use strict';
/* Dcm Config Directives */

var DcmConfigDirective = angular.module('DcmConfigDirective', ['DcmConfigService']);

// Data Info Directive
DcmConfigDirective.directive('wiservDcmConfig', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'dcmName',
            title: '前置机名称'
          }, {
            field: 'dcmCode',
            title: '前置机编码'
          }, {
            field: 'dcmIP',
            title: '前置机IP'
          }, {
            field: 'maintainUser',
            title: '管理人员'
          }, {
            field: 'depNames',
            title: '关联部门'
          }],
          data: [{
            dcmName: '192.1.5.1',
            dcmCode: 'DS2343343',
            dcmIP: '162.2.4.5',
            maintainUser: '231',
            depNames: '交通局'
          }, {
            dcmName: '192.1.5.1',
            dcmCode: 'DS2343343',
            dcmIP: '162.2.4.5',
            maintainUser: '231',
            depNames: '交通局'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Init System Controllers */

var InitSystemController = angular.module('InitSystemController', ['ui.router', 'InitSystemService', 'InitSystemDirective']);

InitSystemController.controller('InitSystemController.initSystem', ['$scope',
  function($scope) {}
])




'use strict';
/* Init System Service */

var InitSystemService = angular.module('InitSystemService', []);

InitSystemService.service('InitSystemService.initSystem', ['$http',
  function($http) {

  }
]);



'use strict';
/* Init System Directives */

var InitSystemDirective = angular.module('InitSystemDirective', ['InitSystemService']);

// Init System Directive
InitSystemDirective.directive('wiservInitSystem', [
  function() {
  }
]);

'use strict';
/* Log Manage Controllers */

var LogManageController = angular.module('LogManageController', ['ui.router', 'LogManageService', 'LogManageDirective']);

LogManageController.controller('LogManageController.logManage', ['$scope',
  function($scope) {}
])




'use strict';
/* Log Manage Service */

var LogManageService = angular.module('LogManageService', []);

LogManageService.service('LogManageService.logManageData', ['$http',
  function($http) {

  }
]);



'use strict';
/* Log Manage Directives */

var LogManageDirective = angular.module('LogManageDirective', ['LogManageService']);

// Log Manage Directive
LogManageDirective.directive('wiservLogManage', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });
        element.find('#table').bootstrapTable({
          columns: [
          {
            field: 'operateName',
            title: '日志类别'
          }, {
            field: 'handler',
            title: '操作人'
          }, {
            field: 'userIp',
            title: 'IP'
          }, {
            field: 'operateTime',
            title: '操作时间'
          }, {
            field: 'operateDesc',
            title: '操作描述'
          }],
          data: [{
            operateName: '登陆',
            handler: '管理员（admin）',
            userIp: '172.1.1.5',
            operateTime:'2016-03-03 13:45:14',
            operateDesc:'登录系统'
          }, {
            operateName: '登陆',
            handler: '管理员（admin）',
            userIp: '172.1.1.5',
            operateTime:'2016-03-03 13:45:14',
            operateDesc:'登录系统'
          }, {
            operateName: '登陆',
            handler: '管理员（admin）',
            userIp: '172.1.1.5',
            operateTime:'2016-03-03 13:45:14',
            operateDesc:'登录系统'
          }],
          pagination: true,
          pageNumber: 1,
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Sys Dict Category Controllers */

var SysDictCategoryController = angular.module('SysDictCategoryController', ['ui.router', 'SysDictCategoryService', 'SysDictCategoryDirective']);

SysDictCategoryController.controller('SysDictCategoryController.sysDictCategory', ['$scope',
  function($scope) {}
])




'use strict';
/* Sys Dict Category Service */

var SysDictCategoryService = angular.module('SysDictCategoryService', []);

SysDictCategoryService.service('SysDictCategoryService.sysDictCategory', ['$http',
  function($http) {

  }
]);




'use strict';
/* Sys Dict Category Directives */

var SysDictCategoryDirective = angular.module('SysDictCategoryDirective', ['SysDictCategoryService']);

// Sys Dict Category Directive
SysDictCategoryDirective.directive('wiservSysDictCategory', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'code',
            title: '字典类别'
          }, {
            field: 'name',
            title: '字典类别名称'
          }],
          data: [{
            code: '1',
            name: '性别'
          }, {
            code: '2',
            name: '证件类型'
          }, {
            code: '3',
            name: '数据大小'
          }],
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Sys Setting Category Controllers */

var SysSettingCategoryController = angular.module('SysSettingCategoryController', ['ui.router', 'SysSettingCategoryService', 'SysSettingCategoryDirective']);

SysSettingCategoryController.controller('SysSettingCategoryController.sysSettingCategory', ['$scope',
  function($scope) {}
])





'use strict';
/* Sys Setting Category Service */

var SysSettingCategoryService = angular.module('SysSettingCategoryService', []);

SysSettingCategoryService.service('SysSettingCategoryService.sysSettingCategory', ['$http',
  function($http) {

  }
]);



'use strict';
/* Sys Setting Category Directives */

var SysSettingCategoryDirective = angular.module('SysSettingCategoryDirective', ['SysSettingCategoryService']);

// Sys Setting Category Directive
SysSettingCategoryDirective.directive('wiservSysSettingCategory', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'code',
            title: '配置类别编码'
          }, {
            field: 'name',
            title: '配置类别名称'
          }],
          data: [{
            code: '1',
            name: '系统配置'
          }, {
            code: '2',
            name: '接口配置'
          }, {
            code: '3',
            name: '系统邮箱配置'
          }],
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Server Manage Controllers */

var ServerManageController = angular.module('ServerManageController', ['ui.router', 'ServerManageService', 'ServerManageDirective']);

ServerManageController.controller('ServerManageController.serverManage', ['$scope',
  function($scope) {}
])



'use strict';
/* Server Mangage Service */

var ServerManageService = angular.module('ServerManageService', []);

ServerManageService.service('ServerManageService.serverManage', ['$http',
  function($http) {

  }
]);


'use strict';
/* Server Manage Directives */

var ServerManageDirective = angular.module('ServerManageDirective', ['ServerManageService']);

// Server Manage Directive
ServerManageDirective.directive('wiservServerManage', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'serverID',
            title: '服务器ID'
          }, {
            field: 'IPAddress',
            title: 'IP地址'
          }, {
            field: 'hdUseRate',
            title: '硬盘使用率'
          }, {
            field: 'cpuUseRate',
            title: 'CPU使用率'
          }, {
            field: 'memoryUseRate',
            title: '内存使用率'
          }, {
            field: 'connectStatus',
            title: '服务器连接状态'
          }],
          data: [],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Data Audit Info Controllers */

var DataAuditInfoController = angular.module('DataAuditInfoController', ['ui.router', 'DataAuditInfoService', 'DataAuditInfoDirective']);

DataAuditInfoController.controller('DataAuditInfoController.dataAuditInfo', ['$scope',
  function($scope) {}
])


'use strict';
/* Data Audit Info Service */

var DataAuditInfoService = angular.module('DataAuditInfoService', []);

DataAuditInfoService.service('DataAuditInfoService.dataAuditInfo', ['$http',
  function($http) {

  }
]);


'use strict';
/* Data Audit Info Directives */

var DataAuditInfoDirective = angular.module('DataAuditInfoDirective', ['DataAuditInfoService']);

// Data Audit Info Directive
DataAuditInfoDirective.directive('wiservDataAuditInfo', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'dataType',
            title: '数据类型'
          }, {
            field: 'dataCreateTime',
            title: '创建时间'
          }, {
            field: 'creater',
            title: '创建人'
          }, {
            field: 'dataStatus',
            title: '数据状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>审核</a>'
          }, {
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>审核</a>'
          }],
          pagination: true,
          pageNumber: 1
        });
      }
    }
  }
]);

'use strict';
/* Data Offline Info Controllers */

var DataOfflineInfoController = angular.module('DataOfflineInfoController', ['ui.router', 'DataOfflineInfoService', 'DataOfflineInfoDirective']);

DataOfflineInfoController.controller('DataOfflineInfoController.dataOfflineInfo', ['$scope',
  function($scope) {}
])



'use strict';
/* Data Offline Info Service */

var DataOfflineInfoService = angular.module('DataOfflineInfoService', []);

DataOfflineInfoService.service('DataOfflineInfoService.dataOfflineInfo', ['$http',
  function($http) {

  }
]);




'use strict';
/* Data Offline Info Directives */

var DataOfflineInfoDirective = angular.module('DataOfflineInfoDirective', ['DataOfflineInfoService']);

// Data Offline Info Directive
DataOfflineInfoDirective.directive('wiservDataOfflineInfo', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'dataType',
            title: '数据类型'
          }, {
            field: 'dataCreateTime',
            title: '创建时间'
          }, {
            field: 'creater',
            title: '创建人'
          }, {
            field: 'dataStatus',
            title: '数据状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'></a>'
          }, {
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'></a>'
          }],
          pagination: true,
          pageNumber: 1
        });
      }
    }
  }
]);

'use strict';
/* Data Release Info Controllers */

var DataReleaseInfoController = angular.module('DataReleaseInfoController', ['ui.router', 'DataReleaseInfoService', 'DataReleaseInfoDirective']);

DataReleaseInfoController.controller('DataReleaseInfoController.dataReleaseInfo', ['$scope',
  function($scope) {}
])



'use strict';
/* Data Release Info Service */

var DataReleaseInfoService = angular.module('DataReleaseInfoService', []);

DataReleaseInfoService.service('DataReleaseInfoService.dataReleaseInfo', ['$http',
  function($http) {

  }
]);



'use strict';
/* Data Release Info Directives */

var DataReleaseInfoDirective = angular.module('DataReleaseInfoDirective', ['DataReleaseInfoService']);

// Data Release Info Directive
DataReleaseInfoDirective.directive('wiservDataReleaseInfo', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'dataType',
            title: '数据类型'
          }, {
            field: 'dataCreateTime',
            title: '创建时间'
          }, {
            field: 'creater',
            title: '创建人'
          }, {
            field: 'dataStatus',
            title: '数据状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>发布</a>'
          }, {
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>发布</a>'
          }],
          pagination: true,
          pageNumber: 1
        });
      }
    }
  }
]);

'use strict';
/* Data Authority Apply Controllers */

var DataAuthorityApplyController = angular.module('DataAuthorityApplyController', ['ui.router', 'DataAuthorityApplyService', 'DataAuthorityApplyDirective']);

DataAuthorityApplyController.controller('DataAuthorityApplyController.dataAuthorityApply', ['$scope',
  function($scope) {}
])



'use strict';
/* Data Authority Apply Service */

var DataAuthorityApplyService = angular.module('DataAuthorityApplyService', []);

DataAuthorityApplyService.service('DataAuthorityApplyService.dataAuthorityApply', ['$http',
  function($http) {

  }
]);



'use strict';
/* Data Authority Apply Directives */

var DataAuthorityApplyDirective = angular.module('DataAuthorityApplyDirective', ['DataAuthorityApplyService']);

// Data Authority Apply Directive
DataAuthorityApplyDirective.directive('wiservDataAuthorityApply', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        window.console.log(element.find('#table'));
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'applicant',
            title: '申请人'
          }, {
            field: 'applicationDate',
            title: '申请时间'
          }, {
            field: 'applicationStatus',
            title: '申请状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            dataName: '资源一',
            dataResCatalog: '主题：交通局',
            applicant: '测试人员',
            applicationDate:'2016-02-10',
            applicationStatus:'未审核',
            operator:'<a href='+'"#"'+'>审核</a>'
          }, {
            dataName: '资源一',
            dataResCatalog: '主题：交通局',
            applicant: '测试人员',
            applicationDate:'2016-02-10',
            applicationStatus:'未审核',
            operator:'<a href='+'"#"'+'>审核</a>'
          }],
          pagination: true,
          pageNumber: 1
        });
      }
    }
  }
]);

'use strict';
/* Data Authority Controllers */

var DataAuthorityController = angular.module('DataAuthorityController', ['ui.router', 'DataAuthorityService', 'DataAuthorityDirective']);

DataAuthorityController.controller('DataAuthorityController.dataAuthority', ['$scope',
  function($scope) {}
])


'use strict';
/* Data Authority Service */

var DataAuthorityService = angular.module('DataAuthorityService', []);

DataAuthorityService.service('DataAuthorityService.dataAuthority', ['$http',
  function($http) {

  }
]);




'use strict';
/* Data Authority Directives */

var DataAuthorityDirective = angular.module('DataAuthorityDirective', ['DataAuthorityService']);

// Data Authority Apply Directive
DataAuthorityDirective.directive('wiservDataAuthority', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'dataType',
            title: '数据类型'
          }, {
            field: 'dataCreateTime',
            title: '创建时间'
          }, {
            field: 'creater',
            title: '创建人'
          }, {
            field: 'dataStatus',
            title: '数据状态'
          }, {
            field: 'operator',
            title: '操作'
          }],
          data: [{
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>授权</a>'
          }, {
            dataName: '民政',
            dataResCatalog: '部门：交通局',
            dataType: '普通文件',
            dataCreateTime:'2016-02-10 10:15:21',
            creater:'数据采集员',
            dataProvider: '民政局',
            dataStatus:'已接入',
            operator:'<a href='+'"#"'+'>授权</a>'
          }],
          pagination: true,
          pageNumber: 1
        });
      }
    }
  }
]);

'use strict';
/* Data Info Controllers */

var DataInfoController = angular.module('DataInfoController', ['ui.router', 'DataInfoService', 'DataInfoDirective']);

DataInfoController.controller('DataInfoController.dataInfo', ['$scope',
  function($scope) {}
])


'use strict';
/* Data Info Service */

var DataInfoService = angular.module('DataInfoService', []);

DataInfoService.service('DataInfoService.dataInfo', ['$http',
  function($http) {

  }
]);




'use strict';
/* Data Info Directives */

var DataInfoDirective = angular.module('DataInfoDirective', ['DataInfoService']);

// Data Info Directive
DataInfoDirective.directive('wiservDataInfo', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'dataName',
            title: '数据名称'
          }, {
            field: 'dataFlag',
            title: '数据标识符'
          }, {
            field: 'dataType',
            title: '数据类型'
          }, {
            field: 'dataResCatalog',
            title: '数据资源分类'
          }, {
            field: 'dataProvider',
            title: '数据提供方'
          }, {
            field: 'dataCreateTime',
            title: '数据创建时间'
          }, {
            field: 'keyDesc',
            title: '关键字说明'
          }, {
            field: 'dataStatus',
            title: '数据状态'
          }],
          data: [{
            dataName: '民政',
            dataFlag: 'DS2343343',
            dataType: '普通文件',
            dataResCatalog: '部门：交通局',
            dataProvider: '民政局',
            dataCreateTime:'2016-02-10 10:15:21',
            keyDesc:'描述',
            dataStatus:'已接入'
          }, {
            dataName: '民政',
            dataFlag: 'DS2343343',
            dataType: '普通文件',
            dataResCatalog: '部门：交通局',
            dataProvider: '民政局',
            dataCreateTime:'2016-02-10 10:15:21',
            keyDesc:'描述',
            dataStatus:'已接入'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Data Resource Controllers */

var DataResourceController = angular.module('DataResourceController', ['ui.router', 'DataResourceService', 'DataResourceDirective']);

DataResourceController.controller('DataResourceController.dataResource', ['$scope',
  function($scope) {}
])



'use strict';
/* Data Resource Service */

var DataResourceService = angular.module('DataResourceService', []);

DataResourceService.service('DataResourceService.dataResource', ['$http',
  function($http) {

  }
]);




'use strict';
/* Data Resource Directives */

var DataResourceDirective = angular.module('DataResourceDirective', ['DataResourceService']);

// Data Resource Directive
DataResourceDirective.directive('wiservDataResource', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'resName',
            title: '资源名称'
          }, {
            field: 'resCat',
            title: '资源源目录分类'
          }, {
            field: 'resDept',
            title: '资源所属部门'
          }, {
            field: 'resCreateTime',
            title: '资源创建时间'
          }, {
            field: 'resAccessStaus',
            title: '资源接入状态'
          }],
          data: [{
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
          }, {
            resName: '交通数据',
            resCat: '服务一',
            resDept: '交通局',
            resCreateTime:'2016-02-10 10:15:21',
            resAccessStaus:'未接入'
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
  }
]);

'use strict';
/* Resource Catalog Controllers */

var ResourceCatalogController = angular.module('ResourceCatalogController', ['ui.router', 'ResourceCatalogService', 'ResourceCatalogDirective']);

ResourceCatalogController.controller('ResourceCatalogController.resourceCatalog', ['$scope', 'ResourceCatalogService.httpGet',
  function($scope, httpGet) {
    httpGet.then(function(response){
      $scope.ResourceCatalogs = response.data.body;
    },function(response){
      console.error(response.status + response.statusText);
    });
  }
])



'use strict';
/* Resource Catalog Service */

var ResourceCatalogService = angular.module('ResourceCatalogService', []);

ResourceCatalogService.service('ResourceCatalogService.httpGet', ['$http', 'API',
  function($http, API) {
    return $http.get(
      API.path + '/api/resource-catalog', {
        withCredentials: true
      });
  }
]);





'use strict';
/* Resource Catalog Directives */

var ResourceCatalogDirective = angular.module('ResourceCatalogDirective', ['ResourceCatalogService']);

// Resource Catalog Directive
ResourceCatalogDirective.directive('wiservResourceCatalog', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'resCatType',
            title: '资源目录类型'
          }, {
            field: 'resCatName',
            title: '资源目录名称'
          }, {
            field: 'resCatCode',
            title: '资源目录编码'
          }, {
            field: 'resCatParCode',
            title: '父目录编码'
          }, {
            field: 'resCatDesc',
            title: '资源目录描述'
          }, {
            field: 'resCatStaus',
            title: '状态'
          }],
          data: [{
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }, {
            resCatType: '服务',
            resCatName: '服务一',
            resCatCode: '23343',
            resCatParCode:0,
            resCatDesc:'描述',
            resCatStaus:'启用'
          }],
          pagination: true,
          pageNumber: 1,
          toolbar: ".toolbar",
          clickToSelect: true,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Alarm Info Controllers */

var AlarmInfoController = angular.module('AlarmInfoController', ['ui.router', 'AlarmInfoService', 'AlarmInfoDirective']);

AlarmInfoController.controller('AlarmInfoController.alarmInfo', ['$scope',
  function($scope) {}
])




'use strict';
/* Alarm Info Service */

var AlarmInfoService = angular.module('AlarmInfoService', []);

AlarmInfoService.service('AlarmInfoService.alarmInfo', ['$http',
  function($http) {

  }
]);



'use strict';
/* Alarm Info Directives */

var AlarmInfoDirective = angular.module('AlarmInfoDirective', ['AlarmInfoService']);

// Alarm Info Directive
AlarmInfoDirective.directive('wiservAlarmInfo', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'alarmType',
            title: '告警类型'
          }, {
            field: 'alarmName',
            title: '告警名称'
          }, {
            field: 'alarmContent',
            title: '告警内容'
          }, {
            field: 'alarmTime',
            title: '告警时间'
          }, {
            field: 'status',
            title: '状态'
          }],
          data: [],
          pagination: true,
          toolbar: ".toolbar",
          pageNumber: 1,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Alarm Rule Controllers */

var AlarmRuleController = angular.module('AlarmRuleController', ['ui.router', 'AlarmRuleService', 'AlarmRuleDirective']);

AlarmRuleController.controller('AlarmRuleController.alarmRule', ['$scope',
  function($scope) {}
])



'use strict';
/* Alarm Rule Service */

var AlarmRuleService = angular.module('AlarmRuleService', []);

AlarmRuleService.service('AlarmRuleService.alarmRule', ['$http',
  function($http) {

  }
]);



'use strict';
/* Alarm Rule Directives */

var AlarmRuleDirective = angular.module('AlarmRuleDirective', ['AlarmRuleService']);

// Alarm Rule Directive
AlarmRuleDirective.directive('wiservAlarmRule', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });
        element.find('#table').bootstrapTable({
          columns: [{
            field: 'state',
            checkbox: true
          }, {
            field: 'alarmName',
            title: '监控项名称'
          }, {
            field: 'statisticsMethod',
            title: '统计方法'
          }, {
            field: 'statisticsPeriod',
            title: '统计周期'
          }, {
            field: 'contactsGroup',
            title: '通知联系人组'
          }],
          data: [],
          pagination: true,
          toolbar: ".toolbar",
          pageNumber: 1,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);

'use strict';
/* Contacts Group Controllers */

var ContactsGroupController = angular.module('ContactsGroupController', ['ui.router', 'ContactsGroupService', 'ContactsGroupDirective']);

ContactsGroupController.controller('ContactsGroupController.contactsGroup', ['$scope',
  function($scope) {}
])



'use strict';
/* Contacts Group Service */

var ContactsGroupService = angular.module('ContactsGroupService', []);

ContactsGroupService.service('ContactsGroupService.contactsGroup', ['$http',
  function($http) {

  }
]);




'use strict';
/* Contacts Group Directives */

var ContactsGroupDirective = angular.module('ContactsGroupDirective', ['ContactsGroupService']);

// Contacts Group Directive
ContactsGroupDirective.directive('wiservContactsGroup', [
  function() {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        element.find('.selectpicker').selectpicker({
          style: 'btn-default btn-sm',
          width: 80,
          liveSearch: false
        });

        element.find('#table').bootstrapTable({
          columns: [{
            field: 'userName',
            title: '用户名'
          }, {
            field: 'realName',
            title: '姓名'
          }, {
            field: 'phoneNumber',
            title: '手机号'
          }, {
            field: 'email',
            title: 'Email'
          }],
          data: [{
            userName: 'Ahbh',
            realName: '张三',
            phoneNumber: '13584452415',
            email:'sdfsdf@ww.me'
          }, {
            userName: 'Ahbh',
            realName: '张三',
            phoneNumber: '13584452415',
            email:'sdfsdf@ww.me'
          }],
          pagination: true,
          pageNumber: 1,
          showRefresh: true,
          showColumns: true
        });
      }
    }
  }
]);
