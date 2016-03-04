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
    .state('main.resource-catalog', {
      url: '/resource-catalog',
      templateUrl: 'scripts/partials/data-resource/resource-catalog/resource-catalog.html',
      controller: 'ResourceCatalogController.resourceCatalog'
    })
    .state('main.data-resource', {
      url: '/data-resource',
      templateUrl: 'scripts/partials/data-resource/metadata/data-resource.html',
      controller: 'DataResourceController.dataResource'
    })
    .state('main.data-info', {
      url: '/data-info',
      templateUrl: 'scripts/partials/data-resource/metadata/data-info.html',
      controller: 'DataInfoController.dataInfo'
    })
    .state('main.data-authority', {
      url: '/data-authority',
      templateUrl: 'scripts/partials/data-resource/metadata/data-authority.html',
      controller: 'DataAuthorityController.dataAuthority'
    })
    .state('main.data-authority-apply', {
      url: '/data-authority-apply',
      templateUrl: 'scripts/partials/data-resource/metadata/data-authority-apply.html',
      controller: 'DataAuthorityApplyController.dataAuthorityApply'
    })
    .state('main.data-audit-info', {
      url: '/data-audit-info',
      templateUrl: 'scripts/partials/data-resource/data/data-audit-info.html',
      controller: 'DataAuditInfoController.dataAuditInfo'
    })
    .state('main.data-release-info', {
      url: '/data-release-info',
      templateUrl: 'scripts/partials/data-resource/data/data-release-info.html',
      controller: 'DataReleaseInfoController.dataReleaseInfo'
    })
    .state('main.data-offline-info', {
      url: '/data-offline-info',
      templateUrl: 'scripts/partials/data-resource/data/data-offline-info.html',
      controller: 'DataOfflineInfoController.dataOfflineInfo'
    })
    .state('main.data-visit-info', {
      url: '/data-visit-info',
      templateUrl: 'scripts/partials/data-status/data-visit-info.html',
      controller: 'DataVisitInfoController.dataVisitInfo'
    })
    .state('main.server-manage', {
      url: '/server-manage',
      templateUrl: 'scripts/partials/platform-operations/server-manage.html',
      controller: 'ServerManageController.serverManage'
    })
    .state('main.contacts-group', {
      url: '/contacts-group',
      templateUrl: 'scripts/partials/platform-operations/platform-alarm/contacts-group.html',
      controller: 'ContactsGroupController.contactsGroup'
    })
    .state('main.alarm-rule', {
      url: '/alarm-rule',
      templateUrl: 'scripts/partials/platform-operations/platform-alarm/alarm-rule.html',
      controller: 'AlarmRuleController.alarmRule'
    })
    .state('main.alarm-info', {
      url: '/alarm-info',
      templateUrl: 'scripts/partials/platform-operations/platform-alarm/alarm-info.html',
      controller: 'AlarmInfoController.alarmInfo'
    })
    .state('main.dcm-config', {
      url: '/dcm-config',
      templateUrl: 'scripts/partials/platform-configuration/dcm-config.html',
      controller: 'DcmConfigController.dcmConfig'
    })
    .state('main.sys-setting-category', {
      url: '/sys-setting-category',
      templateUrl: 'scripts/partials/platform-configuration/sys-setting-category.html',
      controller: 'SysSettingCategoryController.sysSettingCategory'
    })
    .state('main.sys-dict-category', {
      url: '/sys-dict-category',
      templateUrl: 'scripts/partials/platform-configuration/sys-dict-category.html',
      controller: 'SysDictCategoryController.sysDictCategory'
    })
    .state('main.log-manage', {
      url: '/log-manage',
      templateUrl: 'scripts/partials/platform-configuration/log-manage.html',
      controller: 'LogManageController.logManage'
    })
    .state('main.init-system', {
      url: '/init-system',
      templateUrl: 'scripts/partials/platform-configuration/init-system.html',
      controller: 'InitSystemController.initSystem'
    })
    .state('main.sys-dep-manage', {
      url: '/sys-dep-manage',
      templateUrl: 'scripts/partials/organization-person/sys-dep-manage.html',
      controller: 'SysDepManageController.sysDepManage'
    })
    .state('main.user-manage', {
      url: '/user-manage',
      templateUrl: 'scripts/partials/organization-person/user-manage.html',
      controller: 'UserManageController.userManage'
    })
    .state('main.sys-role', {
      url: '/sys-role',
      templateUrl: 'scripts/partials/organization-person/sys-role.html',
      controller: 'SysRoleController.sysRole'
    })
    .state('main.data-role', {
      url: '/data-role',
      templateUrl: 'scripts/partials/organization-person/data-role.html',
      controller: 'DataRoleController.dataRole'
    })
}]);
