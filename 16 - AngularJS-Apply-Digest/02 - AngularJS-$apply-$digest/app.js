var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function($scope) {
    $scope.dataObject = [
        { v: 10, r: 0 },
        { v: 20, r: 0 },
        { v: 30, r: 0 },
        { v: 40, r: 0 },
    ];
}]);

app.directive("firstDirective", function () {
    return {
        templateUrl: "directive.html",

        compile: function ( templateElement, templateAttribute ) {
            return (function ( scope, instanceElement, instanceAttribute, controller ) {
                instanceElement.find("#btnSum").on("click", scope.btnClick);
            });
        },

        controller: function ($scope, $element, $attrs) {
            $scope.btnClick = function () {
                $scope.do.r = $scope.do.v * $scope.do.v;
                $scope.$digest();
                // when $apply is used it kicks from the $rootScope
                // $scope.$apply();
            };
        }
    };
});
