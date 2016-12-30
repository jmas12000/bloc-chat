(function() {
    function Messages($firebaseArray) {
        //var ref = firebase.database().ref().child('messages');
        //var messageRef = $firebaseArray(ref);
        function getByRoomId (roomId) {
      //    console.log(roomId);
      //    var  x= $firebaseArray(ref);
      //    var  x= $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      //    console.log(x);
      //    return x;
            var ref = firebase.database().ref().child('messages').orderByChild("roomId").equalTo(roomId);
            var messages = $firebaseArray(ref);
            console.log(messages);
            return messages;
        };
        return {
            getByRoomId : getByRoomId
        };
    };

    angular
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', Messages]);
})();
