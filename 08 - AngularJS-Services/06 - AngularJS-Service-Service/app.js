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
    $log.log("Instantiating FirstService");

    this.getSum = function (num1, num2, fnCallback) {
        $http({
            method: "GET",
            url: "http://localhost:4467/Sum?num1=" + num1 + "&num2=" + num2
        }) 
        .then (function (res) {
            // success function
            $log.log(res.data);
            fnCallback(res.data);            
        },
        function (res) {
            // failure function
            $log.error("ERROR occurred");
        });
    };
}]);