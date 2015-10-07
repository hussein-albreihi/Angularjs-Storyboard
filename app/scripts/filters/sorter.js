'use strict';

/**
 * @ngdoc filter
 * @name angularProjectApp.filter:sorter
 * @function
 * @description
 * # sorter
 * Filter in the angularProjectApp.
 */
angular.module('angularProjectApp')
  .filter('sortBy', function () {
    return function (items, status) {
      if(items === undefined) return;
      return items.filter(function(item){
        return item.status === status;
      });
    };
  });
