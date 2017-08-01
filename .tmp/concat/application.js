'use strict';
angular.module('gameAppl', ['ngRoute', 'ui.router', 'ngSanitize', 'ngFileUpload']);
'use strict';
angular.module('gameAppl').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log("%cConfig start", "color:orange");


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

angular.module('gameAppl').run();

angular.element(document).ready(function () {
    console.log("%cDocument ready", "color:brown");
    let $injector = angular.injector(['ng']);
    let $window = $injector.get("$window");
    let counter = $window.localStorage.getItem("counter");
    $window.localStorage.setItem("counter", ++counter);
});
'use strict';
angular.module('gameAppl').service('DataService', function ($http) {
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

angular.module('gameAppl').service('frService', function ($http) {
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

angular.module('gameAppl').service('DataServiceSQL', function ($http) {
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
angular.module('gameAppl').service('serviceFire', ['$firebase', function ($firebase) {
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
angular.module('gameAppl').service('Sfire', ['$firebase', '$q', function ($firebase, $q) {
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
angular.module('gameAppl').controller('ctrlAccount', function ($scope, $rootScope, DataServiceSQL, $window) {
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
angular.module('gameAppl').controller('ctrlContact', function ($scope, $rootScope, DataServiceSQL) {
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
angular.module('gameAppl').controller('ctrlDemo', function ($scope, $rootScope, DataServiceSQL) {
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
angular.module('gameAppl').controller('ctrHome', ['$scope', '$rootScope', 'DataServiceSQL', function ($scope, $rootScope, DataServiceSQL) {
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
angular.module('gameAppl').controller('ctrlLogin', ['$scope', '$rootScope', '$location', 'DataServiceSQL', '$window', function ($scope, $rootScope, $location, DataServiceSQL, $window) {
        let result_send = false;
        $scope.resultMesagge = '';
        console.log("%cctrlogin ", "color:blue;");

        $scope.sendVal = function () {
            let username = (typeof $scope.username === 'undefined') ? 'gregp' : $scope.username;
            let password = (typeof $scope.password === 'undefined') ? 'Gp123456' : $scope.password;
            let loginvalues = {
                'username': username,
                'password': password
            };

            console.log("%cSend values to login:" + JSON.stringify(loginvalues), "color:lightgreen;");

            DataServiceSQL.login(loginvalues, function (result) {
                console.log("%cSend values result:" + JSON.stringify(result), "color:darkgreen;");
                if (result.statusText === 'OK') {
                    if (result.data.code === -999 || result.data.code === null) {
                        $scope.resultMesagge = "Error:" + result.data.msg;
                    } else {
                        $scope.resultMesagge = "Login successed";
                        $window.localStorage.setItem("logined", JSON.stringify(result.data.code));
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
        $rootScope.$on("powerLogin", function (event, data) {
            console.log("%cpowerLogin On:" + data, "color:green;");
            $scope.sendVal();
        });

    }]);
'use strict';
angular.module('gameAppl').controller('ctrlReal', function ($scope, $rootScope, DataServiceSQL) {
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
angular.module('gameAppl').controller('ctrlRegistration', function ($scope, DataServiceSQL) {
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
angular.module('gameAppl').controller('ctrlSign', ['$scope', '$rootScope', 'DataServiceSQL', '$window', function ($scope, $rootScope, DataServiceSQL, $window) {
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
angular.module('gameAppl').controller('ctrlRecomendatins', function ($scope, $rootScope, DataServiceSQL, $window) {
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
angular.module('gameAppl').controller('ctrlStripwinners', function ($scope, DataServiceSQL) {
    DataServiceSQL.readNews(function (data) {
        if (data.status == 200) {
            //console.info("%cNews:" + JSON.stringify(data.data.data), "color:green");
            $scope.news = data.data.data;
        }
    });
});
'use strict'
angular.module('gameAppl').controller('ctrlTopmenu', function ($scope, $window, $rootScope) {
    let user_login = null;


    $rootScope.$on("login", function (event, data) {
        console.log("%cLogin", "color:green");
        user_login = JSON.parse($window.localStorage.getItem("logined"));
        angular.element("#anonim").hide();
        $("#logined").show();
        $("#user_values").html(data.fname);
    });

    $(document).ready(function () {
        console.log("%cctrTopmenu Document ready", "color:blue;");


        if ($window.localStorage.getItem("logined") === "undefined" || $window.localStorage.getItem("logined") === null) {
            angular.element("#anonim").show();
            angular.element("#logined").hide();
            $("#user_values").html('');
            $rootScope.$emit("powerLogin", "Default User");
        } else {
            angular.element("#anonim").hide();
            $("#logined").show();
            user_login = JSON.parse($window.localStorage.getItem("logined"));
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


});
'use strict';
angular.module('gameAppl').controller('ctrlTerms', function ($scope, $rootScope, DataServiceSQL) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGwuanMiLCJjb25maWcuanMiLCJzZXJ2aWNlLmpzIiwic2VydmlzZUZpcmViYXNlLmpzIiwic2ZpcmUuanMiLCJBY2NvdW50L2N0cmxBY2NvdW50LmpzIiwiQ29udGFjdC9jdHJsQ29udGFjdC5qcyIsIkRlbW8vY3RybERlbW8uanMiLCJIb21lL2N0ckhvbWUuanMiLCJMb2dpbi9jdHJsTG9naW4uanMiLCJSZWFsL2N0cmxSZWFsLmpzIiwiUmVnaXN0cmF0aW9uL2N0cmxSZWdpc3RyYXRpb24uanMiLCJTaWduL2N0cmxTaWduLmpzIiwiUmVjb21lbmRhdGlvbnMvY3RybFJlY29tZW5kYXRpbnMuanMiLCJTdHJpcHdpbm5lcnMvY3RybFN0cmlwd2lubmVycy5qcyIsIlRvcGVtZW51L2N0cmxUb3BtZW51LmpzIiwiVGVybXMvY3RybFRlcm1zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcsIFsnbmdSb3V0ZScsICd1aS5yb3V0ZXInLCAnbmdTYW5pdGl6ZScsICduZ0ZpbGVVcGxvYWQnXSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2FtZUFwcGwnKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxuICAgIGNvbnNvbGUubG9nKFwiJWNDb25maWcgc3RhcnRcIiwgXCJjb2xvcjpvcmFuZ2VcIik7XHJcblxyXG5cclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnSG9tZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcHdpbm5lcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxTdHJpcHdpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvU3RyaXB3aW5uZXJzL3N0cmlwd2lubmVycy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRvcG1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvVG9wZW1lbnUvdG9wbWVudS5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RySG9tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9Ib21lL2hvbWUuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnVGVybXMnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvdGVybXMnLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcHdpbm5lcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxTdHJpcHdpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvU3RyaXB3aW5uZXJzL3N0cmlwd2lubmVycy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRvcG1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvVG9wZW1lbnUvdG9wbWVudS5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRlcm1zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHBsL1Rlcm1zL3Rlcm1zLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ0NvbnRhY3RVcycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9jb250YWN0dXMnLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcHdpbm5lcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxTdHJpcHdpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvU3RyaXB3aW5uZXJzL3N0cmlwd2lubmVycy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRvcG1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvVG9wZW1lbnUvdG9wbWVudS5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybENvbnRhY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvQ29udGFjdC9jb250YWN0Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ1JlZ2lzdHJhdGlvbicsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9yZWdpc3RyYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcHdpbm5lcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxTdHJpcHdpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvU3RyaXB3aW5uZXJzL3N0cmlwd2lubmVycy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRvcG1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvVG9wZW1lbnUvdG9wbWVudS5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFJlZ2lzdHJhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ0FjY291bnQnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYWNjb3VudCcsXHJcbiAgICAgICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmlwd2lubmVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFN0cmlwd2lubmVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9TdHJpcHdpbm5lcnMvc3RyaXB3aW5uZXJzLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b3BtZW51OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsVG9wbWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9Ub3BlbWVudS90b3BtZW51Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsQWNjb3VudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9BY2NvdW50L2FjY291bnQuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnUmVjb21tZW5kYXRpb25zJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3JlY29tbWVuZGF0aW9ucycsXHJcbiAgICAgICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmlwd2lubmVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFN0cmlwd2lubmVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9TdHJpcHdpbm5lcnMvc3RyaXB3aW5uZXJzLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b3BtZW51OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsVG9wbWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9Ub3BlbWVudS90b3BtZW51Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsUmVjb21lbmRhdGlucycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9SZWNvbWVuZGF0aW9ucy9yZWNvbWVuZGF0aW9ucy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXRlKCdEZW1vJywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2RlbW8nLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcHdpbm5lcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2N0cmxTdHJpcHdpbm5lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvU3RyaXB3aW5uZXJzL3N0cmlwd2lubmVycy5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wbWVudToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFRvcG1lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvVG9wZW1lbnUvdG9wbWVudS5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybERlbW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcGwvRGVtby9kZW1vLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhdGUoJ1JlYWwnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcmVhbCcsXHJcbiAgICAgICAgICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmlwd2lubmVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnY3RybFN0cmlwd2lubmVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9TdHJpcHdpbm5lcnMvc3RyaXB3aW5uZXJzLmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0b3BtZW51OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsVG9wbWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9Ub3BlbWVudS90b3BtZW51Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjdHJsUmVhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwbC9SZWFsL3JlYWwuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG59KTtcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLnJ1bigpO1xyXG5cclxuYW5ndWxhci5lbGVtZW50KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIiVjRG9jdW1lbnQgcmVhZHlcIiwgXCJjb2xvcjpicm93blwiKTtcclxuICAgIGxldCAkaW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnXSk7XHJcbiAgICBsZXQgJHdpbmRvdyA9ICRpbmplY3Rvci5nZXQoXCIkd2luZG93XCIpO1xyXG4gICAgbGV0IGNvdW50ZXIgPSAkd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKTtcclxuICAgICR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsICsrY291bnRlcik7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLnNlcnZpY2UoJ0RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgdGhpcy5yZWFkID0gZnVuY3Rpb24gKHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogXCIuLi9nYW1lYXJlYS9kYXRhL1wiICsgdXJsICsgXCIuanNvblwiLFxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUudGFibGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLnNlcnZpY2UoJ2ZyU2VydmljZScsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2dhbWVhcmVhLWU5OGVjLmZpcmViYXNlaW8uY29tL1wiICsgdXJsICsgXCIuanNvblwiLFxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUudGFibGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuYWRkVXNlciA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vZ2FtZWFyZWEtZTk4ZWMuZmlyZWJhc2Vpby5jb20vdXNlcnMuanNvblwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1N1Y2Nlc3NcIiwgXCJjb2xvcjpibHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNFcnJvclwiLCBcImNvbG9yOiM5MDBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgKTtcblxuICAgIH07XG5cbiAgICB0aGlzLmxvZ2luID0gZnVuY3Rpb24gbG9naW4odXNlciwgcGFzcywgY2FsbGJhY2spIHtcbiAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgTWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ2FtZWFyZWEtZTk4ZWMuZmlyZWJhc2Vpby5jb20vdXNlcnMuanNvbj9vcmRlckJ5PVwidXNlcm5hbWVcIiZlcXVlbFRvPVwiJyArIHVzZXIgKyAnXCInLFxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNTdWNjZXNzXCIsIFwiY29sb3I6Ymx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY0Vycm9yXCIsIFwiY29sb3I6IzkwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgIH1cblxufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLnNlcnZpY2UoJ0RhdGFTZXJ2aWNlU1FMJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3R5cGV9IGlkcGFnZVxuICAgICAqIEBwYXJhbSB7dHlwZX0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSByZXNwb25jZVxuICAgICAqL1xuICAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uIChpZHBhZ2UsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBwb3N0ZGF0YSA9IHtcbiAgICAgICAgICAgIG9wOiAncGFnZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWRwYWdlOiBpZHBhZ2UsXG4gICAgICAgICAgICAgICAgdGFibGU6IFwidGJjb250ZW50XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogXCIuLi9nYW1lYXJlYS9waHAvYXBpLnBocFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocG9zdGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnR0VULCBQT1NULCBPUFRJT05TLCBERUxFVEUsIFBVVCcsXG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIiVjU3VjY2VzcyBSZWFkIFBhZ2U6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSksIFwiY29sb3I6Ymx1ZTtcIik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGVycm9yKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoXCIlY0Vycm9yIFJlYWQgUGFnZTpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3ApLCBcImNvbG9yOiNmMDA7XCIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7dHlwZX0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSByZXNwb25jZVxuICAgICAqL1xuICAgIHRoaXMucmVhZEdhbWVzTGlzdCA9IGZ1bmN0aW9uIChob21lLCB0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcG9zdGRhdGEgPSB7XG4gICAgICAgICAgICBvcDogJ2dhbWUnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgaG9tZTogaG9tZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogJy4uL2dhbWVhcmVhL3BocC9hcGkucGhwJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBvc3RkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQT1NULCBHRVQsIE9QVElPTiwgUFVULCBERUxFVEUnLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonfVxuICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNTdWNjZXNzIFJlYWQgR2FtZXMgTGlzdHM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwKSwgXCJjb2xvcjpibHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvcihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNFcnJvciBSZWFkIEdhbWVzIExpc3RzOlwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpLCBcImNvbG9yOiNmMDBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHt0eXBlfSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3BvbmNlXG4gICAgICovXG4gICAgdGhpcy5yZWFkV2lubmVycyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBsZXQgcG9zdGRhdGEgPSB7XG4gICAgICAgICAgICBvcDogJ3dpbm5lcnMnXG4gICAgICAgIH07XG4gICAgICAgICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiAnLi4vZ2FtZWFyZWEvcGhwL2FwaS5waHAnLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocG9zdGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJ0dFVCwgUE9TVCwgT1BUSU9OLCBQVVQsIERFTFRFJywgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ31cbiAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiVjU3VjY2VzcyBSZWFkIFdpbm5lcnM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwKSwgXCJjb2xvcjpibHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBlcnJvcihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNFcnJvciBSZWFkIFdpbm5lcnM6XCIgKyBKU09OLnN0cmluZ2lmeShlcnJvciksIFwiY29sb3I6I2YwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3R5cGV9IGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge29iamVjdH0gcmVzcG9uY2VcbiAgICAgKi9cbiAgICB0aGlzLnJlYWROZXdzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBwb3N0ZGF0YSA9IHtcbiAgICAgICAgICAgIG9wOiAnbmV3cydcbiAgICAgICAgfTtcbiAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICcuLi9nYW1lYXJlYS9waHAvYXBpLnBocCcsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUE9TVCxHRVQsT1BUSU9OLFBVVCxERUxFVEUnLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonfVxuICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNTdWNjZXNzIHJlYWROZXdzOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzcCksIFwiY29sb3I6Ymx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiVjRXJyb3IgcmVhZE5ld3M6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwKSwgXCJjb2xvcjojZjAwXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHt0eXBlfSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3BvbmNlXG4gICAgICovXG4gICAgdGhpcy5yZWFkUmVjb21lbmRhdGlvbnMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHBvc3RkYXRhID0ge1xuICAgICAgICAgICAgb3A6ICdyZWNvbWVuZGF0aW9ucydcbiAgICAgICAgfTtcbiAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICcuLi9nYW1lYXJlYS9waHAvYXBpLnBocCcsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUE9TVCxHRVQsT1BUSU9OLFBVVCxERUxFVEUnLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonfVxuICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNTdWNjZXNzIHJlYWROZXdzOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzcCksIFwiY29sb3I6Ymx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiVjRXJyb3IgcmVhZE5ld3M6XCIgKyBKU09OLnN0cmluZ2lmeShyZXNwKSwgXCJjb2xvcjojZjAwXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3R5cGV9IGRhdGFcbiAgICAgKiBAcGFyYW0ge3R5cGV9IGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge29iamVjdH0gcmVzcG9uY2VcbiAgICAgKi9cbiAgICB0aGlzLmFkZE5ld1VzZXIgPSBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHBvc3RkYXRhID0ge1xuICAgICAgICAgICAgb3A6ICdhZGRVc2VyJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICcuLi9nYW1lYXJlYS9waHAvYXBpLnBocCcsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUFVULFBPU1QsR0VULE9QVElPTixERUxFVEUnLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luYWwnOiAnKid9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1N1Y2Nlc3MgYWRkVXNlcjpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3ApLCBcImNvbG9yOmJsdWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3ApO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjRXJyb3IgYWRkVXNlcjpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3ApLCBcImNvbG9yOiNmMDBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHt0eXBlfSBkYXRhXG4gICAgICogQHBhcmFtIHt0eXBlfSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3BvbmNlXG4gICAgICovXG4gICAgdGhpcy5sb2dpbiA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcG9zdGRhdGEgPSB7XG4gICAgICAgICAgICBvcDogJ2xvZ2luJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6ICcuLi9nYW1lYXJlYS9waHAvYXBpLnBocCcsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwb3N0ZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnUFVULFBPU1QsR0VULE9QVElPTixERUxFVEUnLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luYWwnOiAnKid9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRVc2VyRGF0YSA9IGZ1bmN0aW9uICh1c2VySWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBwb3N0ZGF0YSA9IHtcbiAgICAgICAgICAgIG9wOiAnZ2V0VXNlcicsXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJJZFxuICAgICAgICB9O1xuICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi4uL2dhbWVhcmVhL3BocC9hcGkucGhwXCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmlnaWZ5KHBvc3RkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQT1NULEdFVCxQVVQsREVMRVRFLE9QVElPTicsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5hbCc6ICcqJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgIH07XG5cbiAgICB0aGlzLmdldFVzZXJHYW1lcyA9IGZ1bmN0aW9uIChpZF91c2VyLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcG9zdGRhdGEgPSB7XG4gICAgICAgICAgICBvcDogJ3VzZXJBY2NvdW50JyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IGlkX3VzZXIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRodHRwKHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IFwiLi4vZ2FtZWFyZWEvcGhwL2FwaS5waHBcIixcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHBvc3RkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdQT1NULEdFVCxQVVQsREVMRVRFLE9QVElPTicsICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5hbCc6ICcqJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgIH07XG5cbn0pO1xuXG5cbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLnNlcnZpY2UoJ3NlcnZpY2VGaXJlJywgWyckZmlyZWJhc2UnLCBmdW5jdGlvbiAoJGZpcmViYXNlKSB7XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIG5ld2RhdGE6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyZWJhc2VSZWYgPSBuZXcgRmlyZWJhc2UoXCJodHRwczovL2dhbWVhcmVhLWU5OGVjLmZpcmViYXNlaW8uY29tL1wiICsgY29uZmlnLnByb2plY3RJZCk7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFuIEFuZ3VsYXJGaXJlIHJlZiB0byB0aGUgZGF0YVxuICAgICAgICAgICAgICAgIHZhciBzeW5jID0gJGZpcmViYXNlKGZpcmViYXNlUmVmKTtcbiAgICAgICAgICAgICAgICAvLyBwdWxsIHRoZSBkYXRhIGludG8gYSBsb2NhbCBtb2RlbFxuICAgICAgICAgICAgICAgIHZhciBzeW5jT2JqZWN0ID0gc3luYy4kYXNPYmplY3QoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY09iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnZ2FtZUFwcGwnKS5zZXJ2aWNlKCdTZmlyZScsIFsnJGZpcmViYXNlJywgJyRxJywgZnVuY3Rpb24gKCRmaXJlYmFzZSwgJHEpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lDdVpzSnlEVGh3aWxUTS02Vi1iRVZsYThJdW8zdW8yTzhcIixcbiAgICAgICAgICAgIGF1dGhEb21haW46IFwiZ2FtZWFyZWEtZTk4ZWMuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2dhbWVhcmVhLWU5OGVjLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwiZ2FtZWFyZWEtZTk4ZWNcIixcbiAgICAgICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwiZ2FtZWFyZWEtZTk4ZWMuYXBwc3BvdC5jb21cIixcbiAgICAgICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgzNzE0MjM4MzI1NFwiXG4gICAgICAgIH07XG4gICAgICAgIHZhciBkZWZhdWx0QXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xuICAgICAgICBsZXQgZGF0YWJhc2UgPSBkZWZhdWx0QXBwLmRhdGFiYXNlLmxpc3QoJy8nKTtcbiAgICAgICAgY29uc29sZS50YWJsZShkYXRhYmFzZSk7XG5cblxuXG4gICAgfV0pOyIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLmNvbnRyb2xsZXIoJ2N0cmxBY2NvdW50JywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgRGF0YVNlcnZpY2VTUUwsICR3aW5kb3cpIHtcbiAgICAkcm9vdFNjb3BlLiRlbWl0KCdjaGFuZ2VNZW51JywgJ2FjY291bnQnKTtcbiAgICBsZXQgdXNlck9iaiA9IEpTT04ucGFyc2UoJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luZWRcIikpO1xuICAgICRzY29wZS5uYW1lID0gdXNlck9iai5mbmFtZTtcbiAgICAkc2NvcGUuZW1haWwgPSB1c2VyT2JqLmVtYWlsO1xuICAgICRzY29wZS5waG9uZSA9IHVzZXJPYmoucGhvbmU7XG4gICAgJHNjb3BlLmFkZHJlc3MgPSB1c2VyT2JqLmFkZHJlc3M7XG4gICAgJHNjb3BlLmNpdHkgPSB1c2VyT2JqLmNpdHk7XG4gICAgbGV0IGlkX3VzZXIgPSB1c2VyT2JqLmlkX3VzZXI7XG5cbiAgICBEYXRhU2VydmljZVNRTC5yZWFkKDgsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICRzY29wZS5wYWdlID0gcmVzdWx0LnBhZ2U7XG4gICAgICAgICAgICAkc2NvcGUudGl0bGUgPSByZXN1bHQudGl0bGU7XG4gICAgICAgICAgICAkc2NvcGUuY29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBEYXRhU2VydmljZVNRTC5nZXRVc2VyR2FtZXMoaWRfdXNlciwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBHYW1lczpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCksIFwiY29sb3I6IGdyZWVuO1wiKTtcbiAgICAgICAgICAgICQoJyN1c2VyR2FtZXMnKS5kYXRhVGFibGUoe1xuXG4gICAgICAgICAgICAgICAgXCJzRG9tXCI6ICdUPFwiY2xlYXJcIj5sZnJ0aXAnLFxuICAgICAgICAgICAgICAgIFwib1RhYmxlVG9vbHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNTd2ZQYXRoXCI6IFwibGliL3RhYmxldG9vbHMvc3dmL2NvcHlfY3N2X3hsc19wZGYuc3dmXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYUJ1dHRvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic0V4dGVuZHNcIjogXCJwZGZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNCdXR0b25UZXh0XCI6IFwiU2F2ZSBhcyBQREZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNFeHRlbmRzXCI6IFwieGxzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzQnV0dG9uVGV4dFwiOiBcIlNhdmUgZm9yIEV4Y2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJiRGVzdHJveVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiYkxlbmd0aENoYW5nZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiYkF1dG9XaWR0aFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImFhRGF0YVwiOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgXCJhYVNvcnRpbmdcIjogW1sxLCBcImRlc2NcIl1dLFxuICAgICAgICAgICAgICAgIFwiYW9Db2x1bW5zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1wibURhdGFcIjogXCJpZF9nYW1lXCIsIFwic1RpdGxlXCI6IFwiR2FtZSBJZFwifSxcbiAgICAgICAgICAgICAgICAgICAge1wibURhdGFcIjogXCJuYW1lXCIsIFwic1RpdGxlXCI6IFwiR2FtZSBuYW1lXCIsIFwic0NsYXNzXCI6IFwiY29sdW1uWCBjZW50ZXJcIn0sXG4gICAgICAgICAgICAgICAgICAgIHtcIm1EYXRhXCI6IFwic2hvcnRzXCIsIFwic1RpdGxlXCI6IFwiU2hvcnQgRGVzY3JpcHRpb25cIiwgXCJzQ2xhc3NcIjogXCJjb2x1bW5YIGNlbnRlclwifSxcbiAgICAgICAgICAgICAgICAgICAge1wibURhdGFcIjogXCJyZXN1bHRcIiwgXCJzVGl0bGVcIjogXCJSZXN1bHRcIiwgXCJzQ2xhc3NcIjogXCJjb2x1bW5YIGNlbnRlclwifSxcbiAgICAgICAgICAgICAgICAgICAge1wibURhdGFcIjogXCJ0eXBlXCIsIFwic1RpdGxlXCI6IFwiR2FtZSBUeXBlXCIsIFwic0NsYXNzXCI6IFwiY29sdW1uWCBjZW50ZXJcIn0sXG4gICAgICAgICAgICAgICAgICAgIHtcIm1EYXRhXCI6IFwiaW1nXCIsIFwic1RpdGxlXCI6IFwiSW1hZ2VcIiwgXCJzQ2xhc3NcIjogXCJjb2x1bW5YIGNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtUmVuZGVyXCI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNGdWxsbmFtZTpcIiArIEpTT04uc3RyaW5naWZ5KHJvdyksIFwiY29sb3I6Z3JlZW47XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPSd1cGxvYWQvXCIgKyByb3cuaW1nICsgXCInIGFsdD0nJyB0aXRsZT0nJz5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cblxuXG5cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2dhbWVBcHBsJykuY29udHJvbGxlcignY3RybENvbnRhY3QnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCBEYXRhU2VydmljZVNRTCkge1xuICAgICRyb290U2NvcGUuJGVtaXQoJ2NoYW5nZU1lbnUnLCAnY29udGFjdCcpO1xuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWQoMiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgJHNjb3BlLnBhZ2UgPSByZXN1bHQucGFnZTtcbiAgICAgICAgICAgICRzY29wZS50aXRsZSA9IHJlc3VsdC50aXRsZTtcbiAgICAgICAgICAgICRzY29wZS5jb250ZW50ID0gcmVzdWx0LmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2dhbWVBcHBsJykuY29udHJvbGxlcignY3RybERlbW8nLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCBEYXRhU2VydmljZVNRTCkge1xuICAgIGxldCBob21lID0gMDtcbiAgICBsZXQgdHlwZSA9IFwiZnJlZVwiO1xuICAgICRyb290U2NvcGUuJGVtaXQoJ2NoYW5nZU1lbnUnLCAnZGVtbycpO1xuXG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZCgzLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAkc2NvcGUucGFnZSA9IHJlc3VsdC5wYWdlO1xuICAgICAgICAgICAgJHNjb3BlLnRpdGxlID0gcmVzdWx0LnRpdGxlO1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSByZXN1bHQuY29udGVudDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZEdhbWVzTGlzdChob21lLCB0eXBlLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUuaW5mbyhcIiVjIFJlYWQgSG9tZSBHYW1lcyBTdGF0dXM6XCIgKyBkYXRhLnN0YXR1cywgXCJjb2xvcjpvcmFuZ2VcIik7XG4gICAgICAgIC8vY29uc29sZS5pbmZvKFwiJWNSZWFkSG9tZUdhbWVzOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLmRhdGEpLCBcImNvbG9yOmdyZWVuXCIpO1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAkc2NvcGUuZ2FtZXMgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLmNvbnRyb2xsZXIoJ2N0ckhvbWUnLCBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJ0RhdGFTZXJ2aWNlU1FMJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgRGF0YVNlcnZpY2VTUUwpIHtcbiAgICAgICAgbGV0IGhvbWUgPSAxO1xuICAgICAgICBsZXQgdHlwZSA9IFwiZnJlZVwiO1xuICAgICAgICBEYXRhU2VydmljZVNRTC5yZWFkKDEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICRzY29wZS5ob21lY29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgRGF0YVNlcnZpY2VTUUwucmVhZEdhbWVzTGlzdChob21lLCB0eXBlLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmluZm8oXCIlYyBSZWFkIEhvbWUgR2FtZXMgU3RhdHVzOlwiICsgZGF0YS5zdGF0dXMsIFwiY29sb3I6b3JhbmdlXCIpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmluZm8oXCIlY1JlYWRIb21lR2FtZXM6XCIgKyBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuZGF0YSksIFwiY29sb3I6Z3JlZW5cIik7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICRzY29wZS5wb3BnYW1lcyA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIERhdGFTZXJ2aWNlU1FMLnJlYWRXaW5uZXJzKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLndpbm5lcnMgPSBkYXRhLmRhdGEuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRyb290U2NvcGUuJGVtaXQoJ2NoYW5nZU1lbnUnLCAnaG9tZScpO1xuXG5cbiAgICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2FtZUFwcGwnKS5jb250cm9sbGVyKCdjdHJsTG9naW4nLCBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJyRsb2NhdGlvbicsICdEYXRhU2VydmljZVNRTCcsICckd2luZG93JywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCBEYXRhU2VydmljZVNRTCwgJHdpbmRvdykge1xyXG4gICAgICAgIGxldCByZXN1bHRfc2VuZCA9IGZhbHNlO1xyXG4gICAgICAgICRzY29wZS5yZXN1bHRNZXNhZ2dlID0gJyc7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlY2N0cmxvZ2luIFwiLCBcImNvbG9yOmJsdWU7XCIpO1xyXG5cclxuICAgICAgICAkc2NvcGUuc2VuZFZhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHVzZXJuYW1lID0gKHR5cGVvZiAkc2NvcGUudXNlcm5hbWUgPT09ICd1bmRlZmluZWQnKSA/ICdncmVncCcgOiAkc2NvcGUudXNlcm5hbWU7XHJcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9ICh0eXBlb2YgJHNjb3BlLnBhc3N3b3JkID09PSAndW5kZWZpbmVkJykgPyAnR3AxMjM0NTYnIDogJHNjb3BlLnBhc3N3b3JkO1xyXG4gICAgICAgICAgICBsZXQgbG9naW52YWx1ZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjU2VuZCB2YWx1ZXMgdG8gbG9naW46XCIgKyBKU09OLnN0cmluZ2lmeShsb2dpbnZhbHVlcyksIFwiY29sb3I6bGlnaHRncmVlbjtcIik7XHJcblxyXG4gICAgICAgICAgICBEYXRhU2VydmljZVNRTC5sb2dpbihsb2dpbnZhbHVlcywgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1NlbmQgdmFsdWVzIHJlc3VsdDpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCksIFwiY29sb3I6ZGFya2dyZWVuO1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzVGV4dCA9PT0gJ09LJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5jb2RlID09PSAtOTk5IHx8IHJlc3VsdC5kYXRhLmNvZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlc3VsdE1lc2FnZ2UgPSBcIkVycm9yOlwiICsgcmVzdWx0LmRhdGEubXNnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5yZXN1bHRNZXNhZ2dlID0gXCJMb2dpbiBzdWNjZXNzZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luZWRcIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmRhdGEuY29kZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRlbWl0KFwibG9naW5cIiwgcmVzdWx0LmRhdGEuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVzdWx0TWVzYWdnZSA9IFwiRXJyb3I6XCIgKyByZXN1bHQuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5yZXN1bHRNc2dMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgkc2NvcGUucmVzdWx0TWVzYWdnZSA9PT0gJycpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJHJvb3RTY29wZS4kb24oXCJwb3dlckxvZ2luXCIsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjcG93ZXJMb2dpbiBPbjpcIiArIGRhdGEsIFwiY29sb3I6Z3JlZW47XCIpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VuZFZhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1dKTsiLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnZ2FtZUFwcGwnKS5jb250cm9sbGVyKCdjdHJsUmVhbCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsIERhdGFTZXJ2aWNlU1FMKSB7XG4gICAgbGV0IGhvbWUgPSAwO1xuICAgIGxldCB0eXBlID0gXCJyZWFsXCI7XG4gICAgJHJvb3RTY29wZS4kZW1pdCgnY2hhbmdlTWVudScsICdyZWFsJyk7XG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZCg3LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAkc2NvcGUucGFnZSA9IHJlc3VsdC5wYWdlO1xuICAgICAgICAgICAgJHNjb3BlLnRpdGxlID0gcmVzdWx0LnRpdGxlO1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSByZXN1bHQuY29udGVudDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZEdhbWVzTGlzdChob21lLCB0eXBlLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUuaW5mbyhcIiVjIFJlYWQgSG9tZSBHYW1lcyBTdGF0dXM6XCIgKyBkYXRhLnN0YXR1cywgXCJjb2xvcjpvcmFuZ2VcIik7XG4gICAgICAgIC8vY29uc29sZS5pbmZvKFwiJWNSZWFkSG9tZUdhbWVzOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLmRhdGEpLCBcImNvbG9yOmdyZWVuXCIpO1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAkc2NvcGUuZ2FtZXMgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLmNvbnRyb2xsZXIoJ2N0cmxSZWdpc3RyYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCBEYXRhU2VydmljZVNRTCkge1xuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWQoNCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgJHNjb3BlLnBhZ2UgPSByZXN1bHQucGFnZTtcbiAgICAgICAgICAgICRzY29wZS50aXRsZSA9IHJlc3VsdC50aXRsZTtcbiAgICAgICAgICAgICRzY29wZS5jb250ZW50ID0gcmVzdWx0LmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ2FtZUFwcGwnKS5jb250cm9sbGVyKCdjdHJsU2lnbicsIFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnRGF0YVNlcnZpY2VTUUwnLCAnJHdpbmRvdycsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsIERhdGFTZXJ2aWNlU1FMLCAkd2luZG93KSB7XHJcbiAgICAgICAgJHNjb3BlLnJlc01zZyA9ICcnO1xyXG5cclxuICAgICAgICAkc2NvcGUuc2VuZFZhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGNsaWVudCA9IHtmbmFtZTogJycsIGFkZHJlc3M6ICcnLCBjaXR5OiAnJywgZW1haWw6ICcnLCB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJywgcGhvbmU6ICcnfTtcclxuICAgICAgICAgICAgbGV0IHVzZXIgPSB7Zm5hbWU6ICcnLCBhZGRyZXNzOiAnJywgY2l0eTogJycsIGVtYWlsOiAnJywgdXNlcm5hbWU6ICcnLCBwaG9uZTogJyd9O1xyXG4gICAgICAgICAgICBjbGllbnQuZm5hbWUgPSAkc2NvcGUuY2xpZW50LmZuYW1lO1xyXG4gICAgICAgICAgICBjbGllbnQuY2l0eSA9ICRzY29wZS5jbGllbnQuY2l0eTtcclxuICAgICAgICAgICAgY2xpZW50LmVtYWlsID0gJHNjb3BlLmNsaWVudC5lbWFpbDtcclxuICAgICAgICAgICAgY2xpZW50LmFkZHJlc3MgPSAkc2NvcGUuY2xpZW50LmFkZHJlc3M7XHJcbiAgICAgICAgICAgIGNsaWVudC51c2VybmFtZSA9ICRzY29wZS5jbGllbnQudXNlcm5hbWU7XHJcbiAgICAgICAgICAgIGNsaWVudC5wYXNzd29yZCA9ICRzY29wZS5jbGllbnQucGFzc3dvcmQ7XHJcbiAgICAgICAgICAgIGNsaWVudC5waG9uZSA9ICRzY29wZS5jbGllbnQucGhvbmU7XHJcbiAgICAgICAgICAgIHVzZXIuZm5hbWUgPSAkc2NvcGUuY2xpZW50LmZuYW1lO1xyXG4gICAgICAgICAgICB1c2VyLmNpdHkgPSAkc2NvcGUuY2xpZW50LmNpdHk7XHJcbiAgICAgICAgICAgIHVzZXIuZW1haWwgPSAkc2NvcGUuY2xpZW50LmVtYWlsO1xyXG4gICAgICAgICAgICB1c2VyLmFkZHJlc3MgPSAkc2NvcGUuY2xpZW50LmFkZHJlc3M7XHJcbiAgICAgICAgICAgIHVzZXIudXNlcm5hbWUgPSAkc2NvcGUuY2xpZW50LnVzZXJuYW1lO1xyXG4gICAgICAgICAgICB1c2VyLnBob25lID0gJHNjb3BlLmNsaWVudC5waG9uZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNsaWVudCkpO1xyXG5cclxuICAgICAgICAgICAgRGF0YVNlcnZpY2VTUUwuYWRkTmV3VXNlcihjbGllbnQsIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNBcnJpdmVkIHJlc3VsdDpcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCksIFwiY29sb3I6IGdyZWVuO1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzVGV4dCA9PT0gJ09LJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5jb2RlID09PSAtOTk5IHx8IHJlc3VsdC5kYXRhLmNvZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlc01zZyA9IFwiRXJyb3I6XCIgKyByZXN1bHQuZGF0YS5tc2c7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlc01zZyA9IFwiU3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9naW5lZFwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChcIiNidG5TaWduXCIpLnRyaWdnZXIoXCJjbGlja1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kZW1pdChcImxvZ2luXCIsIGNsaWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVzTXNnID0gXCJFcnJvcjpcIiArIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5yZXN1bHRNc2cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoJHNjb3BlLnJlc01zZyA9PT0gJycpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfV0pOyIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLmNvbnRyb2xsZXIoJ2N0cmxSZWNvbWVuZGF0aW5zJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgRGF0YVNlcnZpY2VTUUwsICR3aW5kb3cpIHtcbiAgICAkcm9vdFNjb3BlLiRlbWl0KFwiY2hhbmdlTWVudVwiLCAncmVjb21lbmRhdGlvbnMnKTtcblxuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWQoNiwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICAgICAgJHNjb3BlLnBhZ2UgPSByZXN1bHQucGFnZTtcbiAgICAgICAgICAgICRzY29wZS50aXRsZSA9IHJlc3VsdC50aXRsZTtcbiAgICAgICAgICAgICRzY29wZS5jb250ZW50ID0gcmVzdWx0LmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIERhdGFTZXJ2aWNlU1FMLnJlYWRSZWNvbWVuZGF0aW9ucyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZGF0YS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90ZXNcIiwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgIH1cblxuXG4gICAgfSk7XG5cblxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2dhbWVBcHBsJykuY29udHJvbGxlcignY3RybFN0cmlwd2lubmVycycsIGZ1bmN0aW9uICgkc2NvcGUsIERhdGFTZXJ2aWNlU1FMKSB7XG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZE5ld3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmluZm8oXCIlY05ld3M6XCIgKyBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuZGF0YSksIFwiY29sb3I6Z3JlZW5cIik7XG4gICAgICAgICAgICAkc2NvcGUubmV3cyA9IGRhdGEuZGF0YS5kYXRhO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIndXNlIHN0cmljdCdcclxuYW5ndWxhci5tb2R1bGUoJ2dhbWVBcHBsJykuY29udHJvbGxlcignY3RybFRvcG1lbnUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93LCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgdXNlcl9sb2dpbiA9IG51bGw7XHJcblxyXG5cclxuICAgICRyb290U2NvcGUuJG9uKFwibG9naW5cIiwgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlY0xvZ2luXCIsIFwiY29sb3I6Z3JlZW5cIik7XHJcbiAgICAgICAgdXNlcl9sb2dpbiA9IEpTT04ucGFyc2UoJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luZWRcIikpO1xyXG4gICAgICAgIGFuZ3VsYXIuZWxlbWVudChcIiNhbm9uaW1cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjbG9naW5lZFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiN1c2VyX3ZhbHVlc1wiKS5odG1sKGRhdGEuZm5hbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWNjdHJUb3BtZW51IERvY3VtZW50IHJlYWR5XCIsIFwiY29sb3I6Ymx1ZTtcIik7XHJcblxyXG5cclxuICAgICAgICBpZiAoJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luZWRcIikgPT09IFwidW5kZWZpbmVkXCIgfHwgJHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luZWRcIikgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KFwiI2Fub25pbVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChcIiNsb2dpbmVkXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiN1c2VyX3ZhbHVlc1wiKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgJHJvb3RTY29wZS4kZW1pdChcInBvd2VyTG9naW5cIiwgXCJEZWZhdWx0IFVzZXJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KFwiI2Fub25pbVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjbG9naW5lZFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIHVzZXJfbG9naW4gPSBKU09OLnBhcnNlKCR3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpbmVkXCIpKTtcclxuICAgICAgICAgICAgJChcIiN1c2VyX3ZhbHVlc1wiKS5odG1sKHVzZXJfbG9naW4uZm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KFwiI2Fub25pbVwiKS5zaG93KCk7XHJcbiAgICAgICAgYW5ndWxhci5lbGVtZW50KFwiI2xvZ2luZWRcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjdXNlcl92YWx1ZXNcIikuaHRtbCgnJyk7XHJcbiAgICAgICAgJHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ2luZWRcIik7XHJcbiAgICAgICAgdXNlcl9sb2dpbiA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRTdGF0dXNVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodXNlcl9sb2dpbiA9PT0gbnVsbCkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICB9O1xyXG5cclxuXHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdnYW1lQXBwbCcpLmNvbnRyb2xsZXIoJ2N0cmxUZXJtcycsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsIERhdGFTZXJ2aWNlU1FMKSB7XG4gICAgJHJvb3RTY29wZS4kZW1pdChcImNoYW5nZU1lbnVcIiwgJ3Rlcm1zJyk7XG4gICAgRGF0YVNlcnZpY2VTUUwucmVhZCg1LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiJWNBcnJpdmVkIHJlc3VsdDpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwpLCBcImNvbG9yOiBncmVlbjtcIik7XG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBkYXRhLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICRzY29wZS5wYWdlID0gcmVzdWx0LnBhZ2U7XG4gICAgICAgICAgICAkc2NvcGUudGl0bGUgPSByZXN1bHQudGl0bGU7XG4gICAgICAgICAgICAkc2NvcGUuY29udGVudCA9IHJlc3VsdC5jb250ZW50O1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=
