(function() {

	//główna deklaracja i tutaj wpinam wszytskie moduły
	var app = angular.module('crmApp', ['ngRoute','crmService']);

	app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/clients', {
				controller : 'ClientsListController',
				templateUrl: 'views/clients-list.html'
			})
			.when('/sectors', {
				controller : 'WyswietlUserowApi',
				templateUrl: 'views/sectors-list.html'
			})
			.when('/users', {
				templateUrl: 'views/users-list.html'
			})
			.otherwise({
				redirectTo: '/clients'
			})
		;

		$locationProvider
			.html5Mode(true);
			//potrzebny jest .htaccess sciągnięty z githuba w modzie html5Mode
			//zeby po enterze nie przeładowywało strony

	}]);



	app.controller('ClientsListController', ['$scope','clientsArray', function($scope, clientsArray){
		
		//tablica wszytskich klientów pobranych z pliku services
		$scope.clientsArray = [];
		clientsArray.getClients111(function(clientsArray){
			$scope.clientsArray = clientsArray;
			console.warn($scope.clientsArray);
		});


	}]);

	app.controller('WyswietlUserowApi', ['$scope','randomuserArray1111', function($scope, array){
		array.wyswietlUserowServices(function(parametr) {
			$scope.usersArr = parametr.results;
		});
	}]);







})();