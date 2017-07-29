var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.c = 30;

    // <!-- watcher 4 -->
    $scope.$watch("a", function ( newValue, oldValue ) {
        if ( newValue != oldValue ) {
            $scope.b = $scope.a * 2;
        }
    });

    // <!-- watcher 5 -->
    $scope.$watch("b", function ( newValue, oldValue ) {
        if ( newValue != oldValue ) {
            $scope.c = $scope.b * 2;
        }
    });

    // <!-- watcher 6 -->
    $scope.$watch("c", function ( newValue, oldValue ) {
        if ( newValue !=  oldValue ) {
            console.log("Updated c to " + newValue);
        }
    });
}]);