var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {

}]);

app.directive("messageDirective", function ($interpolate) {
    return {

        compile: function (templateElement, templateAttribute) {
            console.log(templateAttribute.text + " - In Compile.");
            templateElement.css(
                {
                    "border": "1px solid grey", 
                    "background-color": "yellow", 
                    "font-size": "300%"
                }
            );

            return {
                pre: function ($scope, instanceElement, instanceAttribute) {
                    console.log(instanceAttribute.text + " - In Pre-Link..");
                },
                post: function ($scope, instanceElement, instanceAttribute) {
                    console.log(instanceAttribute.text + " - In Post-Link....");
                    if (instanceAttribute.text === "3") {
                        instanceElement.css(
                            {
                                "border": "1px solid blue",
                                "background-color": "red"
                            }
                        );
                    }
                    instanceElement.on("click", $scope.btnClick);
                }
            };
        },

        controller: function ($scope, $element, $attrs) {
            var interpolate = $interpolate($attrs.text)($scope);
            //console.log($attrs.text + " - In Controller");
            console.log(interpolate + " - In Controller......");

            $scope.btnClick = function () {
                alert(interpolate);
            };
        }

    };
});