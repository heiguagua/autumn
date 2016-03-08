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
