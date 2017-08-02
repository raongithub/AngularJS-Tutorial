var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "$parse", "$interpolate", function ($scope, $parse, $interpolate) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.object = {
        name: "Krish",
        address: {
            country: "India"
        }
    };

    $scope.fnParse = function () {
        // $digest process/cycle/loop is kicked in
        $parse("object.address.country").assign($scope, "USA");
    };

    // Solution 1
    $scope.FirstFnInterpolate = function () {
        // Returns a function
        var result = $interpolate("Result = {{ num1 * num2 }}, Some other Result: {{ num1 * num2 * 10 }}");
        var resultInterpolate = result($scope);
        alert(resultInterpolate);
    };

    // Solution 2
    $scope.SecondFnInterpolate = function () {
        alert($interpolate("Result = {{ num1 * num2 }}")($scope));
    };

    // Solution 3
    // Using filter in $interpolate
    // Evaluation using filter is not available in $eval and $parse 
    $scope.ThirdFnInterpolate = function () {
        alert($interpolate("Result = {{ num1 * num2 | currency: 'USD$' }}")($scope));
    };
}]);