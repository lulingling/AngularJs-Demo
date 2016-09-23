var app = angular.module("app", []);

app.directive("enter", function () {
    return function (scope, element, attrs) {
        console.log(element);

        element.bind("mouseenter", function () {
            element.addClass("alert alert-success")
        })
    }
})

app.directive("leave", function () {
    return function (scope, element, attrs) {
        element.bind('mouseleave', function () {
            element.removeClass("alert alert-success")
        })
    }
})

app.directive("hello", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div><input class='input' ng-model='txt'><div>{{txt}}</div></div>",
        link: function (scope, element) {
            scope.$watch('txt', function (newVal) {
                if (newVal === "error") {
                    element.addClass("alert alert-success")
                }
            })
        }
    }
})