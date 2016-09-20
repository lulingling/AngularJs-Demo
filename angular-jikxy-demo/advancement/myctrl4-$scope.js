angular.module("app", [])
    .controller('MyCtrl', function ($scope) {
        $scope.msg = "";
        $scope.reverse = function () {
            return $scope.msg.split("").reverse().join("");
        }
    })
    .controller("NextCtrl", function ($scope) {

        $scope.errormsg = "";
        $scope.user = {uname: "", pwd: ""};

        $scope.login = function () {
            if ($scope.user.uname == "admin" && $scope.user.pwd == "123") {
                alert('登录成功');
            } else {
                $scope.errormsg = "用户名或者密码错误";
            }
        };
    })