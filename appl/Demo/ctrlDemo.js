'use strict';
gameAppl.controller('ctrlDemo', function ($scope, DataServiceSQL) {
    let home = 0;
    let type = "free";

    DataServiceSQL.read(3, function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

    DataServiceSQL.readGamesList(home, type, function (data) {
        //console.info("%c Read Home Games Status:" + data.status, "color:orange");
        //console.info("%cReadHomeGames:" + JSON.stringify(data.data.data), "color:green");
        if (data.status == 200) {
            let result = data.data.data;
            $scope.games = result;
        }
    });
});