'use strict';
let gameAppl = angular.module('gameAppl', ['ngRoute', 'ui.router', 'ngSanitize', 'ngFileUpload']);
'use strict';
gameAppl.config(function ($stateProvider, $urlRouterProvider) {
    //$localStorageProvider.set("counter", 1);
    $urlRouterProvider.otherwise('/');
    console.log("Config start");
    $stateProvider
            .state('Home', {
                url: '/',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrHome',
                        templateUrl: 'appl/Home/home.html'
                    }
                }
            })
            .state('Terms', {
                url: '/terms',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlTerms',
                        templateUrl: 'appl/Terms/terms.html'
                    }
                }
            })
            .state('ContactUs', {
                url: '/contactus',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlContact',
                        templateUrl: 'appl/Contact/contact.html'
                    }
                }
            })
            .state('Registration', {
                url: '/registration',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlRegistration',
                        templateUrl: 'appl/Registration/registration.html'
                    }
                }
            })
            .state('Account', {
                url: '/account',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlAccount',
                        templateUrl: 'appl/Account/account.html'
                    }
                }
            })
            .state('Recommendations', {
                url: '/recommendations',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlRecomendatins',
                        templateUrl: 'appl/Recomendations/recomendations.html'
                    }
                }
            })
            .state('Demo', {
                url: '/demo',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlDemo',
                        templateUrl: 'appl/Demo/demo.html'
                    }
                }
            })
            .state('Real', {
                url: '/real',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlReal',
                        templateUrl: 'appl/Real/real.html'
                    }
                }
            });
});

gameAppl.run([function () {
        var config = {
            apiKey: "AIzaSyCuZsJyDThwilTM-6V-bEVla8Iuo3uo2O8",
            authDomain: "gamearea-e98ec.firebaseapp.com",
            databaseURL: "https://gamearea-e98ec.firebaseio.com",
            projectId: "gamearea-e98ec",
            storageBucket: "gamearea-e98ec.appspot.com",
            messagingSenderId: "837142383254"
        };
        firebase.initializeApp(config);
    }]);


'use strict';
gameAppl.service('DataService', function ($http) {
    this.read = function (url, callback) {
        $http({
            method: "POST",
            url: "../gamearea/data/" + url + ".json",
            headers: {'Content-type': 'application/json'}
        }).then(
                function success(response) {
                    //console.table(response);
                    callback(response);
                },
                function error(err) {
                    console.error(err);
                });
    }

});

