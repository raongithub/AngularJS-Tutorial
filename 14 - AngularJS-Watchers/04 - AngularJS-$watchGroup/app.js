var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.c = 30;

    $scope.$watchGroup(["a", "b"], function ( newValue, oldValue ) {
        if ( newValue != oldValue ) {
            $scope.c = $scope.a * $scope.b;
        }
    });
}]);