var app = angular.module("app", []);

/**
 * 自定义可重用的元素Element
 */
app.directive('hello', function () {
    return {
        restrict: "E",//Element
        replace: true,//替换掉自定义的directive名称
        template: "<div>Hello AngualrJs</div>"
    }
});

/**
 *自定义属性Attribute
 */
app.directive('hi', function () {
    return {
        restrict: "A",//Attribute
        link: function () {
            alert("I am attribute");
        }
    }
});

/**
 * 自定义类Class
 */
app.directive('kind', function () {
    return {
        restrict: "C",//Class
        link: function () {
            alert("I am a class.");
        }
    }
});