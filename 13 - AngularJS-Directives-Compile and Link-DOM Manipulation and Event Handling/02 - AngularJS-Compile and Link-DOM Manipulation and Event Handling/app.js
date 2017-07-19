var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {

}]);

app.directive("messageDirective", function ($interpolate) {
    return {
        
        link: {
            pre: function ($scope, instanceElement, instanceAttribute) {
                console.log(instanceAttribute.text + " - In Pre-Link..");
            },
            post: function ($scope, instanceElement, instanceAttribute) {
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
                            "border": "1px solid grey", 
                            "background-color": "yellow", 
                            "font-size": "300%"
                        }
                    );
                }
                instanceElement.on("click", $scope.btnClick);
            }
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