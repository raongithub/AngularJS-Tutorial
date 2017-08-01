var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "$parse", function ($scope, $parse) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.object = {
        name: "Krish",
        address: {
            country: "India"
        }
    };
    // Solution 8
    $scope.fnEval = function () {
        // Modify scope while evaluating
        var r = $scope.$eval(function ( scope, locals ){
        	scope.num3 = locals.i;
        	return scope.num1 * scope.num2;
        }, { i: 2} );
        alert("Result: " + r * $scope.num3);
    };
}]);