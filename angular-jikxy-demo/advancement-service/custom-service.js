angular.module("app", [])
    .value("realname", "zhaoliu")
    .value("realname", "wangwu")
    .constant("http", "www.baidu.com")
    .constant("http", "www.bing.com")
    .factory("Data", function () {
        return {
            msg: "Are you fine?",
            setMsg: function () {
                this.msg = "I am not OK."
            }
        }
    })
    .service("User", function () {
        this.firstname = "Lu";
        this.lastname = "Lingling";
        this.getName = function () {
            return this.firstname + this.lastname;
        }
    })
    .controller("MyCtrl", function ($scope, realname, http, Data, User) {
        $scope.msg = "Hello";

        $scope.realname = realname;

        $scope.http = http;

        $scope.data = Data;
        Data.setMsg();

        $scope.uname = User.getName();
    });