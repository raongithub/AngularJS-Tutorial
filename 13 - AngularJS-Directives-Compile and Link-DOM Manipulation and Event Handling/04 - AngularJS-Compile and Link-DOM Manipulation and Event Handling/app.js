var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {

}]);

app.directive("messageDirective", function ($interpolate) {
    // post-link function
    return function ($scope, instanceElement, instanceAttribute) {
        console.log(instanceAttribute.text + " - In Post-Link....");
        if (instanceAttribute.text === "3") {
            instanceElement.css(
                {
                    "border": "1px solid blue",
                    "background-color": "red",
                    "font-size": "300%"
                }
            );
        } else if (instanceAttribute.text) {
            instanceElement.css(
                {
                    "border": "1px solid blue",
                    "background-color": "yellow",
                    "font-size": "300%"
                }
            );
        }
    };
});