'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:editText
 * @description
 * # editText
 */
angular.module('angularProjectApp')
  .directive('editText', function ($window) {
    return {
      restrict: 'A',
    link: function (scope, element, attrs) {
        element.text('edit', function () {
          if (!$window.getSelection().toString()) {
            this.setSelectionRange(0, this.value.length);
          }
        });
      }
    };
  });