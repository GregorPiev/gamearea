'use strict';
var angular = require('angular');
var uirouter = require("angular-ui-router");
var ngRoute = require('angular-route');
var ngSanitize = require('sanitize');

let gameAppl = angular.module('gameAppl', ['ngRoute', 'uirouter', 'ngSanitize']);