var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "$http", "$log", function ($scope, $http, $log) {
    $scope.num1 = 50;
    $scope.num2 = 50;

    $scope.doSum = function () {
        $http({
            method: "GET",
            url: "http://localhost:4467/Sum?num1=" + $scope.num1 + "&num2=" + $scope.num2
        })
        .then (function (resp) {
            $log.log(resp.data);
            $scope.sum = resp.data;
        },
        function (resp) {
            $log.error("ERROR!!!");
        });
    };
}]);