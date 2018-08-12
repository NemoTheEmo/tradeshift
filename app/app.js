'use strict';

// Declare app level module which depends on views, and components
angular.module('tradeshift', [
  'ngRoute',
  'tradeshift.calculate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/calculate'});
}]);
