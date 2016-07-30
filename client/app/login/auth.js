// Add the name of your module to your main module in your app.js file
angular.module('Notify.Auth', [])
.config(function($stateProvider){
// 	$stateProvider has a state property so you can set your state options, it takes two paramater a name of the state it can be banana and object. The object takes a url property and the url as a value. A templateUrl propety with the path to the static file.
	$stateProvider
	// the state name will go on the parent dom element of your view using ui-sref='name of state here'
	.state('login', {
		// the route for the state
		url: '/login',
		// the path to your static file.
		templateUrl: 'app/login/login.html',
		// can be use for multiple purposes refer to docs for this one.
		resolve: {
			userService: function($http){
				// making a get request and the response will be returned to the controller via the name of the method method can be named banana.
				return $http.get('/login');
			}
		},
		// this is just like your normal angular controller its now just in the state
		controller: function($scope, userService, $location){
				
		},
		controllerAs: 'HomeController'
	});
});