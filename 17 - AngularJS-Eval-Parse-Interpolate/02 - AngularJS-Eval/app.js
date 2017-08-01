var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.object = {
        name: "Krish",
        address: {
            country: "India"
        }
    };

    // Attempt 1
    $scope.fnAlert = function () {
        // $eval - use ($scope.$eval) to make $eval work + the expression should be provided in the form of a string ( "num1 * num2" ))

        // Solution 1
        var result = $scope.$eval( "num1 * num2" );
        alert("Result: " + result);

        // Solution 2
        // alert("Result: " + $scope.$eval( "num1 * num2" ));
    };

    // Attempt 2
    $scope.newNumAlert = function () {
        // Start with 3
        var newNumResult = $scope.$eval( "num1 * num2 * 3" );
        alert("New number result: " + newNumResult);
    };

    // Attempt 3
    $scope.addNewNum3 = function () {
        // Adding "num3" which is not declared and not in the scope
        // Local object "num3: 5"
        // Provide a new object after "num3" ie. num3, { num3: 5 }, and the object { num3: 5 } will get the preference
        var addNewNum3Result = $scope.$eval( "num1 * num2 * 3 * num3", {
            num3: 5
        });
        alert("New num3 result: " + addNewNum3Result);
    };

    // Attempt 4
        $scope.addNewNum2Value = function () {
            // Adding "num3" "num1"
            // // Local object "num3: 5", "num1: 2"
            var addNewNum2Result = $scope.$eval( "num1 * num2 * 3 * num3", {
                num3: 5,
                num1: 2
            });
            alert("New result: " + addNewNum2Result);
        };

    // Attempt 5
    $scope.objectAlert = function () {
        var objectResult = $scope.$eval( "object.name" ) + " " + $scope.$eval( "object.address.country" );
        alert("Object Details: " + objectResult);
    };

    // Attempt 6
    // Function evaluated and executed
    $scope.fnEval = function () {
        var result = $scope.$eval(function( scope, locals ) {
            return scope.num1 * scope.num2;
        });
        alert(result);
    };

    // Attempt 7
    // Function evaluated and executed
    $scope.fnObjectEval = function () {
        var result = $scope.$eval(function( scope, locals ) {
            return scope.num1 * scope.num2 * locals.num1 * locals.num3;
        }, { num1: 3, num3: 2 } );
        alert(result);
    };
}]);