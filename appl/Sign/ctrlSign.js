'use strict';
gameAppl.controller('ctrlSign', ['$scope', '$rootScope', 'DataServiceSQL', '$window', function ($scope, $rootScope, DataServiceSQL, $window) {
        $scope.resMsg = '';

        $scope.sendVal = function () {
            let client = {fname: '', address: '', city: '', email: '', username: '', password: '', phone: ''};
            let user = {fname: '', address: '', city: '', email: '', username: '', phone: ''};
            client.fname = $scope.client.fname;
            client.city = $scope.client.city;
            client.email = $scope.client.email;
            client.address = $scope.client.address;
            client.username = $scope.client.username;
            client.password = $scope.client.password;
            client.phone = $scope.client.phone;
            user.fname = $scope.client.fname;
            user.city = $scope.client.city;
            user.email = $scope.client.email;
            user.address = $scope.client.address;
            user.username = $scope.client.username;
            user.phone = $scope.client.phone;

            console.log(JSON.stringify(client));

            DataServiceSQL.addNewUser(client, function (result) {
                console.log("%cArrived result:" + JSON.stringify(result), "color: green;");
                if (result.statusText === 'OK') {
                    if (result.data.code === -999 || result.data.code === null) {
                        $scope.resMsg = "Error:" + result.data.msg;
                    } else {
                        $scope.resMsg = "Success";
                        $window.localStorage.setItem("logined", JSON.stringify(user));
                        angular.element("#btnSign").trigger("click");
                        $rootScope.$emit("login", client);
                    }
                } else {
                    $scope.resMsg = "Error:" + result;
                }
            });

        };

        $scope.resultMsg = function () {
            return ($scope.resMsg === '') ? false : true;
        };

    }]);