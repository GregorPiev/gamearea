'use strict';
gameAppl.controller('ctrlLogin', ['$scope', '$rootScope', '$location', 'DataServiceSQL', '$window', function ($scope, $rootScope, $location, DataServiceSQL, $window) {
        let result_send = false;
        $scope.resultMesagge = '';


        $scope.sendVal = function () {
            let loginvalues = {
                'username': $scope.username,
                'password': $scope.password
            };

            DataServiceSQL.login(loginvalues, function (result) {
                if (result.statusText === 'OK') {
                    if (result.data.code === -999 || result.data.code === null) {
                        $scope.resultMesagge = "Error:" + result.data.msg;
                    } else {
                        $scope.resultMesagge = "Login successed";
                        $window.localStorage.setItem("logined", JSON.stringify(result.data.code));
                        angular.element("#btnLogin").trigger("click");
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
    }]);