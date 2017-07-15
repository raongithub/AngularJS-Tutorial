// using factory service
var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "FirstFactory", function ($scope, FirstFactory) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.doSum = function () {
        FirstFactory.getSum($scope.num1, $scope.num2, function (result) {
            $scope.sum = result;
        });
    };
}]);

app.factory("FirstFactory", ["$http", "$log", function ($http, $log) {
    $log.log("Instantiating factory");
    var factoryObject = {};
    factoryObject.getSum = function (num1, num2, fnCallback) {
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
            $log.error("ERROR occurred!");
        });
    };
    return factoryObject;
}]);