// simple directive
var app = angular.module("app", []);

app.controller("FirstController", function () {

});

app.directive("firstDirective", function () {
    return {
        template: "<strong>This is a message</strong>"
    };
});