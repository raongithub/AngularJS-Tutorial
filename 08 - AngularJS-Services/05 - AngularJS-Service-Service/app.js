// using service service
var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "FirstService", function ($scope, FirstService) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.doSum = function () {
        FirstService.getSum($scope.num1, $scope.num2, function (result) {
            $scope.sum = result;
        });
    };
}]);

app.service("FirstService", ["$http", "$log", function ($http, $log) {
    this.getSum = function (num1, num2, fnCallback) {
        var sum = parseInt(num1) + parseInt(num2);
        fnCallback(sum);
    };
}]);