gameAppl.service('frService', function ($http) {
    this.read = function (url, callback) {
        $http({
            method: "GET",
            url: "https://gamearea-e98ec.firebaseio.com/" + url + ".json",
            headers: {'Content-type': 'application/json'}
        }).then(
                function success(response) {
                    //console.table(response);
                    callback(response);
                },
                function error(err) {
                    console.error(err);
                });
    }

    this.addUser = function (data, callback) {
        $http({
            method: "POST",
            url: "https://gamearea-e98ec.firebaseio.com/users.json",
            data: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(
                function success(res) {
                    console.log("%cSuccess", "color:blue");
                    console.log(res);
                    callback(res);
                },
                function error(err) {
                    console.log("%cError", "color:#900");
                    console.error(err);
                    callback(err);
                }

        );

    };

    this.login = function login(user, pass, callback) {
        $http({
            Method: 'GET',
            url: 'https://gamearea-e98ec.firebaseio.com/users.json?orderBy="username"&equelTo="' + user + '"',
            headers: {'Content-type': 'application/json'}
        })
                .then(
                        function success(res) {
                            console.log("%cSuccess", "color:blue");
                            console.log(res);
                            callback(res);
                        },
                        function (error) {
                            console.log("%cError", "color:#900");
                            console.error(error);
                            callback(error);
                        }
                );

    }

});

gameAppl.service('DataServiceSQL', function ($http) {
    /**
     *
     * @param {type} idpage
     * @param {type} callback
     * @returns {object} responce
     */
    this.read = function (idpage, callback) {
        let postdata = {
            op: 'page',
            data: {
                idpage: idpage,
                table: "tbcontent"
            }
        };
        $http({
            method: "POST",
            url: "../gamearea/php/api.php",
            data: JSON.stringify(postdata),
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(
                function success(response) {
                    // console.error("%cSuccess Read Page:" + JSON.stringify(response), "color:blue;");
                    callback(response);
                },
                function error(err) {
                    //console.error("%cError Read Page:" + JSON.stringify(resp), "color:#f00;");
                    callback(resp);
                });
    }

    /**
     *
     * @param {type} callback
     * @returns {object} responce
     */
    this.readGamesList = function (home, type, callback) {
        let postdata = {
            op: 'game',
            data: {
                type: type,
                home: home
            }
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: {'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'POST, GET, OPTION, PUT, DELETE', 'Access-Control-Allow-Origin': '*'}
        })
                .then(function success(resp) {
                    //console.log("%cSuccess Read Games Lists:" + JSON.stringify(resp), "color:blue");
                    callback(resp);
                }, function error(error) {
                    //console.log("%cError Read Games Lists:" + JSON.stringify(error), "color:#f00");
                    callback(error);
                });
    };
    /**
     *
     * @param {type} callback
     * @returns {object} responce
     */
    this.readWinners = function (callback) {
        let postdata = {
            op: 'winners'
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: {'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, OPTION, PUT, DELTE', 'Access-Control-Allow-Origin': '*'}
        })
                .then(function success(resp) {
                    //console.log("%cSuccess Read Winners:" + JSON.stringify(resp), "color:blue");
                    callback(resp);
                }, function error(error) {
                    //console.log("%cError Read Winners:" + JSON.stringify(error), "color:#f00");
                    callback(error);
                });
    };
    /**
     *
     * @param {type} callback
     * @returns {object} responce
     */
    this.readNews = function (callback) {
        let postdata = {
            op: 'news'
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: {'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'POST,GET,OPTION,PUT,DELETE', 'Access-Control-Allow-Origin': '*'}
        })
                .then(function success(resp) {
                    //console.log("%cSuccess readNews:" + JSON.stringify(resp), "color:blue");
                    callback(resp);
                }, function error(error) {
                    //console.log("%cError readNews:" + JSON.stringify(resp), "color:#f00");
                    callback(error);
                });

    };
    /**
     *
     * @param {type} callback
     * @returns {object} responce
     */
    this.readRecomendations = function (callback) {
        let postdata = {
            op: 'recomendations'
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: {'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'POST,GET,OPTION,PUT,DELETE', 'Access-Control-Allow-Origin': '*'}
        })
                .then(function success(resp) {
                    //console.log("%cSuccess readNews:" + JSON.stringify(resp), "color:blue");
                    callback(resp);
                }, function error(error) {
                    //console.log("%cError readNews:" + JSON.stringify(resp), "color:#f00");
                    callback(error);
                });

    };

    /**
     *
     * @param {type} data
     * @param {type} callback
     * @returns {object} responce
     */
    this.addNewUser = function (data, callback) {
        let postdata = {
            op: 'addUser',
            data: data
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: {'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'PUT,POST,GET,OPTION,DELETE', 'Access-Control-Allow-Original': '*'}
        })
                .then(function (resp) {
                    console.log("%cSuccess addUser:" + JSON.stringify(resp), "color:blue");
                    callback(resp);
                }, function (error) {
                    console.log("%cError addUser:" + JSON.stringify(resp), "color:#f00");
                    callback(error);
                });
    };
    /**
     *
     * @param {type} data
     * @param {type} callback
     * @returns {object} responce
     */
    this.login = function (data, callback) {
        let postdata = {
            op: 'login',
            data: data
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: {'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'PUT,POST,GET,OPTION,DELETE', 'Access-Control-Allow-Original': '*'}
        })
                .then(function (resp) {
                    callback(resp);
                }, function (error) {
                    callback(error);
                });
    };

    this.getUserData = function (userId, callback) {
        let postdata = {
            op: 'getUser',
            userId: userId
        };
        $http({
            method: "POST",
            url: "../gamearea/php/api.php",
            data: JSON.strigify(postdata),
            headers: {
                'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,OPTION', 'Access-Control-Allow-Original': '*'
            }
        }).then(
                function (res) {
                    callback(res);
                },
                function (err) {
                    callback(err);
                }
        )

    };

    this.getUserGames = function (id_user, callback) {
        let postdata = {
            op: 'userAccount',
            data: {
                userId: id_user,
            }
        };
        $http({
            method: "POST",
            url: "../gamearea/php/api.php",
            data: JSON.stringify(postdata),
            headers: {
                'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE,OPTION', 'Access-Control-Allow-Original': '*'
            }
        }).then(
                function (res) {
                    callback(res);
                },
                function (err) {
                    callback(err);
                }
        )

    };

});



'use strict';
gameAppl.service('serviceFire', ['$firebase', function ($firebase) {
        return{
            newdata: function (config) {
                var firebaseRef = new Firebase("https://gamearea-e98ec.firebaseio.com/" + config.projectId);
                // create an AngularFire ref to the data
                var sync = $firebase(firebaseRef);
                // pull the data into a local model
                var syncObject = sync.$asObject();
                return syncObject;
            }
        };
    }]);

'use strict';
gameAppl.service('Sfire', ['$firebase', '$q', function ($firebase, $q) {
        let config = {
            apiKey: "AIzaSyCuZsJyDThwilTM-6V-bEVla8Iuo3uo2O8",
            authDomain: "gamearea-e98ec.firebaseapp.com",
            databaseURL: "https://gamearea-e98ec.firebaseio.com",
            projectId: "gamearea-e98ec",
            storageBucket: "gamearea-e98ec.appspot.com",
            messagingSenderId: "837142383254"
        };
        var defaultApp = firebase.initializeApp(config);
        let database = defaultApp.database.list('/');
        console.table(database);



    }]);
'use strict';
gameAppl.controller('ctrlAccount', function ($scope, $rootScope, DataServiceSQL, $window) {
    $rootScope.$emit('changeMenu', 'account');
    let userObj = JSON.parse($window.localStorage.getItem("logined"));
    $scope.name = userObj.fname;
    $scope.email = userObj.email;
    $scope.phone = userObj.phone;
    $scope.address = userObj.address;
    $scope.city = userObj.city;
    let id_user = userObj.id_user;

    DataServiceSQL.read(8, function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

    DataServiceSQL.getUserGames(id_user, function (data) {
        if (data.status == 200) {
            let result = data.data.data;
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

'use strict';
gameAppl.controller('ctrlContact', function ($scope, $rootScope, DataServiceSQL) {
    $rootScope.$emit('changeMenu', 'contact');
    DataServiceSQL.read(2, function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });
});

'use strict';
gameAppl.controller('ctrlDemo', function ($scope, $rootScope, DataServiceSQL) {
    let home = 0;
    let type = "free";
    $rootScope.$emit('changeMenu', 'demo');

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
'use strict';
gameAppl.controller('ctrHome', ['$scope', '$rootScope', 'DataServiceSQL', function ($scope, $rootScope, DataServiceSQL) {
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
        $rootScope.$emit('changeMenu', 'home');


    }]);
'use strict';
gameAppl.controller('ctrlLogin', ['$scope', '$rootScope', '$location', 'DataServiceSQL', '$window', function ($scope, $rootScope, $location, DataServiceSQL, $window) {
        let result_send = false;
        $scope.resultMesagge = '';

        $scope.sendVal = function () {
            let loginvalues = {
                'username': $scope.username,
                'password': $scope.password
            };

            DataServiceSQL.login(loginvalues, function (result) {
                if (result.statusText === 'OK') {
                    if (result.data.code === -999 || result.data.code === null) {
                        $scope.resultMesagge = "Error:" + result.data.msg;
                    } else {
                        $scope.resultMesagge = "Login successed";
                        $window.localStorage.setItem("logined", JSON.stringify(result.data.code));
                        angular.element("#btnLogin").trigger("click");
                        $rootScope.$emit("login", result.data.code);
                    }
                } else {
                    $scope.resultMesagge = "Error:" + result.statusText;
                }
            });

        };

        $scope.resultMsgLogin = function () {
            return ($scope.resultMesagge === '') ? false : true;
        };
    }]);
'use strict';
gameAppl.controller('ctrlReal', function ($scope, $rootScope, DataServiceSQL) {
    let home = 0;
    let type = "real";
    $rootScope.$emit('changeMenu', 'real');
    DataServiceSQL.read(7, function (data) {
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
'use strict';
gameAppl.controller('ctrlRecomendatins', function ($scope, $rootScope, DataServiceSQL, $window) {
    $rootScope.$emit("changeMenu", 'recomendations');

    DataServiceSQL.read(6, function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

    DataServiceSQL.readRecomendations(function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            $window.localStorage.setItem("notes", JSON.stringify(result));
        }


    });


});
'use strict';
gameAppl.controller('ctrlRegistration', function ($scope, DataServiceSQL) {
    DataServiceSQL.read(4, function (data) {
        if (data.status == 200) {
            let result = data.data.data;
            $scope.page = result.page;
            $scope.title = result.title;
            $scope.content = result.content;
        }
    });

});
'use strict';
gameAppl.controller('ctrlSign', ['$scope', '$rootScope', 'DataServiceSQL', '$window', function ($scope, $rootScope, DataServiceSQL, $window) {
        $scope.resMsg = '';

        $scope.sendVal = function () {
            let client = {fname: '', address: '', city: '', email: '', username: '', password: '', phone: ''};
            let user = {fname: '', address: '', city: '', email: '', username: '', phone: ''};
            client.fname = $scope.client.fname;
            client.city = $scope.client.city;
            client.email = $scope.client.email;
            client.address = $scope.client.address;
            client.username = $scope.client.username;
            client.password = $scope.client.password;
            client.phone = $scope.client.phone;
            user.fname = $scope.client.fname;
            user.city = $scope.client.city;
            user.email = $scope.client.email;
            user.address = $scope.client.address;
            user.username = $scope.client.username;
            user.phone = $scope.client.phone;

            console.log(JSON.stringify(client));

            DataServiceSQL.addNewUser(client, function (result) {
                console.log("%cArrived result:" + JSON.stringify(result), "color: green;");
                if (result.statusText === 'OK') {
                    if (result.data.code === -999 || result.data.code === null) {
                        $scope.resMsg = "Error:" + result.data.msg;
                    } else {
                        $scope.resMsg = "Success";
                        $window.localStorage.setItem("logined", JSON.stringify(user));
                        angular.element("#btnSign").trigger("click");
                        $rootScope.$emit("login", client);
                    }
                } else {
                    $scope.resMsg = "Error:" + result;
                }
            });

        };

        $scope.resultMsg = function () {
            return ($scope.resMsg === '') ? false : true;
        };
    }]);
'use strict';
gameAppl.controller('ctrlStripwinners', function ($scope, DataServiceSQL) {
    DataServiceSQL.readNews(function (data) {
        if (data.status == 200) {
            //console.info("%cNews:" + JSON.stringify(data.data.data), "color:green");
            $scope.news = data.data.data;
        }
    });
});
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
'use strict'
gameAppl.controller('ctrlTopmenu', function ($scope, $window, $rootScope) {
    let user_login = null;
    let active_item = "home";
    $rootScope.$on("changeMenu", function (event, data) {
        active_item = data;
    });


    $rootScope.$on("login", function (event, data) {
        user_login = JSON.parse($window.localStorage.getItem("logined"));
        angular.element("#anonim").hide();
        $("#logined").show();
        $("#user_values").html(data.fname);
    });

    $(document).ready(function () {
        user_login = JSON.parse($window.localStorage.getItem("logined"));
        if (user_login === null) {
            angular.element("#anonim").show();
            angular.element("#logined").hide();
            $("#user_values").html('');
        } else {
            angular.element("#anonim").hide();
            $("#logined").show();
            $("#user_values").html(user_login.fname);
        }
    });

    $scope.logout = function () {
        angular.element("#anonim").show();
        angular.element("#logined").hide();
        $("#user_values").html('');
        $window.localStorage.removeItem("logined");
        user_login = null;
    };

    $scope.getStatusUser = function () {
        return (user_login === null) ? false : true;
    };

    $scope.setActiveMenu = function (item) {
        return (item == active_item) ? 'active' : '';
    };


});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGwuanMiLCJjb25maWcuanMiLCJzZXJ2aWNlLmpzIiwic2VydmlzZUZpcmViYXNlLmpzIiwic2ZpcmUuanMiLCJBY2NvdW50L2N0cmxBY2NvdW50LmpzIiwiQ29udGFjdC9jdHJsQ29udGFjdC5qcyIsIkRlbW8vY3RybERlbW8uanMiLCJIb21lL2N0ckhvbWUuanMiLCJMb2dpbi9jdHJsTG9naW4uanMiLCJSZWFsL2N0cmxSZWFsLmpzIiwiUmVjb21lbmRhdGlvbnMvY3RybFJlY29tZW5kYXRpbnMuanMiLCJSZWdpc3RyYXRpb24vY3RybFJlZ2lzdHJhdGlvbi5qcyIsIlNpZ24vY3RybFNpZ24uanMiLCJTdHJpcHdpbm5lcnMvY3RybFN0cmlwd2lubmVycy5qcyIsIlRlcm1zL2N0cmxUZXJtcy5qcyIsIlRvcGVtZW51L2N0cmxUb3BtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5sZXQgZ2FtZUFwcGwgPSBhbmd1bGFyLm1vZHVsZSgnZ2FtZUFwcGwnLCBbJ25nUm91dGUnLCAndWkucm91dGVyJywgJ25nU2FuaXRpemUnLCAnbmdGaWxlVXBsb2FkJ10pOyIsIid1c2Ugc3RyaWN0JztcclxuZ2FtZUFwcGwuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAvLyRsb2NhbFN0b3JhZ2VQcm92aWRlci5zZXQoXCJjb3VudGVyXCIsIDEpO1xyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xyXG4gICAgY29uc29sZS5sb2coXCJDb25maWcgc3RhcnRcIik7XHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ0hvbWUnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaXB3aW5uZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsU3RyaXB3aW5uZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1N0cmlwd2lubmVycy9zdHJpcHdpbm5lcnMuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcG1lbnU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxUb3BtZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1RvcGVtZW51L3RvcG1lbnUuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0ckhvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvSG9tZS9ob21lLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ1Rlcm1zJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3Rlcm1zJyxcclxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaXB3aW5uZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsU3RyaXB3aW5uZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1N0cmlwd2lubmVycy9zdHJpcHdpbm5lcnMuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcG1lbnU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxUb3BtZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1RvcGVtZW51L3RvcG1lbnUuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxUZXJtcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9UZXJtcy90ZXJtcy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdDb250YWN0VXMnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvY29udGFjdHVzJyxcclxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaXB3aW5uZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsU3RyaXB3aW5uZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1N0cmlwd2lubmVycy9zdHJpcHdpbm5lcnMuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcG1lbnU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxUb3BtZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1RvcGVtZW51L3RvcG1lbnUuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxDb250YWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL0NvbnRhY3QvY29udGFjdC5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdSZWdpc3RyYXRpb24nLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcmVnaXN0cmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaXB3aW5uZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsU3RyaXB3aW5uZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1N0cmlwd2lubmVycy9zdHJpcHdpbm5lcnMuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcG1lbnU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxUb3BtZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1RvcGVtZW51L3RvcG1lbnUuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxSZWdpc3RyYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvUmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdBY2NvdW50Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcHdpbm5lcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxTdHJpcHdpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvU3RyaXB3aW5uZXJzL3N0cmlwd2lubmVycy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRvcG1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvVG9wZW1lbnUvdG9wbWVudS5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybEFjY291bnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvQWNjb3VudC9hY2NvdW50Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ1JlY29tbWVuZGF0aW9ucycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9yZWNvbW1lbmRhdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcHdpbm5lcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxTdHJpcHdpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvU3RyaXB3aW5uZXJzL3N0cmlwd2lubmVycy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRvcG1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvVG9wZW1lbnUvdG9wbWVudS5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFJlY29tZW5kYXRpbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvUmVjb21lbmRhdGlvbnMvcmVjb21lbmRhdGlvbnMuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnRGVtbycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9kZW1vJyxcclxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaXB3aW5uZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsU3RyaXB3aW5uZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1N0cmlwd2lubmVycy9zdHJpcHdpbm5lcnMuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcG1lbnU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxUb3BtZW51JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1RvcGVtZW51L3RvcG1lbnUuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxEZW1vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL0RlbW8vZGVtby5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdSZWFsJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3JlYWwnLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcHdpbm5lcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxTdHJpcHdpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvU3RyaXB3aW5uZXJzL3N0cmlwd2lubmVycy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRvcG1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvVG9wZW1lbnUvdG9wbWVudS5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFJlYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvUmVhbC9yZWFsLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxufSk7XHJcblxyXG5nYW1lQXBwbC5ydW4oW2Z1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBhcGlLZXk6IFwiQUl6YVN5Q3Vac0p5RFRod2lsVE0tNlYtYkVWbGE4SXVvM3VvMk84XCIsXHJcbiAgICAgICAgICAgIGF1dGhEb21haW46IFwiZ2FtZWFyZWEtZTk4ZWMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZ2FtZWFyZWEtZTk4ZWMuZmlyZWJhc2Vpby5jb21cIixcclxuICAgICAgICAgICAgcHJvamVjdElkOiBcImdhbWVhcmVhLWU5OGVjXCIsXHJcbiAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZ2FtZWFyZWEtZTk4ZWMuYXBwc3BvdC5jb21cIixcclxuICAgICAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODM3MTQyMzgzMjU0XCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxuICAgIH1dKTtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZ2FtZUFwcGwuc2VydmljZSgnRGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiLi4vZ2FtZWFyZWEvZGF0YS9cIiArIHVybCArIFwiLmpzb25cIixcclxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUudGFibGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvcihlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZ2FtZUFwcGwuc2VydmljZSgnZnJTZXJ2aWNlJywgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgICB0aGlzLnJlYWQgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaykge1xyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9nYW1lYXJlYS1lOThlYy5maXJlYmFzZWlvLmNvbS9cIiArIHVybCArIFwiLmpzb25cIixcclxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUudGFibGUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvcihlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZFVzZXIgPSBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2dhbWVhcmVhLWU5OGVjLmZpcmViYXNlaW8uY29tL3VzZXJzLmpzb25cIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjU3VjY2Vzc1wiLCBcImNvbG9yOmJsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGVycm9yKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNFcnJvclwiLCBcImNvbG9yOiM5MDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmxvZ2luID0gZnVuY3Rpb24gbG9naW4odXNlciwgcGFzcywgY2FsbGJhY2spIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIE1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2FtZWFyZWEtZTk4ZWMuZmlyZWJhc2Vpby5jb20vdXNlcnMuanNvbj9vcmRlckJ5PVwidXNlcm5hbWVcIiZlcXVlbFRvPVwiJyArIHVzZXIgKyAnXCInLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjU3VjY2Vzc1wiLCBcImNvbG9yOmJsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjRXJyb3JcIiwgXCJjb2xvcjojOTAwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5nYW1lQXBwbC5zZXJ2aWNlKCdEYXRhU2VydmljZVNRTCcsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt0eXBlfSBpZHBhZ2VcclxuICAgICAqIEBwYXJhbSB7dHlwZX0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3BvbmNlXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uIChpZHBhZ2UsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHBvc3RkYXRhID0ge1xyXG4gICAgICAgICAgICBvcDogJ3BhZ2UnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZHBhZ2U6IGlkcGFnZSxcclxuICAgICAgICAgICAgICAgIHRhYmxlOiBcInRiY29udGVudFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi4uL2dhbWVhcmVhL3BocC9hcGkucGhwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBvc3RkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJ0dFVCwgUE9TVCwgT1BUSU9OUywgREVMRVRFLCBQVVQnLFxyXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiJWNTdWNjZXNzIFJlYWQgUGFnZTpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSwgXCJjb2xvcjpibHVlO1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKFwiJWNFcnJvciBSZWFkIFBhZ2U6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwKSwgXCJjb2xvcjojZjAwO1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7dHlwZX0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3BvbmNlXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVhZEdhbWVzTGlzdCA9IGZ1bmN0aW9uIChob21lLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBwb3N0ZGF0YSA9IHtcclxuICAgICAgICAgICAgb3A6ICdnYW1lJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIGhvbWU6IGhvbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnLi4vZ2FtZWFyZWEvcGhwL2FwaS5waHAnLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQT1NULCBHRVQsIE9QVElPTiwgUFVULCBERUxFVEUnLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNTdWNjZXNzIFJlYWQgR2FtZXMgTGlzdHM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwKSwgXCJjb2xvcjpibHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3IoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNFcnJvciBSZWFkIEdhbWVzIExpc3RzOlwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpLCBcImNvbG9yOiNmMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt0eXBlfSBjYWxsYmFja1xyXG4gICAgICogQHJldHVybnMge29iamVjdH0gcmVzcG9uY2VcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZWFkV2lubmVycyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBwb3N0ZGF0YSA9IHtcclxuICAgICAgICAgICAgb3A6ICd3aW5uZXJzJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnLi4vZ2FtZWFyZWEvcGhwL2FwaS5waHAnLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdHRVQsIFBPU1QsIE9QVElPTiwgUFVULCBERUxURScsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKid9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIlY1N1Y2Nlc3MgUmVhZCBXaW5uZXJzOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzcCksIFwiY29sb3I6Ymx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiVjRXJyb3IgUmVhZCBXaW5uZXJzOlwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpLCBcImNvbG9yOiNmMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt0eXBlfSBjYWxsYmFja1xyXG4gICAgICogQHJldHVybnMge29iamVjdH0gcmVzcG9uY2VcclxuICAgICAqL1xyXG4gICAgdGhpcy5yZWFkTmV3cyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBwb3N0ZGF0YSA9IHtcclxuICAgICAgICAgICAgb3A6ICduZXdzJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnLi4vZ2FtZWFyZWEvcGhwL2FwaS5waHAnLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQT1NULEdFVCxPUFRJT04sUFVULERFTEVURScsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKid9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIlY1N1Y2Nlc3MgcmVhZE5ld3M6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwKSwgXCJjb2xvcjpibHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3IoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNFcnJvciByZWFkTmV3czpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3ApLCBcImNvbG9yOiNmMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7dHlwZX0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3BvbmNlXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVhZFJlY29tZW5kYXRpb25zID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHBvc3RkYXRhID0ge1xyXG4gICAgICAgICAgICBvcDogJ3JlY29tZW5kYXRpb25zJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnLi4vZ2FtZWFyZWEvcGhwL2FwaS5waHAnLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQT1NULEdFVCxPUFRJT04sUFVULERFTEVURScsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKid9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIlY1N1Y2Nlc3MgcmVhZE5ld3M6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwKSwgXCJjb2xvcjpibHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3IoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNFcnJvciByZWFkTmV3czpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3ApLCBcImNvbG9yOiNmMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3R5cGV9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7dHlwZX0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3BvbmNlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkTmV3VXNlciA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBwb3N0ZGF0YSA9IHtcclxuICAgICAgICAgICAgb3A6ICdhZGRVc2VyJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiAnLi4vZ2FtZWFyZWEvcGhwL2FwaS5waHAnLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQVVQsUE9TVCxHRVQsT1BUSU9OLERFTEVURScsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5hbCc6ICcqJ31cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjU3VjY2VzcyBhZGRVc2VyOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzcCksIFwiY29sb3I6Ymx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNFcnJvciBhZGRVc2VyOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzcCksIFwiY29sb3I6I2YwMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3R5cGV9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7dHlwZX0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3BvbmNlXHJcbiAgICAgKi9cclxuICAgIHRoaXMubG9naW4gPSBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgcG9zdGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG9wOiAnbG9naW4nLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICcuLi9nYW1lYXJlYS9waHAvYXBpLnBocCcsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBvc3RkYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJ1BVVCxQT1NULEdFVCxPUFRJT04sREVMRVRFJywgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbmFsJzogJyonfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0VXNlckRhdGEgPSBmdW5jdGlvbiAodXNlcklkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBwb3N0ZGF0YSA9IHtcclxuICAgICAgICAgICAgb3A6ICdnZXRVc2VyJyxcclxuICAgICAgICAgICAgdXNlcklkOiB1c2VySWRcclxuICAgICAgICB9O1xyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi4uL2dhbWVhcmVhL3BocC9hcGkucGhwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaWdpZnkocG9zdGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQT1NULEdFVCxQVVQsREVMRVRFLE9QVElPTicsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5hbCc6ICcqJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0VXNlckdhbWVzID0gZnVuY3Rpb24gKGlkX3VzZXIsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHBvc3RkYXRhID0ge1xyXG4gICAgICAgICAgICBvcDogJ3VzZXJBY2NvdW50JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBpZF91c2VyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIuLi9nYW1lYXJlYS9waHAvYXBpLnBocFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJ1BPU1QsR0VULFBVVCxERUxFVEUsT1BUSU9OJywgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbmFsJzogJyonXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH07XHJcblxyXG59KTtcclxuXHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcbmdhbWVBcHBsLnNlcnZpY2UoJ3NlcnZpY2VGaXJlJywgWyckZmlyZWJhc2UnLCBmdW5jdGlvbiAoJGZpcmViYXNlKSB7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBuZXdkYXRhOiBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlyZWJhc2VSZWYgPSBuZXcgRmlyZWJhc2UoXCJodHRwczovL2dhbWVhcmVhLWU5OGVjLmZpcmViYXNlaW8uY29tL1wiICsgY29uZmlnLnByb2plY3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gQW5ndWxhckZpcmUgcmVmIHRvIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICB2YXIgc3luYyA9ICRmaXJlYmFzZShmaXJlYmFzZVJlZik7XHJcbiAgICAgICAgICAgICAgICAvLyBwdWxsIHRoZSBkYXRhIGludG8gYSBsb2NhbCBtb2RlbFxyXG4gICAgICAgICAgICAgICAgdmFyIHN5bmNPYmplY3QgPSBzeW5jLiRhc09iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN5bmNPYmplY3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfV0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmdhbWVBcHBsLnNlcnZpY2UoJ1NmaXJlJywgWyckZmlyZWJhc2UnLCAnJHEnLCBmdW5jdGlvbiAoJGZpcmViYXNlLCAkcSkge1xyXG4gICAgICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lDdVpzSnlEVGh3aWxUTS02Vi1iRVZsYThJdW8zdW8yTzhcIixcclxuICAgICAgICAgICAgYXV0aERvbWFpbjogXCJnYW1lYXJlYS1lOThlYy5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICAgICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9nYW1lYXJlYS1lOThlYy5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwiZ2FtZWFyZWEtZTk4ZWNcIixcclxuICAgICAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJnYW1lYXJlYS1lOThlYy5hcHBzcG90LmNvbVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4MzcxNDIzODMyNTRcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGRlZmF1bHRBcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbiAgICAgICAgbGV0IGRhdGFiYXNlID0gZGVmYXVsdEFwcC5kYXRhYmFzZS5saXN0KCcvJyk7XHJcbiAgICAgICAgY29uc29sZS50YWJsZShkYXRhYmFzZSk7XHJcblxyXG5cclxuXHJcbiAgICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5nYW1lQXBwbC5jb250cm9sbGVyKCdjdHJsQWNjb3VudCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsIERhdGFTZXJ2aWNlU1FMLCAkd2luZG93KSB7XHJcbiAgICAkcm9vdFNjb3BlLiRlbWl0KCdjaGFuZ2VNZW51JywgJ2FjY291bnQnKTtcclxuICAgIGxldCB1c2VyT2JqID0gSlNPTi5wYXJzZSgkd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5lZFwiKSk7XHJcbiAgICAkc2NvcGUubmFtZSA9IHVzZXJPYmouZm5hbWU7XHJcbiAgICAkc2NvcGUuZW1haWwgPSB1c2VyT2JqLmVtYWlsO1xyXG4gICAgJHNjb3BlLnBob25lID0gdXNlck9iai5waG9uZTtcclxuICAgICRzY29wZS5hZGRyZXNzID0gdXNlck9iai5hZGRyZXNzO1xyXG4gICAgJHNjb3BlLmNpdHkgPSB1c2VyT2JqLmNpdHk7XHJcbiAgICBsZXQgaWRfdXNlciA9IHVzZXJPYmouaWRfdXNlcjtcclxuXHJcbiAgICBEYXRhU2VydmljZVNRTC5yZWFkKDgsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlID0gcmVzdWx0LnBhZ2U7XHJcbiAgICAgICAgICAgICRzY29wZS50aXRsZSA9IHJlc3VsdC50aXRsZTtcclxuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSByZXN1bHQuY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBEYXRhU2VydmljZVNRTC5nZXRVc2VyR2FtZXMoaWRfdXNlciwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBHYW1lczpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCksIFwiY29sb3I6IGdyZWVuO1wiKTtcclxuICAgICAgICAgICAgJCgnI3VzZXJHYW1lcycpLmRhdGFUYWJsZSh7XHJcblxyXG4gICAgICAgICAgICAgICAgXCJzRG9tXCI6ICdUPFwiY2xlYXJcIj5sZnJ0aXAnLFxyXG4gICAgICAgICAgICAgICAgXCJvVGFibGVUb29sc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzU3dmUGF0aFwiOiBcImxpYi90YWJsZXRvb2xzL3N3Zi9jb3B5X2Nzdl94bHNfcGRmLnN3ZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYUJ1dHRvbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNFeHRlbmRzXCI6IFwicGRmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNCdXR0b25UZXh0XCI6IFwiU2F2ZSBhcyBQREZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNFeHRlbmRzXCI6IFwieGxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNCdXR0b25UZXh0XCI6IFwiU2F2ZSBmb3IgRXhjZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiYkRlc3Ryb3lcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIFwiYkxlbmd0aENoYW5nZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJiQXV0b1dpZHRoXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJhYURhdGFcIjogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgXCJhYVNvcnRpbmdcIjogW1sxLCBcImRlc2NcIl1dLFxyXG4gICAgICAgICAgICAgICAgXCJhb0NvbHVtbnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcIm1EYXRhXCI6IFwiaWRfZ2FtZVwiLCBcInNUaXRsZVwiOiBcIkdhbWUgSWRcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge1wibURhdGFcIjogXCJuYW1lXCIsIFwic1RpdGxlXCI6IFwiR2FtZSBuYW1lXCIsIFwic0NsYXNzXCI6IFwiY29sdW1uWCBjZW50ZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge1wibURhdGFcIjogXCJzaG9ydHNcIiwgXCJzVGl0bGVcIjogXCJTaG9ydCBEZXNjcmlwdGlvblwiLCBcInNDbGFzc1wiOiBcImNvbHVtblggY2VudGVyXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcIm1EYXRhXCI6IFwicmVzdWx0XCIsIFwic1RpdGxlXCI6IFwiUmVzdWx0XCIsIFwic0NsYXNzXCI6IFwiY29sdW1uWCBjZW50ZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge1wibURhdGFcIjogXCJ0eXBlXCIsIFwic1RpdGxlXCI6IFwiR2FtZSBUeXBlXCIsIFwic0NsYXNzXCI6IFwiY29sdW1uWCBjZW50ZXJcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAge1wibURhdGFcIjogXCJpbWdcIiwgXCJzVGl0bGVcIjogXCJJbWFnZVwiLCBcInNDbGFzc1wiOiBcImNvbHVtblggY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNGdWxsbmFtZTpcIiArIEpTT04uc3RyaW5naWZ5KHJvdyksIFwiY29sb3I6Z3JlZW47XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9J3VwbG9hZC9cIiArIHJvdy5pbWcgKyBcIicgYWx0PScnIHRpdGxlPScnPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZ2FtZUFwcGwuY29udHJvbGxlcignY3RybENvbnRhY3QnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCBEYXRhU2VydmljZVNRTCkge1xyXG4gICAgJHJvb3RTY29wZS4kZW1pdCgnY2hhbmdlTWVudScsICdjb250YWN0Jyk7XHJcbiAgICBEYXRhU2VydmljZVNRTC5yZWFkKDIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlID0gcmVzdWx0LnBhZ2U7XHJcbiAgICAgICAgICAgICRzY29wZS50aXRsZSA9IHJlc3VsdC50aXRsZTtcclxuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSByZXN1bHQuY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZ2FtZUFwcGwuY29udHJvbGxlcignY3RybERlbW8nLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCBEYXRhU2VydmljZVNRTCkge1xyXG4gICAgbGV0IGhvbWUgPSAwO1xyXG4gICAgbGV0IHR5cGUgPSBcImZyZWVcIjtcclxuICAgICRyb290U2NvcGUuJGVtaXQoJ2NoYW5nZU1lbnUnLCAnZGVtbycpO1xyXG5cclxuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWQoMywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2UgPSByZXN1bHQucGFnZTtcclxuICAgICAgICAgICAgJHNjb3BlLnRpdGxlID0gcmVzdWx0LnRpdGxlO1xyXG4gICAgICAgICAgICAkc2NvcGUuY29udGVudCA9IHJlc3VsdC5jb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWRHYW1lc0xpc3QoaG9tZSwgdHlwZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvL2NvbnNvbGUuaW5mbyhcIiVjIFJlYWQgSG9tZSBHYW1lcyBTdGF0dXM6XCIgKyBkYXRhLnN0YXR1cywgXCJjb2xvcjpvcmFuZ2VcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmluZm8oXCIlY1JlYWRIb21lR2FtZXM6XCIgKyBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuZGF0YSksIFwiY29sb3I6Z3JlZW5cIik7XHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5nYW1lcyA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5nYW1lQXBwbC5jb250cm9sbGVyKCdjdHJIb21lJywgWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICdEYXRhU2VydmljZVNRTCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsIERhdGFTZXJ2aWNlU1FMKSB7XHJcbiAgICAgICAgbGV0IGhvbWUgPSAxO1xyXG4gICAgICAgIGxldCB0eXBlID0gXCJmcmVlXCI7XHJcbiAgICAgICAgRGF0YVNlcnZpY2VTUUwucmVhZCgxLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaG9tZWNvbnRlbnQgPSByZXN1bHQuY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIERhdGFTZXJ2aWNlU1FMLnJlYWRHYW1lc0xpc3QoaG9tZSwgdHlwZSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmluZm8oXCIlYyBSZWFkIEhvbWUgR2FtZXMgU3RhdHVzOlwiICsgZGF0YS5zdGF0dXMsIFwiY29sb3I6b3JhbmdlXCIpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuaW5mbyhcIiVjUmVhZEhvbWVHYW1lczpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS5kYXRhKSwgXCJjb2xvcjpncmVlblwiKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBvcGdhbWVzID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgRGF0YVNlcnZpY2VTUUwucmVhZFdpbm5lcnMoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLndpbm5lcnMgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICRyb290U2NvcGUuJGVtaXQoJ2NoYW5nZU1lbnUnLCAnaG9tZScpO1xyXG5cclxuXHJcbiAgICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5nYW1lQXBwbC5jb250cm9sbGVyKCdjdHJsTG9naW4nLCBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJyRsb2NhdGlvbicsICdEYXRhU2VydmljZVNRTCcsICckd2luZG93JywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCBEYXRhU2VydmljZVNRTCwgJHdpbmRvdykge1xyXG4gICAgICAgIGxldCByZXN1bHRfc2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICRzY29wZS5yZXN1bHRNZXNhZ2dlID0gJyc7XHJcblxyXG4gICAgICAgICRzY29wZS5zZW5kVmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgbG9naW52YWx1ZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiAkc2NvcGUudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiAkc2NvcGUucGFzc3dvcmRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIERhdGFTZXJ2aWNlU1FMLmxvZ2luKGxvZ2ludmFsdWVzLCBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1c1RleHQgPT09ICdPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuY29kZSA9PT0gLTk5OSB8fCByZXN1bHQuZGF0YS5jb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5yZXN1bHRNZXNhZ2dlID0gXCJFcnJvcjpcIiArIHJlc3VsdC5kYXRhLm1zZztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVzdWx0TWVzYWdnZSA9IFwiTG9naW4gc3VjY2Vzc2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpbmVkXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhLmNvZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KFwiI2J0bkxvZ2luXCIpLnRyaWdnZXIoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kZW1pdChcImxvZ2luXCIsIHJlc3VsdC5kYXRhLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlc3VsdE1lc2FnZ2UgPSBcIkVycm9yOlwiICsgcmVzdWx0LnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucmVzdWx0TXNnTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoJHNjb3BlLnJlc3VsdE1lc2FnZ2UgPT09ICcnKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgfV0pOyIsIid1c2Ugc3RyaWN0JztcclxuZ2FtZUFwcGwuY29udHJvbGxlcignY3RybFJlYWwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCBEYXRhU2VydmljZVNRTCkge1xyXG4gICAgbGV0IGhvbWUgPSAwO1xyXG4gICAgbGV0IHR5cGUgPSBcInJlYWxcIjtcclxuICAgICRyb290U2NvcGUuJGVtaXQoJ2NoYW5nZU1lbnUnLCAncmVhbCcpO1xyXG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZCg3LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUucGFnZSA9IHJlc3VsdC5wYWdlO1xyXG4gICAgICAgICAgICAkc2NvcGUudGl0bGUgPSByZXN1bHQudGl0bGU7XHJcbiAgICAgICAgICAgICRzY29wZS5jb250ZW50ID0gcmVzdWx0LmNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZEdhbWVzTGlzdChob21lLCB0eXBlLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vY29uc29sZS5pbmZvKFwiJWMgUmVhZCBIb21lIEdhbWVzIFN0YXR1czpcIiArIGRhdGEuc3RhdHVzLCBcImNvbG9yOm9yYW5nZVwiKTtcclxuICAgICAgICAvL2NvbnNvbGUuaW5mbyhcIiVjUmVhZEhvbWVHYW1lczpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS5kYXRhKSwgXCJjb2xvcjpncmVlblwiKTtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLmdhbWVzID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbmdhbWVBcHBsLmNvbnRyb2xsZXIoJ2N0cmxSZWNvbWVuZGF0aW5zJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgRGF0YVNlcnZpY2VTUUwsICR3aW5kb3cpIHtcclxuICAgICRyb290U2NvcGUuJGVtaXQoXCJjaGFuZ2VNZW51XCIsICdyZWNvbWVuZGF0aW9ucycpO1xyXG5cclxuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWQoNiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2UgPSByZXN1bHQucGFnZTtcclxuICAgICAgICAgICAgJHNjb3BlLnRpdGxlID0gcmVzdWx0LnRpdGxlO1xyXG4gICAgICAgICAgICAkc2NvcGUuY29udGVudCA9IHJlc3VsdC5jb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWRSZWNvbWVuZGF0aW9ucyhmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZXNcIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbmdhbWVBcHBsLmNvbnRyb2xsZXIoJ2N0cmxSZWdpc3RyYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCBEYXRhU2VydmljZVNRTCkge1xyXG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZCg0LCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUucGFnZSA9IHJlc3VsdC5wYWdlO1xyXG4gICAgICAgICAgICAkc2NvcGUudGl0bGUgPSByZXN1bHQudGl0bGU7XHJcbiAgICAgICAgICAgICRzY29wZS5jb250ZW50ID0gcmVzdWx0LmNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbmdhbWVBcHBsLmNvbnRyb2xsZXIoJ2N0cmxTaWduJywgWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICdEYXRhU2VydmljZVNRTCcsICckd2luZG93JywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgRGF0YVNlcnZpY2VTUUwsICR3aW5kb3cpIHtcclxuICAgICAgICAkc2NvcGUucmVzTXNnID0gJyc7XHJcblxyXG4gICAgICAgICRzY29wZS5zZW5kVmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50ID0ge2ZuYW1lOiAnJywgYWRkcmVzczogJycsIGNpdHk6ICcnLCBlbWFpbDogJycsIHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnLCBwaG9uZTogJyd9O1xyXG4gICAgICAgICAgICBsZXQgdXNlciA9IHtmbmFtZTogJycsIGFkZHJlc3M6ICcnLCBjaXR5OiAnJywgZW1haWw6ICcnLCB1c2VybmFtZTogJycsIHBob25lOiAnJ307XHJcbiAgICAgICAgICAgIGNsaWVudC5mbmFtZSA9ICRzY29wZS5jbGllbnQuZm5hbWU7XHJcbiAgICAgICAgICAgIGNsaWVudC5jaXR5ID0gJHNjb3BlLmNsaWVudC5jaXR5O1xyXG4gICAgICAgICAgICBjbGllbnQuZW1haWwgPSAkc2NvcGUuY2xpZW50LmVtYWlsO1xyXG4gICAgICAgICAgICBjbGllbnQuYWRkcmVzcyA9ICRzY29wZS5jbGllbnQuYWRkcmVzcztcclxuICAgICAgICAgICAgY2xpZW50LnVzZXJuYW1lID0gJHNjb3BlLmNsaWVudC51c2VybmFtZTtcclxuICAgICAgICAgICAgY2xpZW50LnBhc3N3b3JkID0gJHNjb3BlLmNsaWVudC5wYXNzd29yZDtcclxuICAgICAgICAgICAgY2xpZW50LnBob25lID0gJHNjb3BlLmNsaWVudC5waG9uZTtcclxuICAgICAgICAgICAgdXNlci5mbmFtZSA9ICRzY29wZS5jbGllbnQuZm5hbWU7XHJcbiAgICAgICAgICAgIHVzZXIuY2l0eSA9ICRzY29wZS5jbGllbnQuY2l0eTtcclxuICAgICAgICAgICAgdXNlci5lbWFpbCA9ICRzY29wZS5jbGllbnQuZW1haWw7XHJcbiAgICAgICAgICAgIHVzZXIuYWRkcmVzcyA9ICRzY29wZS5jbGllbnQuYWRkcmVzcztcclxuICAgICAgICAgICAgdXNlci51c2VybmFtZSA9ICRzY29wZS5jbGllbnQudXNlcm5hbWU7XHJcbiAgICAgICAgICAgIHVzZXIucGhvbmUgPSAkc2NvcGUuY2xpZW50LnBob25lO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2xpZW50KSk7XHJcblxyXG4gICAgICAgICAgICBEYXRhU2VydmljZVNRTC5hZGROZXdVc2VyKGNsaWVudCwgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY0Fycml2ZWQgcmVzdWx0OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSwgXCJjb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXNUZXh0ID09PSAnT0snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmNvZGUgPT09IC05OTkgfHwgcmVzdWx0LmRhdGEuY29kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVzTXNnID0gXCJFcnJvcjpcIiArIHJlc3VsdC5kYXRhLm1zZztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVzTXNnID0gXCJTdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpbmVkXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KFwiI2J0blNpZ25cIikudHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KFwibG9naW5cIiwgY2xpZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5yZXNNc2cgPSBcIkVycm9yOlwiICsgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlc3VsdE1zZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgkc2NvcGUucmVzTXNnID09PSAnJykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgIH1dKTsiLCIndXNlIHN0cmljdCc7XHJcbmdhbWVBcHBsLmNvbnRyb2xsZXIoJ2N0cmxTdHJpcHdpbm5lcnMnLCBmdW5jdGlvbiAoJHNjb3BlLCBEYXRhU2VydmljZVNRTCkge1xyXG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZE5ld3MoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5pbmZvKFwiJWNOZXdzOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLmRhdGEpLCBcImNvbG9yOmdyZWVuXCIpO1xyXG4gICAgICAgICAgICAkc2NvcGUubmV3cyA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbmdhbWVBcHBsLmNvbnRyb2xsZXIoJ2N0cmxUZXJtcycsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsIERhdGFTZXJ2aWNlU1FMKSB7XHJcbiAgICAkcm9vdFNjb3BlLiRlbWl0KFwiY2hhbmdlTWVudVwiLCAndGVybXMnKTtcclxuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWQoNSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNBcnJpdmVkIHJlc3VsdDpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwpLCBcImNvbG9yOiBncmVlbjtcIik7XHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlID0gcmVzdWx0LnBhZ2U7XHJcbiAgICAgICAgICAgICRzY29wZS50aXRsZSA9IHJlc3VsdC50aXRsZTtcclxuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSByZXN1bHQuY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiJ3VzZSBzdHJpY3QnXHJcbmdhbWVBcHBsLmNvbnRyb2xsZXIoJ2N0cmxUb3BtZW51JywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdywgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHVzZXJfbG9naW4gPSBudWxsO1xyXG4gICAgbGV0IGFjdGl2ZV9pdGVtID0gXCJob21lXCI7XHJcbiAgICAkcm9vdFNjb3BlLiRvbihcImNoYW5nZU1lbnVcIiwgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgYWN0aXZlX2l0ZW0gPSBkYXRhO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICRyb290U2NvcGUuJG9uKFwibG9naW5cIiwgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdXNlcl9sb2dpbiA9IEpTT04ucGFyc2UoJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luZWRcIikpO1xyXG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudChcIiNhbm9uaW1cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjbG9naW5lZFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiN1c2VyX3ZhbHVlc1wiKS5odG1sKGRhdGEuZm5hbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHVzZXJfbG9naW4gPSBKU09OLnBhcnNlKCR3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpbmVkXCIpKTtcclxuICAgICAgICBpZiAodXNlcl9sb2dpbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoXCIjYW5vbmltXCIpLnNob3coKTtcclxuICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KFwiI2xvZ2luZWRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3VzZXJfdmFsdWVzXCIpLmh0bWwoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChcIiNhbm9uaW1cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2xvZ2luZWRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3VzZXJfdmFsdWVzXCIpLmh0bWwodXNlcl9sb2dpbi5mbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoXCIjYW5vbmltXCIpLnNob3coKTtcclxuICAgICAgICBhbmd1bGFyLmVsZW1lbnQoXCIjbG9naW5lZFwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiN1c2VyX3ZhbHVlc1wiKS5odG1sKCcnKTtcclxuICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9naW5lZFwiKTtcclxuICAgICAgICB1c2VyX2xvZ2luID0gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFN0YXR1c1VzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh1c2VyX2xvZ2luID09PSBudWxsKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEFjdGl2ZU1lbnUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiAoaXRlbSA9PSBhY3RpdmVfaXRlbSkgPyAnYWN0aXZlJyA6ICcnO1xyXG4gICAgfTtcclxuXHJcblxyXG59KTsiXX0=
