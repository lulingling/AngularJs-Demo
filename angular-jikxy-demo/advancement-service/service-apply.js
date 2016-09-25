angular.module("app", [])
    .factory("Data", function () {
        return {
            msg: "我是来自factory"
        }
    })
    .controller("FirstCtrl", function ($scope, Data) {
        $scope.data = Data;
    })
    .controller("SecondCtrl", function ($scope, Data) {
        $scope.data = Data;
    });