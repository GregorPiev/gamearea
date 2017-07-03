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
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


gameAppl.controller('ctrlSign', ['$scope', '$rootScope', 'DataServiceSQL', '$window', function ($scope, $rootScope, DataServiceSQL, $window) {
    $scope.resMsg = '';

    $scope.sendVal = function () {
        let client = { fname: '', address: '', city: '', email: '', username: '', password: '', phone: '' };
        let user = { fname: '', address: '', city: '', email: '', username: '', phone: '' };
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
        return $scope.resMsg === '' ? false : true;
    };
}]);

/***/ })

/******/ });