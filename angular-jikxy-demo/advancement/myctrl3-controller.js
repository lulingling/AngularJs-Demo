angular.module('app', [])
    .controller('FirstCtrl', function ($scope) {
        $scope.msg = "Hello Angular";
    })
    .controller("NextCtrl", function ($scope) {
        $scope.msg = "Hello LLL"
    })
