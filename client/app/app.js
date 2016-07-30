// create main angular module, connect to other modules and router. This is a basic set up as your application grows you can refactor as you wish.
angular.module('Notify',["ui.router", 'Notify.Auth'])
// make your route configurations using uiRouter, the config func takes in a callback with two parameter $stateProvider, $urlRouterProvider. the parameter are objects. read what methods they have.
.config(function($stateProvider, $urlRouterProvider){
// $urlRouterProvider make dericts your urls
	$urlRouterProvider.otherwise('/home');
// 	$stateProvider has a state property so you can set your state options, it takes two paramater a name of the state it can be banana and object. The object takes a url property and the url as a value. A templateUrl propety with the path to the static file.
	$stateProvider
	// the state name will go on the parent dom element of your view using ui-sref='name of state here'
	.state('home', {
		// the route for the state
		url: '/home',
		// the path to your static file.
		templateUrl: 'app/home/home.html',
		// can be use for multiple purposes refer to docs for this one.
		resolve: {
			userService: function($http){
				// making a get request and the response will be returned to the controller via the name of the method method can be named banana.
				return $http.get('/home');
			}
		},
		// this is just like your normal angular controller its now just in the state
		controller: function($scope, userService, $location){
				
		},
		controllerAs: 'HomeController'
	});
});
// the controller will tak
