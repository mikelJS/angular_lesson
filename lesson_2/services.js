(function() {

	var app = angular.module('crmService',[]);

	app.factory('clientsArray', ['$http', function($http){
		
		var _getClients = function(callback) {
			callback = callback || function(){};
			$http.get('/api.php/clients')
				.success(function(data){
					callback(data);
				});
		};

		return {
			getClients111: _getClients
		};


	}]);

	

	// ZWYKŁE WYWOŁANIE AJAXOWE w jQuery
	// $.ajax({
	//   url: 'http://api.randomuser.me/',
	//   dataType: 'json',
	//   success: function(data){
	//     console.log(data);
	//   }
	// });


	app.factory('randomuserArray1111', ['$http', function($http){

		var _pobierzRandomUserow = function(callback) {
			$http.get('http://api.randomuser.me?results=20').success(function(data){
				callback(data);
			});
		};

		return {
			"wyswietlUserowServices": _pobierzRandomUserow
		};

	}]);



})();