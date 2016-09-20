var app = angular.module("app", []);

/**
 * Controller and Directive Attribute
 */
app.controller("AppCtrl", function ($scope) {
    $scope.loadMoreData = function () {
        alert("Loading......");
    };

    $scope.delData = function () {
        alert("Deleting Data...");
    }
});

app.directive("enter", function () {

    /*return {
     restrict: "A",
     link: function (scope, element, attrs) {
     element.bind("mouseover", function () {
     // scope.loadMoreData()
     // scope.$apply("loadMoreData()")
     scope.$apply(attrs.enter);
     })
     }
     }*/
    /*等价与以下代码：*/

    return function (scope, element, attrs) {
        element.bind("mouseover", function () {
            // scope.loadMoreData()
            // scope.$apply("loadMoreData()")
            scope.$apply(attrs.enter);
        })
    }

});

/**
 * Controller and Directive Element
 */
app.directive("food", function () {
    return {
        restrict: "E",
        scope: [],
        controller: function ($scope) {
            $scope.foods = [];
            this.addApple = function () {
                $scope.foods.push("apple")
            };

            this.addOrange = function () {
                $scope.foods.push("orange");
            };

            this.addBanana = function () {
                $scope.foods.push("banana");
            }
        },
        link: function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                console.log(scope.foods);
            })
        }
    }
});

app.directive("apple", function () {
    return {
        require: "food",
        link: function (scope, element, attrs, foodCtrl) {
            foodCtrl.addApple();
        }
    }
});

app.directive("orange", function () {
    return {
        require: "food",
        link: function (scope, element, attrs, foodCtrl) {
            foodCtrl.addOrange();
        }
    }
});

app.directive("banana", function () {
    return {
        require: "food",
        link: function (scope, element, attrs, foodCtrl) {
            foodCtrl.addBanana();
        }
    }
});