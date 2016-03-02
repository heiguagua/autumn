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

/*search bar directive*/
/*
commonDirectives.directive("searchBar",[function(){
  return {
    restrict : "AE",
    replace : true,
    link : function(scope, element, attrs) {

    }
  }
}]);
*/

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

/*search bar directive*/
/*
commonDirectives.directive("searchBar",[function(){
  return {
    restrict : "AE",
    replace : true,
    link : function(scope, element, attrs) {

    }
  }
}]);
*/

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
