// directives support bindings to scope directly
var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.message = "This is a message";
}]);

app.directive("firstDirective", function () {
    return {
        template: "<strong>{{ message }}</strong>"
    };
});