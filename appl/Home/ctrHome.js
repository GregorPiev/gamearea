'use strict';
gameAppl.controller('ctrHome', ['$scope', 'DataServiceSQL', function ($scope, DataServiceSQL) {
        let home = 1;
        let type = "free";
        DataServiceSQL.read(1, function (data) {
            if (data.status == 200) {
                let result = data.data.data;
                $scope.homecontent = result.content;
            }
        });
        DataServiceSQL.readGamesList(home, type, function (data) {
            //console.info("%c Read Home Games Status:" + data.status, "color:orange");
            //console.info("%cReadHomeGames:" + JSON.stringify(data.data.data), "color:green");
            if (data.status == 200) {
                let result = data.data.data;
                $scope.popgames = result;
            }
        });
        DataServiceSQL.readWinners(function (data) {
            if (data.status == 200) {
                $scope.winners = data.data.data;
            }
        });

    }]);