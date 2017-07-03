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
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ({

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


gameAppl.config(function ($stateProvider, $urlRouterProvider) {
    //$localStorageProvider.set("counter", 1);
    $urlRouterProvider.otherwise('/');
    console.log("Config start");
    $stateProvider.state('Home', {
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
    }).state('Terms', {
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
    }).state('ContactUs', {
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
    }).state('Registration', {
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
    }).state('Account', {
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
    }).state('Recommendations', {
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
    }).state('Demo', {
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
    }).state('Real', {
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

/***/ })

/******/ });