'use strict';

angular.module('tradeshift.calculate', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calculate', {
    templateUrl: 'calculate/calculate.partial.html',
    controller: 'calculateCtrl'
  });
}])

.controller('calculateCtrl', ['$scope', function($scope) {
	$scope.triangleSides = {};

    $scope.calculateTriangleType = function(sideA, sideB, sideC) {
    	// since triangleSides is already on the scope, we could just access it directly, instead of passing the sides as parameters
	    // it's a matter of taste. I chose to pass each side to the function in order to make testing easier.
	    // but the outcommented code below shows how it could be used without params
      	
      	// if ($scope.triangleSides.sideA === $scope.triangleSides.sideB
      	//	&& $scope.triangleSides.sideB === $scope.triangleSides.sideC) {
      	//	$scope.triangleType = 'Equilateral';
      	// } else if ($scope.triangleSides.sideA === $scope.triangleSides.sideB 
      	//	       || $scope.triangleSides.sideA === $scope.triangleSides.sideC
      	//	       || $scope.triangleSides.sideB === $scope.triangleSides.sideC) {
      	//	$scope.triangleType = 'Isosceles';
      	// } else {
      	//	$scope.triangleType = 'Scalene';
      	// }

      	// Passing each side as a param makes it easier to test, and also easier to read in my opinion, and does not sacrifice performance
	    if (sideA === sideB
      		&& sideB === sideC) {

      		$scope.triangleType = 'Equilateral';
      	} else if (sideA === sideB 
      		       || sideA === sideC
      		       || sideB === sideC) {
      		$scope.triangleType = 'Isosceles';
      	} else {
      		$scope.triangleType = 'Scalene';
      	}
    };

    $scope.resetInput = function() {
        $scope.triangleSides = {};
        $scope.triangleType = '';
    };
}]);