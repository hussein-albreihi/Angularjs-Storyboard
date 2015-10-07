'use strict';

/**
 * @ngdoc service
 * @name angularProjectApp.itemFactory
 * @description
 * # itemFactory
 * Factory in the angularProjectApp.
 */
angular.module('angularProjectApp')
	.factory('itemFactory', function ($http) {
		var urlTeam = 'http://localhost:9999/v1/teams/nullheart';
		var urlUsers = 'http://localhost:9999/v1/users';
		var urlItems = 'http://localhost:9999/v1/items';

		return {
			getAllItems: function () {
				return $http.get(urlTeam + '/items');
			},
			addItem: function (item) {
				console.log(item);
				return $http.post(urlItems + '/nullheart/items', item);
			},
			addItemToUser: function (username, id) {
				return $http.post(urlUsers + '/' + username + '/items' + '/' + id);
			},
			getAllUsers: function () {
				return $http.get(urlTeam + '/users');
			},
			deleteWorkitem: function (id) {
				return $http.delete(urlItems + '/' + id);
			},
			updateItem: function (id, status) {
				return $http.put(urlItems + '/' + id + '/status', status);
			}
		};
	});