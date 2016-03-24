'use strict';
const Express = require('express'),
      App = Express(),
      bodyParser = require('body-parser');

App.use(bodyParser.json());
/** CORS Filter */
// Setting static resource for express
// const path = require('path');
// var client = path.resolve(__dirname + '/../client');
// app.use(express.static(client));
App.all('*', function(req, res, next) {
  // 指定一个允许向该服务器提交请求的URI.
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  // 指定服务器可以接收的HTTP请求方式，该响应头信息在客户端发出Option预检请求时会被返回
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  // 设置浏览器可以读取服务器响应回来的Credential信息
  res.header('Access-Control-Allow-Credentials', true);
  // 允许Option预请求缓存的秒数,在此期间,浏览器不需要再次发出预检请求
  res.header('Access-Control-Allow-Age', 1728000);
  // 设置允许浏览器可以访问到的服务器响应头信息
  // res.header('Access-Control-Expose-Header', '*');
  // 在响应Option预检请求时使用.指明在接下来的真实请求中,可以使用到哪些自定义HTTP请求头
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') res.sendStatus(200);
  else next();
});
App.listen(5000);
console.info('http-server[express] listening on 5000');

/** test */
var auth = require('./api/auth');
App.use('/api', auth);

/** menu */
var menu = require('./api/menu');
App.use('/api', menu);

/** resource_catalog */
var resource_catalog = require('./api/resource-catalog');
App.use('/api', resource_catalog);

/** data resource*/
var data_resource = require('./api/data-resource');
App.use('/api', data_resource);

/** data info*/
var data_info = require('./api/data-info');
App.use('/api', data_info);

/** data authority*/
var data_authority = require('./api/data-authority');
App.use('/api', data_authority);

/** data authority apply*/
var data_authority_apply = require('./api/data-authority-apply');
App.use('/api', data_authority_apply);

/** data audit info*/
var data_audit_info = require('./api/data-audit-info');
App.use('/api', data_audit_info);

/** data release info*/
var data_release_info = require('./api/data-release-info');
App.use('/api', data_release_info);

/** data offline info*/
var data_offline_info = require('./api/data-offline-info');
App.use('/api', data_offline_info);

/** data visit info*/
var data_visit_info = require('./api/data-visit-info');
App.use('/api', data_visit_info);

/** server manage*/
var server_manage = require('./api/server-manage');
App.use('/api', server_manage);

/** conatcts group*/
var contacts_group = require('./api/contacts-group');
App.use('/api', contacts_group);

/** alarm rule*/
var alarm_rule = require('./api/alarm-rule');
App.use('/api', alarm_rule);

/** alarm info*/
var alarm_info = require('./api/alarm-info');
App.use('/api', alarm_info);

/** dcm config*/
var dcm_config = require('./api/dcm-config');
App.use('/api', dcm_config);

/** system setting category*/
var sys_setting_category = require('./api/sys-setting-category');
App.use('/api', sys_setting_category);

/** system dict category*/
var sys_dict_category = require('./api/sys-dict-category');
App.use('/api', sys_dict_category);

/** system log manage*/
var log_manage = require('./api/log-manage');
App.use('/api', log_manage);

/** system department manage*/
var sys_dep_manage = require('./api/sys-dep-manage');
App.use('/api', sys_dep_manage);

/** user manage*/
var user_manage = require('./api/user-manage');
App.use('/api', user_manage);

/** sys role*/
var sys_role = require('./api/sys-role');
App.use('/api', sys_role);

/** data manage*/
var data_role = require('./api/data-role');
App.use('/api', data_role);

/** plat statistic */
var plat_statistic = require('./api/plat-statistic');
App.use('/api', plat_statistic);

/** plat department statistic */
var plat_dept_statistic = require('./api/plat-dept-statistic');
App.use('/api', plat_dept_statistic);

/** data visit statistic*/
var data_visit_statistic = require('./api/data-visit-statistic');
App.use('/api', data_visit_statistic);

/** login user */
var login_user = require('./api/login-user');
App.use('/api', login_user);
