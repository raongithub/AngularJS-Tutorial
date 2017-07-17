// directive template in a separate file
var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.message = "This is message";
}]);

app.directive("firstDirective", function () {
    return {
        templateUrl: "first-directive.html"
    };
});