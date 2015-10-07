'use strict';

/**
 * @ngdoc function
 * @name angularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectApp
 */
angular.module('angularProjectApp').controller('MainCtrl', function ($scope, itemFactory) {
  $scope.items = [];

  function onError(res) {
    console.log('Error', res);
  }

  function getAllItems() {
    itemFactory.getAllItems()
      .then(function (res) {
        $scope.items = res.data;
      }, onError);
  }

  getAllItems();



  $scope.afterDelete = function (id) {
    /* itemFactory.deleteWorkitem(id).then(function () {
       getAllItems();
       $scope.$apply();
     });*/
    console.log('after delete');
    $scope.items = $scope.items.filter(function (item) {
      return item.id !== id;
    });
    console.log($scope.items);

    /*
    for (var x = 0; x < $scope.items.length; x++) {
      if ($scope.items[x].id === id) {
        $scope.items.splice(x, 1);

      }
    }*/
  };
});