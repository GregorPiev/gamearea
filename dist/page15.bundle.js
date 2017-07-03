/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


gameAppl.service('DataService', function ($http) {
    this.read = function (url, callback) {
        $http({
            method: "POST",
            url: "../gamearea/data/" + url + ".json",
            headers: { 'Content-type': 'application/json' }
        }).then(function success(response) {
            //console.table(response);
            callback(response);
        }, function error(err) {
            console.error(err);
        });
    };
});

gameAppl.service('frService', function ($http) {
    this.read = function (url, callback) {
        $http({
            method: "GET",
            url: "https://gamearea-e98ec.firebaseio.com/" + url + ".json",
            headers: { 'Content-type': 'application/json' }
        }).then(function success(response) {
            //console.table(response);
            callback(response);
        }, function error(err) {
            console.error(err);
        });
    };

    this.addUser = function (data, callback) {
        $http({
            method: "POST",
            url: "https://gamearea-e98ec.firebaseio.com/users.json",
            data: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function success(res) {
            console.log("%cSuccess", "color:blue");
            console.log(res);
            callback(res);
        }, function error(err) {
            console.log("%cError", "color:#900");
            console.error(err);
            callback(err);
        });
    };

    this.login = function login(user, pass, callback) {
        $http({
            Method: 'GET',
            url: 'https://gamearea-e98ec.firebaseio.com/users.json?orderBy="username"&equelTo="' + user + '"',
            headers: { 'Content-type': 'application/json' }
        }).then(function success(res) {
            console.log("%cSuccess", "color:blue");
            console.log(res);
            callback(res);
        }, function (error) {
            console.log("%cError", "color:#900");
            console.error(error);
            callback(error);
        });
    };
});

gameAppl.service('DataServiceSQL', function ($http) {
    /**
     *
     * @param {type} idpage
     * @param {type} callback
     * @returns {undefined}
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
        }).then(function success(response) {
            // console.error("%cSuccess Read Page:" + JSON.stringify(response), "color:blue;");
            callback(response);
        }, function error(err) {
            //console.error("%cError Read Page:" + JSON.stringify(resp), "color:#f00;");
            callback(resp);
        });
    };

    /**
     *
     * @param {type} callback
     * @returns {undefined}
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
            headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'POST, GET, OPTION, PUT, DELETE', 'Access-Control-Allow-Origin': '*' }
        }).then(function success(resp) {
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
     * @returns {undefined}
     */
    this.readWinners = function (callback) {
        let postdata = {
            op: 'winners'
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'GET, POST, OPTION, PUT, DELTE', 'Access-Control-Allow-Origin': '*' }
        }).then(function success(resp) {
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
     * @returns {undefined}
     */
    this.readNews = function (callback) {
        let postdata = {
            op: 'news'
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'POST,GET,OPTION,PUT,DELETE', 'Access-Control-Allow-Origin': '*' }
        }).then(function success(resp) {
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
     * @returns {undefined}
     */
    this.readRecomendations = function (callback) {
        let postdata = {
            op: 'recomendations'
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'POST,GET,OPTION,PUT,DELETE', 'Access-Control-Allow-Origin': '*' }
        }).then(function success(resp) {
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
     * @returns {undefined}
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
            headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'PUT,POST,GET,OPTION,DELETE', 'Access-Control-Allow-Original': '*' }
        }).then(function (resp) {
            console.log("%cSuccess addUser:" + JSON.stringify(resp), "color:blue");
            callback(resp);
        }, function (error) {
            console.log("%cError addUser:" + JSON.stringify(resp), "color:#f00");
            callback(error);
        });
    };

    this.login = function (data, callback) {
        let postdata = {
            op: 'login',
            data: data
        };
        $http({
            method: 'POST',
            url: '../gamearea/php/api.php',
            data: JSON.stringify(postdata),
            headers: { 'Content-type': 'application/json', 'Access-Control-Allow-Methods': 'PUT,POST,GET,OPTION,DELETE', 'Access-Control-Allow-Original': '*' }
        }).then(function (resp) {
            callback(resp);
        }, function (error) {
            callback(error);
        });
    };
});

/***/ })

/******/ });