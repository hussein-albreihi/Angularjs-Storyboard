'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:workitem
 * @description
 * # workitem
 */
angular.module('angularProjectApp')
	.directive('sbWorkitem', function () {
		return {
			scope: {
				info: '=',
				afterDelete: '='
			},
			restrict: 'E',
			templateUrl: '/scripts/directives/workitem.html',
			controller: function ($scope, $route, itemFactory) {
				$scope.modalShown = false;
				$scope.users = [];
				$scope.username = '';
				$scope.updateItem = function (status, id) {
					var jsonStatus = {
						status: status
					};
					itemFactory.updateItem(id, jsonStatus);
					$route.reload();
				};
				$scope.deleteWorkitem = function () {
					console.log('delete from directive');
					itemFactory.deleteWorkitem($scope.info.id)
						.then(function () {
							console.log($scope.afterDelete);
							if ($scope.afterDelete) {
								$scope.afterDelete($scope.info.id);
							}
						});


					/*
					$scope.items = $scope.items.filter(function (item) {
						return item.id !== id;
					});
					console.log($scope.items);

					
					for (var x = 0; x < $scope.items.length; x++) {
					  if ($scope.items[x].id === id) {
					    $scope.items.splice(x, 1);

						  }
					}*/
				};
				$scope.addUser = function (username, id) {
					itemFactory.addItemToUser(username, id);
				};

				function onError(res) {
					console.log('Error', res);
				}
				$scope.toggleModal = function () {
					$scope.modalShown = !$scope.modalShown;
				};
				(function getAllUsers() {
					itemFactory.getAllUsers()
						.then(function (res) {
							$scope.users = res.data;
						}, onError);
				})();
			}
		};
	});