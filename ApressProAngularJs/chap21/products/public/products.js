angular.module("exampleApp", ["increment", "ngResource"])
    .constant("baseUrl", "http://localhost:5500/products/")
    .controller("defaultCtrl", function ($scope, $http, $resource, baseUrl) {

        $scope.displayMode = "list";
        $scope.currentProduct = null;

        $scope.productsResource = $resource(baseUrl + ":id", {id: "@id"});

        $scope.listProducts = function () {
            /*$http.get(baseUrl).success(function (data) {
             $scope.products = data;
             });*/

            $scope.products = $scope.productsResource.query();
        };

        $scope.deleteProduct = function (product) {
            /*var rep = {
             method: "DELETE",
             url: baseUrl + product.id
             };
             $http(rep).success(function () {
             $scope.products.splice($scope.products.indexOf(product), 1);
             });*/

            product.$delete().then(function () {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });
            $scope.displayMode = "list";
        };

        $scope.createProduct = function (product) {
            /*$http.post(baseUrl, product).success(function (newProduct) {
             $scope.products.push(newProduct);
             $scope.displayMode = "list";
             });*/

            new $scope.productsResource(product).$save().then(function (newProduct) {
                $scope.products.push(newProduct);
                $scope.displayMode = "list";
            })
        };

        $scope.updateProduct = function (product) {
            /*var rep = {
             url: baseUrl + product.id,
             method: "PUT",
             data: product
             };

             $http(rep).success(function (modifiedProduct) {
             for (var i = 0; i < $scope.products.length; i++) {
             if ($scope.products[i].id == modifiedProduct.id) {
             $scope.products[i] = product;
             break;
             }
             }
             $scope.displayMode = "list";
             });*/

            product.$save();
            $scope.displayMode = "list";
        };

        $scope.editOrCreateProduct = function (product) {
            /*$scope.currentProduct =
             product ? angular.copy(product) : {};
             $scope.displayMode = "edit";*/

            $scope.currentProduct = product ? product : {};
            $scope.displayMode = "edit";
        };

        $scope.saveEdit = function (product) {
            /*if (angular.isDefined(product.id)) {
             $scope.updateProduct(product);
             } else {
             $scope.createProduct(product);
             }*/

            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
        };

        $scope.cancelEdit = function () {
            /*$scope.currentProduct = {};
             $scope.displayMode = "list";*/

            if ($scope.currentProduct && $scope.currentProduct.$get) {
                $scope.currentProduct.$get();
            }
            $scope.currentProduct = {};
            $scope.displayMode = "list";
        };

        $scope.listProducts();
    });
