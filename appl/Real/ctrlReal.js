'use strict';
angular.module('gameAppl').controller('ctrlReal', function ($scope, $rootScope, DataServiceSQL) {
    var home = 0;
    var type = "real";
    $rootScope.$emit('changeMenu', 'real');
    DataServiceSQL.read(7, function (data) {
        if (data.status == 200) {
            var result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

    DataServiceSQL.readGamesList(home, type, function (data) {
        //console.info("%c Read Home Games Status:" + data.status, "color:orange");
        //console.info("%cReadHomeGames:" + JSON.stringify(data.data.data), "color:green");
        if (data.status == 200) {
            var result = data.data.data;
            $scope.games = result;
        }
    });
});