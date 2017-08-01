var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function($scope) {
    $scope.dataObject = [
        { v: 10, r: 0 },
        { v: 20, r: 0 },
        { v: 30, r: 0 },
        { v: 40, r: 0 },
    ];

    $scope.getTotal = function () {
        var sum = 0;
        for ( i = $scope.dataObject.length - 1; i >= 0; i-- ) {
            var dO = $scope.dataObject[i];
            sum += dO.r;
        }
        return sum;
    };
}]);

app.directive("firstDirective", function () {
    return {
        templateUrl: "directive.html",

        compile: function ( templateElement, templateAttribute ) {
            return(function (scope, instanceElement, instanceAttribute, controller ) {
                instanceElement.find("#btnSum").on("click", scope.btnClick);
            });
        },

        controller: function ($scope, $element, $attrs) {
            $scope.btnClick = function () {
                $scope.dO.r = $scope.dO.v * $scope.dO.v;
                // when $apply is used it kicks from the $rootScope
                $scope.$apply();
                // $scope.$digest();
            };
        }
    };
});
