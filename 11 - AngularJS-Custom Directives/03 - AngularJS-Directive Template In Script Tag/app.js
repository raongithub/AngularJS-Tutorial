// directive template in a separate <script> tag
var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.message = "This is a message";
}]);

app.directive("firstDirective", function () {
    return {
        templateUrl: "first-directive.html"
    };
});