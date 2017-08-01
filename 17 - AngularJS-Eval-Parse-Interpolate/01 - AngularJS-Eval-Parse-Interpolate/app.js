var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.fnAlert = function () {
        alert("Result: " + ( $scope.num1 * $scope.num2 ));
    };
}]);