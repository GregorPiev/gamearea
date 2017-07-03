'use strict';
gameAppl.controller('ctrlContact', function ($scope, DataServiceSQL) {
    DataServiceSQL.read(2, function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });
});
