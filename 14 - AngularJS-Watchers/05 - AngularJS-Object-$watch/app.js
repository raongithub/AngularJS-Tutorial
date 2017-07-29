var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.firstObject = {
        a: 10,
        b: 20,
        c: 30
    };

    // Solution 1
    $scope.$watch("firstObject", function ( newValue, oldValue ) {
        if ( newValue != oldValue ) {
            $scope.firstObject.c = $scope.firstObject.a * $scope.firstObject.b;
        }
    }, true);
}]);

app.controller("SecondController", ["$scope", function ($scope) {
    $scope.secondObject = {
        d: 40,
        e: 50,
        f: 60
    };

    // Solution 2
    $scope.$watchGroup(["secondObject.d", "secondObject.e"], function ( newValue, oldValue ) {
        if ( newValue != oldValue ) {
            $scope.secondObject.f = $scope.secondObject.d * $scope.secondObject.e;
        }
    });
}]);