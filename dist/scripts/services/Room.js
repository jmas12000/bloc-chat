/*rooms is a direct decendent of our blocChat app and is being referenced by .child('rooms') to be able to retrieve and save data to the appropriate spot in our firebase storage
var allRooms has taken over our page and all functions on the page now become methods to it. To access these methods, we still call Room.someMeathod but the keys being used are now
a part of the allRooms object. allRooms.all = rooms ensures us that home can still update to it with the this.rooms = Room.all decleration.*/
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
