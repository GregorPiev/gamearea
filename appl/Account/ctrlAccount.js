'use strict';
angular.module('gameAppl').controller('ctrlAccount', function ($scope, $rootScope, DataServiceSQL, $window) {
    $rootScope.$emit('changeMenu', 'account');
    var userObj = JSON.parse($window.localStorage.getItem("logined"));
    $scope.name = userObj.fname;
    $scope.email = userObj.email;
    $scope.phone = userObj.phone;
    $scope.address = userObj.address;
    $scope.city = userObj.city;
    var id_user = userObj.id_user;

    DataServiceSQL.read(8, function (data) {
        if (data.status == 200) {
            var result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

    DataServiceSQL.getUserGames(id_user, function (data) {
        if (data.status == 200) {
            var result = data.data.data;
            console.log("%c Games:" + JSON.stringify(result), "color: green;");
            $('#userGames').dataTable({

                "sDom": 'T<"clear">lfrtip',
                "oTableTools": {
                    "sSwfPath": "lib/tabletools/swf/copy_csv_xls_pdf.swf",
                    "aButtons": [
                        {
                            "sExtends": "pdf",
                            "sButtonText": "Save as PDF"
                        },
                        {
                            "sExtends": "xls",
                            "sButtonText": "Save for Excel"
                        }
                    ]
                },
                "bDestroy": true,
                "bLengthChange": true,
                "bAutoWidth": false,
                "aaData": result,
                "aaSorting": [[1, "desc"]],
                "aoColumns": [
                    {"mData": "id_game", "sTitle": "Game Id"},
                    {"mData": "name", "sTitle": "Game name", "sClass": "columnX center"},
                    {"mData": "shorts", "sTitle": "Short Description", "sClass": "columnX center"},
                    {"mData": "result", "sTitle": "Result", "sClass": "columnX center"},
                    {"mData": "type", "sTitle": "Game Type", "sClass": "columnX center"},
                    {"mData": "img", "sTitle": "Image", "sClass": "columnX center",
                        "mRender": function (data, type, row) {
                            //console.log("%cFullname:" + JSON.stringify(row), "color:green;");
                            return "<img src='upload/" + row.img + "' alt='' title=''>";
                        }
                    },
                ]
            });
        }
    });





});
