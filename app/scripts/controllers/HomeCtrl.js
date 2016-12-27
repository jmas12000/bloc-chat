(function () {
    function HomeCtrl(Room, $uibModal, Messages) {
        this.rooms = Room.all;
        this.currentRoom= null;
        //this.messages=Messages.all;
        //this.message=roomSelected.messages;
        this.roomSelected = function(room) {
            this.currentRoom = room;
            this.messages=Messages.getByRoomId(room.$id);
            //console.log(currentRoom.name);
        };

        this.modalOpen= function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl'
            });
        };
        // this.messages= function() {
        //   if(currentRoom) {
        //       console.log(currentRoom.name);
        //       return Messages.getByRoomId(room.$id);
        //   }
        //   else {
        //     return [];
        //   }
        // }
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$uibModal', 'Messages', HomeCtrl]);
})();
