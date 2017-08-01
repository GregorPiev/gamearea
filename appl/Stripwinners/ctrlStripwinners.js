'use strict';
angular.module('gameAppl').controller('ctrlStripwinners', function ($scope, DataServiceSQL) {
    DataServiceSQL.readNews(function (data) {
        if (data.status == 200) {
            //console.info("%cNews:" + JSON.stringify(data.data.data), "color:green");
            $scope.news = data.data.data;
        }
    });
});