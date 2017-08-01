var app = angular.module("app", []);

app.controller("FirstController", ["$scope", "$parse", function ($scope, $parse) {
    $scope.num1 = 10;
    $scope.num2 = 20;

    $scope.object = {
        name: "Krish",
        address: {
            country: "India"
        }
    };
    // Solution 8
    $scope.fifthFnParse = function () {
        // $digest process/cycle/loop is kicked in
        $parse("object.address.country").assign($scope, "USA");
    };
}]);