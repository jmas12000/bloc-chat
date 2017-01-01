(function() {
    function HomeCtrl(Room, $uibModal, Messages, $cookies, $scope) {
        this.rooms = Room.all;

/*function to set messages and store room and roomId in $cookies to keep track of them even if page refreshes*/
        this.roomSelected = function(room) {
            var roomId= room.$id;
            $cookies.put('blocChatCurrentRoomId', roomId);
            this.currentRoom = room;
            $cookies.put('blocChatCurrentRoom', room);
            var roomMessages = Messages.getByRoomId(roomId);
            this.messages = roomMessages;
        };

/*called from home.html, it opens the addRoomModal to create new rooms. Actual storage is done by Room service and is displayable to the home view by use of this.rooms=Room.all*/
        this.modalOpen = function() {
            $uibModal.open({
                templateUrl: '/templates/addRoomModal.html',
                controller: 'AddRoomModalCtrl'
            });
        };

/*function to create new messages by use of ng-model and ng-submit. With $cookies injected as a dependency, we're able to "get" the current user and roomId to assoc. new messages with.*/
        this.createNewMessage= function() {
            var messageToSubmit = this.newMessage;
            var theCurrentUser = $cookies.get('blocChatCurrentUser');
            var currentRoomsId = $cookies.get('blocChatCurrentRoomId');
            Messages.send(messageToSubmit, theCurrentUser, currentRoomsId);
            this.newMessage = "";
        };
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Messages','$cookies', '$scope', HomeCtrl]);
})();
