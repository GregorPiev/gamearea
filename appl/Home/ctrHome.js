'use strict';
angular.module('gameAppl').controller('ctrHome', ['$scope', '$rootScope', 'DataServiceSQL', function ($scope, $rootScope, DataServiceSQL) {
        var home = 1;
        var type = "free";
        DataServiceSQL.read(1, function (data) {
            if (data.status == 200) {
                var result = data.data.data;
                $scope.homecontent = result.content;
            }
        });
        DataServiceSQL.readGamesList(home, type, function (data) {
            //console.info("%c Read Home Games Status:" + data.status, "color:orange");
            //console.info("%cReadHomeGames:" + JSON.stringify(data.data.data), "color:green");
            if (data.status == 200) {
                var result = data.data.data;
                $scope.popgames = result;
            }
        });
        DataServiceSQL.readWinners(function (data) {
            if (data.status == 200) {
                $scope.winners = data.data.data;
            }
        });
        $rootScope.$emit('changeMenu', 'home');


    }]);