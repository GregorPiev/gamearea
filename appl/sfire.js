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