'use strict';
angular.module('gameAppl').controller('ctrlRecomendatins', function ($scope, $rootScope, DataServiceSQL, $window) {
    $rootScope.$emit("changeMenu", 'recomendations');

    DataServiceSQL.read(6, function (data) {
        if (data.status == 200) {
            var result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

    DataServiceSQL.readRecomendations(function (data) {
        if (data.status == 200) {
            var result = data.data.data;
            $window.localStorage.setItem("notes", JSON.stringify(result));
        }


    });


});