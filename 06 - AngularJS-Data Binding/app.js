var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.doCalculateAndSum = function () {
        $scope.num1 = $scope.num1 * 2;
        $scope.num2 = $scope.num2 * 2;
        $scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
    };
}]);

app.controller("SecondController", ["$scope", function ($scope) {
    $scope.num1 = 30;
    $scope.num2 = 40;

    $scope.doSum = function () {
        $scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
    };
}]);