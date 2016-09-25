angular.module("app", [])
    .controller("UserCtrl", function ($scope) {
        $scope.user = {
            isShowImg: true,
            showicon: true,
            icon: "avatar.jpg",
            uname: '',
            pwd: '',
            zw: '2',
            sex: '0',
            aihao: [1, 3] //1:足球， 2：篮球，3:排球
        };

        $scope.isChecked = function (n) {
            var isok = false;

            for (var i = 0; i < $scope.user.aihao.length; i++) {
                if (n == $scope.user.aihao[i]) {
                    isok = true;
                    break;
                }
            }
            return isok;
        };

        $scope.register = function (u) {
            console.log(u);
        }

    });