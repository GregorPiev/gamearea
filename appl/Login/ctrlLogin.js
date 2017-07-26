'use strict';
gameAppl.controller('ctrlLogin', ['$scope', '$rootScope', '$location', 'DataServiceSQL', '$window', function ($scope, $rootScope, $location, DataServiceSQL, $window) {
        let result_send = false;
        $scope.resultMesagge = '';
        console.log("%cctrlogin ", "color:blue;");

        $scope.sendVal = function () {
            let username = (typeof $scope.username === 'undefined') ? 'gregp' : $scope.username;
            let password = (typeof $scope.password === 'undefined') ? 'Gp123456' : $scope.password;
            let loginvalues = {
                'username': username,
                'password': password
            };

            console.log("%cSend values to login:" + JSON.stringify(loginvalues), "color:lightgreen;");

            DataServiceSQL.login(loginvalues, function (result) {
                console.log("%cSend values result:" + JSON.stringify(result), "color:darkgreen;");
                if (result.statusText === 'OK') {
                    if (result.data.code === -999 || result.data.code === null) {
                        $scope.resultMesagge = "Error:" + result.data.msg;
                    } else {
                        $scope.resultMesagge = "Login successed";
                        $window.localStorage.setItem("logined", JSON.stringify(result.data.code));
                        $rootScope.$emit("login", result.data.code);
                    }
                } else {
                    $scope.resultMesagge = "Error:" + result.statusText;
                }
            });

        };

        $scope.resultMsgLogin = function () {
            return ($scope.resultMesagge === '') ? false : true;
        };
        $rootScope.$on("powerLogin", function (event, data) {
            console.log("%cpowerLogin On:" + data, "color:green;");
            $scope.sendVal();
        });

    }]);