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
