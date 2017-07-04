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


