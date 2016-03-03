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
  'InitSystemController'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'scripts/partials/login.html',
      controller: 'LoginController.login'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'scripts/partials/main.html',
      controller: 'MainController.main'
    })
    .state('main.dashboard', {
      url: '/dashboard',
      templateUrl: 'scripts/partials/dashboard.html',
      controller: 'DashboardController.dashboard'
    })
    .state('main.resourceCatalog', {
      url: '/resourceCatalog',
      templateUrl: 'scripts/partials/resourceCatalog.html',
      controller: 'ResourceCatalogController.resourceCatalog'
    })
    .state('main.dataResource', {
      url: '/dataResource',
      templateUrl: 'scripts/partials/dataResource.html',
      controller: 'DataResourceController.dataResource'
    })
    .state('main.dataInfo', {
      url: '/dataInfo',
      templateUrl: 'scripts/partials/dataInfo.html',
      controller: 'DataInfoController.dataInfo'
    })
    .state('main.dataAuthority', {
      url: '/dataAuthority',
      templateUrl: 'scripts/partials/dataAuthority.html',
      controller: 'DataAuthorityController.dataAuthority'
    })
    .state('main.dataAuthorityApply', {
      url: '/dataAuthorityApply',
      templateUrl: 'scripts/partials/dataAuthorityApply.html',
      controller: 'DataAuthorityApplyController.dataAuthorityApply'
    })
    .state('main.dataAuditInfo', {
      url: '/dataAuditInfo',
      templateUrl: 'scripts/partials/dataAuditInfo.html',
      controller: 'DataAuditInfoController.dataAuditInfo'
    })
    .state('main.dataReleaseInfo', {
      url: '/dataReleaseInfo',
      templateUrl: 'scripts/partials/dataReleaseInfo.html',
      controller: 'DataReleaseInfoController.dataReleaseInfo'
    })
    .state('main.dataOfflineInfo', {
      url: '/dataOfflineInfo',
      templateUrl: 'scripts/partials/dataOfflineInfo.html',
      controller: 'DataOfflineInfoController.dataOfflineInfo'
    })
    .state('main.dataVisitInfo', {
      url: '/dataVisitInfo',
      templateUrl: 'scripts/partials/dataVisitInfo.html',
      controller: 'DataVisitInfoController.dataVisitInfo'
    })
    .state('main.serverManage', {
      url: '/serverManage',
      templateUrl: 'scripts/partials/serverManage.html',
      controller: 'ServerManageController.serverManage'
    })
    .state('main.contactsGroup', {
      url: '/contactsGroup',
      templateUrl: 'scripts/partials/contactsGroup.html',
      controller: 'ContactsGroupController.contactsGroup'
    })
    .state('main.alarmRule', {
      url: '/alarmRule',
      templateUrl: 'scripts/partials/alarmRule.html',
      controller: 'AlarmRuleController.alarmRule'
    })
    .state('main.alarmInfo', {
      url: '/alarmInfo',
      templateUrl: 'scripts/partials/alarmInfo.html',
      controller: 'AlarmInfoController.alarmInfo'
    })
    .state('main.dcmConfig', {
      url: '/dcmConfig',
      templateUrl: 'scripts/partials/dcmConfig.html',
      controller: 'DcmConfigController.dcmConfig'
    })
    .state('main.sysSettingCategory', {
      url: '/sysSettingCategory',
      templateUrl: 'scripts/partials/sysSettingCategory.html',
      controller: 'SysSettingCategoryController.sysSettingCategory'
    })
    .state('main.sysDictCategory', {
      url: '/sysDictCategory',
      templateUrl: 'scripts/partials/sysDictCategory.html',
      controller: 'SysDictCategoryController.sysDictCategory'
    })
    .state('main.logManage', {
      url: '/logManage',
      templateUrl: 'scripts/partials/logManage.html',
      controller: 'LogManageController.logManage'
    })
    .state('main.initSystem', {
      url: '/initSystem',
      templateUrl: 'scripts/partials/initSystem.html',
      controller: 'InitSystemController.initSystem'
    })
}]);
