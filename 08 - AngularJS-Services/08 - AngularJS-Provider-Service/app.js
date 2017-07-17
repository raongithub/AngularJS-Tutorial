// using provider service
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

app.provider("FirstService", function () {
    this.$get = ["$log", function ($log) {
        $log.log("Instantiating FirstService...");
        var providerObject = {};
        providerObject.getSum = function (num1, num2, fnCallback) {
            var sum = parseInt(num1) + parseInt(num2);
            fnCallback(sum);
        };
        return providerObject;
    }];
});

app.config(["FirstServiceProvider", function (FirstServiceProvider) {

}]);