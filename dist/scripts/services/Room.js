(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        var allRooms={};
        allRooms.all= rooms;

        /**
        * @function addRooms
        * @desc adds new rooms to firebase
        * @param {Object} room
        */
        allRooms.addRoom = function(room) {
            rooms.$add({ name : room });
        };
        return allRooms;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray',  Room]);
})();
