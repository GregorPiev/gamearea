'use strict'
gameAppl.controller('ctrlTopmenu', function ($scope, $window, $rootScope) {
    let user_login = null;


    $rootScope.$on("login", function (event, data) {
        console.log("%cLogin", "color:green");
        user_login = JSON.parse($window.localStorage.getItem("logined"));
        angular.element("#anonim").hide();
        $("#logined").show();
        $("#user_values").html(data.fname);
    });

    $(document).ready(function () {
        console.log("%cctrTopmenu Document ready", "color:blue;");
        user_login = JSON.parse($window.localStorage.getItem("logined"));
        if (user_login === null) {
            angular.element("#anonim").show();
            angular.element("#logined").hide();
            $("#user_values").html('');
            $rootScope.$emit("powerLogin", "Default User");
        } else {
            angular.element("#anonim").hide();
            $("#logined").show();
            $("#user_values").html(user_login.fname);
        }
    });

    $scope.logout = function () {
        angular.element("#anonim").show();
        angular.element("#logined").hide();
        $("#user_values").html('');
        $window.localStorage.removeItem("logined");
        user_login = null;
    };

    $scope.getStatusUser = function () {
        return (user_login === null) ? false : true;
    };


});