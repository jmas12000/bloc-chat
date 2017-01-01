/*var ref sets a reference point to which the controller needs to put or get information from firebase. var messages tells the info it should be in array format and must have $firebaseArray
injected as a dependency to use. $filter is used to format the date input and has many other things it can filter as well.*/
(function() {
    function Messages($firebaseArray, $filter) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);

/*orderByChild('roomId') is telling the parent 'messages' that the info we're interested in comparing is a child  of theirs 'roomId' and .equalTo holds the actual value of the roomId
we're trying to find. Server communication like this is a asynchronous operation and often would often need to add a promise and resolve to it to ensure that the data is available before
the next step of the function should continue.*/

        return {
            getByRoomId : function(roomId) {
                var messageList = ref.orderByChild('roomId').equalTo(roomId);
                var messages = $firebaseArray(messageList);
                return messages;
            },

/*Angular is an Object Oriented Programming framework and firebase is JSON. This is why we add values through the ({content: newMessage}) way. We are accessing and updating the objects keys. */

            send : function(newMessage, currentUser, currentRoomId) {
                var currentTime = $filter('date')(new Date(), 'MM-dd-yy HH:mm:ss');
                messages.$add({
                    content: newMessage,
                    username: currentUser,
                    roomId: currentRoomId,
                    sentAt: currentTime
                })
            }
        }
    };

    angular
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', '$filter', Messages]);
})();
