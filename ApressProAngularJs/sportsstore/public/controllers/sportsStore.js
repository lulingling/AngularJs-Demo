angular.module("sportsStore")
    .controller("sportsStoreCtrl", function ($scope) {
        $scope.data = {
            products: [
                {
                    name: "Products #1",
                    description: "A product",
                    category: "Category #1",
                    price: 100
                },
                {
                    name: "Products #2",
                    description: "A product",
                    category: "Category #2",
                    price: 110
                },
                {
                    name: "Products #3",
                    description: "A product",
                    category: "Category #3",
                    price: 210
                },
                {
                    name: "Products #4",
                    description: "A product",
                    category: "Category #4",
                    price: 202
                }
            ]
        }
    });