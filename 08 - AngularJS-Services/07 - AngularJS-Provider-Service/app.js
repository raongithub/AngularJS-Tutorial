// using provider service
var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "FirstService", function ($scope, FirstService) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.doSum = function () {
        $scope.sum = FirstService.getSum($scope.num1, $scope.num2);
    };
}]);

app.provider("FirstService", function () {
    this.$get = ["$log", function ($log) {
        $log.log("Instantiating FirstService...");
        var providerObject = {};
        providerObject.getSum = function (num1, num2) {
            return parseInt(num1) + parseInt(num2);
        };
        return providerObject;
    }];
});

app.config(["FirstServiceProvider", function (FirstServiceProvider) {

}]);