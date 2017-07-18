var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {

}]);

app.directive("messageDirective", function () {
    return {

        compile: function (templateElement, templateAttribute) {
            console.log(templateAttribute.text + " - In Compile");

            return {
                pre: function ($scope, instanceElement, instanceAttribute) {
                    console.log(instanceAttribute.text + " - In Pre-Link");
                },
                post: function ($scope, instanceElement, instanceAttribute) {
                    console.log(instanceAttribute.text + " - In Post-Link");
                }
            };
        },

        controller: function ($scope, $element, $attrs) {
            console.log($attrs.text + " - In Controller");
        }

    };
});