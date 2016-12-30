(function() {
    function HomeCtrl(Room, $uibModal, Messages) {
        this.rooms = Room.all;
        this.currentRoom = null;
        //this.messages=Messages.all;
        //this.message=roomSelected.messages;
        this.roomSelected = function(room) {
            this.currentRoom = room;
            this.messages = Messages.getByRoomId(room.$id);
        };

        this.modalOpen = function() {
            $uibModal.open({
                templateUrl: '/templates/addRoomModal.html',
                controller: 'AddRoomModalCtrl'
            });
        };
     // this.messages= function() {
     //     if(currentRoom) {
        //      console.log(currentRoom.name);
        //      return Messages.getByRoomId(room.$id);
        //  }
        //  else {
        //      return [];
        //  }
     // }
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Messages', HomeCtrl]);
})();
