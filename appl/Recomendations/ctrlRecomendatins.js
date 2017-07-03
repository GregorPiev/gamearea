'use strict';
gameAppl.controller('ctrlRecomendatins', function ($scope, DataServiceSQL, $window) {

    DataServiceSQL.read(6, function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

    DataServiceSQL.readRecomendations(function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            console.log("%cResult: " + JSON.stringify(result), "color: green");
            $window.localStorage.setItem("notes", JSON.stringify(result));
        }


    });


});