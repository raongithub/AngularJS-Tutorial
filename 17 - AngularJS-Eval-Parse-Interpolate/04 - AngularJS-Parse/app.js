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

    // Solution 1
    $scope.firstFnParse = function () {
         // Returns a function
         alert("Result = " + $parse("num1 * num2")($scope));
    };

    // Solution 2
    $scope.secondFnParse = function () {
         // Returns a function
         var fn = $parse("num1 * num2");
         var result = fn($scope);
         alert("Result = " + result);
    };

    // Solution 3
    $scope.thirdFnParse = function () {
        alert("Result = " + $parse("num1 * num2") ({
            num1: 2,
            num2: 3
        }));
    };

    // Solution 4
    // $parse function re-use so two different results
    $scope.fourthFnParse = function () {
        var fourthFnVarParse = $parse("num1 * num2");
        var firstResult = fourthFnVarParse($scope);
        alert("Result = " + firstResult);

        var secondResult = fourthFnVarParse ({
            num1: 2,
            num2: 3
        });
        alert("Result = " + secondResult);
    };

    // Solution 5
    // Will alert (No click button)
    var fourthFnVarParse = $parse("num1 * num2");
    var firstResult = fourthFnVarParse($scope);
    alert("Result = " + firstResult);

    var secondResult = fourthFnVarParse ({
        num1: 2,
        num2: 3
    });
    alert("Result = " + secondResult);

    // Solution 6
    // Will alert (No click button)
    alert($parse("object.name")($scope));

    // Solution 7
    // assign function
    // Will alert (No click button)
    alert($parse("object.address.country")($scope));
    $parse("object.address.country").assign($scope, "USA");
    alert($parse("object.address.country")($scope));
}]);
