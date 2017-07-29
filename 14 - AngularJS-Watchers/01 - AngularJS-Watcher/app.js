var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.c = 30;
}]);