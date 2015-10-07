'use strict';

/**
 * @ngdoc directive
 * @name angularProjectApp.directive:workitemForm
 * @description
 * # workitemForm
 */
angular.module('angularProjectApp')
	.directive('sbWorkitemForm', function () {
		return {
			restrict: 'E',
			templateUrl: '/scripts/directives/workitem-form.html',
			controller: function ($scope, $route, itemFactory) {
				$scope.item = {};
				$scope.modalShown = false;
				$scope.sendForm = function () {
					itemFactory.addItem($scope.item);
					console.log('click');
					itemFactory.getAllItems();
					$route.reload();
				};

				$scope.toggleModal = function () {
					$scope.modalShown = !$scope.modalShown;
				};

				$scope.options = [{
					name: 'doing',
					id: 0
				}, {
					name: 'not completed',
					id: 1
				}, {
					name: 'idea',
					id: 2
				}, {
					name: 'completed',
					id: 3
				}];

				angular.forEach(angular.element.find('h4'), function (node) {

					if (node.id === 'doing') {
						$scope.selectedOption = $scope.options[0];
					}
					if (node.id === 'not completed') {
						$scope.selectedOption = $scope.options[1];
					}
					if (node.id === 'idea') {
						$scope.selectedOption = $scope.options[2];
					}
					if (node.id === 'completed') {
						$scope.selectedOption = $scope.options[3];
					}
				});

			}
		};
	});