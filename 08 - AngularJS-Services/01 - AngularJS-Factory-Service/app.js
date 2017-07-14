// using factory service
var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "FirstFactory", function ($scope, FirstFactory) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.doSum = function () {
        $scope.sum = FirstFactory.getSum($scope.num1, $scope.num2);
    };
}]);

app.factory("FirstFactory", ["$http", "$log", function ($http, $log) {
    $log.log("Instantiating factory...");

    var factoryObject = {};
    factoryObject.getSum = function (num1, num2) {
        return parseInt(num1) + parseInt(num2);
    };
    return factoryObject;
}]);