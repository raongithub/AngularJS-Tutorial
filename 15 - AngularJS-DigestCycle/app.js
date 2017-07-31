var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "$rootScope", "$log", function ($scope, $rootScope, $log) {
    $scope.num1 = 10;
    $scope.num2 = 20;
    $scope.num3 = 30;

    $scope.$watch("num1", function ( newValue, oldValue ) {
        if ( newValue != oldValue ) {
            $log.log(" num1 modified to " + newValue);
        }
    });

    $scope.$watch("num2", function ( newValue, oldValue ) {
        if ( newValue != oldValue ) {
            $log.log(" num2 modified to " + newValue);
        }
    });

    $scope.$watch("num3", function ( newValue, oldValue ) {
        if ( newValue != oldValue ) {
            $log.log(" num3 modified to " + newValue);
            if ( $scope.num3 > 50 ) {
                $scope.num1 = 1000;
            }
        }
    });

    $rootScope.$watch(function () {
        $log.log("--digest iteration started--");
    });
}]);