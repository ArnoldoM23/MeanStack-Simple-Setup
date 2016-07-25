// create main angular module, connect to other modules and router. This is a basic set up as your application grows you can refactor as you wish.
angular.module('Notify',["ui.router"])
// make your route configurations using uiRouter, the config func takes in a callback with two parameter $stateProvider, $urlRouterProvider. the parameter are objects. read what methods they have.
.config(function($stateProvider, $urlRouterProvider){
// $urlRouterProvider make dericts your urls
	$urlRouterProvider.otherwise('/names');
// 	$stateProvider has a state property so you can set your state options, it takes two paramater a name of the state it can be banana and object. The object takes a url property and the url as a value. A templateUrl propety with the path to the static file.
	$stateProvider
	// the state will go on the html that you want route the user.
	.state('names', {
		url: '/names',
		templateUrl: 'app/login/login.html'
	});
})
// the controller will tak
.controller('HomeController', function($scope, $http){
	// 
	$http.get('/names').then(function(response){
		$scope.testing = response.data;
	});
})