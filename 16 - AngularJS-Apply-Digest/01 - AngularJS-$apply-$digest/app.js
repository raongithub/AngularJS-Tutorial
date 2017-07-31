var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function($scope) {
    $scope.num1 = 10;
    $scope.num2 = 20;
    $scope.sum = 0;

    $scope.getSum = function () {
        $scope.sum = Number($scope.num1) + Number($scope.num2);
    };
}]);

var getTheSum = function () {
    var $scope = angular.element($("#container")).scope();
    // Solution 1
    $scope.$apply(function () {
        $scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
    });

    // Solution 2
    // $scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
    // $scope.$apply();
};