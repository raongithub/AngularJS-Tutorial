var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.c = 30;

    $scope.updateC = function () {
        $scope.c = $scope.a * 4;
    };

    // <!-- watcher 4 -->
    $scope.$watch("c", function (newValue, oldValue) {
        if ( newValue != oldValue ) {
            console.log("Updated c to " + newValue);
        }
    });
}]);