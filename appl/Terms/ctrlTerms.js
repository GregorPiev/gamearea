'use strict';
gameAppl.controller('ctrlTerms', function ($scope, $rootScope, DataServiceSQL) {
    $rootScope.$emit("changeMenu", 'terms');
    DataServiceSQL.read(5, function (data) {
        //console.log("%cArrived result:" + JSON.stringify(data, null), "color: green;");
        if (data.status == 200) {
            let result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });
});