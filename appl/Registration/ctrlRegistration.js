'use strict';
angular.module('gameAppl').controller('ctrlRegistration', function ($scope, DataServiceSQL) {
    DataServiceSQL.read(4, function (data) {
        if (data.status == 200) {
            var result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

});