/*Controller that talks directly to the addRoomModal by means of $scope & passes the new rooms name to the Room service to be added to firebase*/
(function() {
    function AddRoomModalCtrl($uibModalInstance, $scope, Room) {
        $scope.roomCreate = function() {
            var roomToAdd=$scope.newRoom;
            if (roomToAdd) {
                Room.addRoom(roomToAdd);
                $uibModalInstance.close('Submitted');
            }else {
                $uibModalInstance.close('Error');
            }
        };

        $scope.close = function() {
            $uibModalInstance.close('Closed');
        };

        $scope.cancel = function() {
            $uibModalInstance.close('Canceled');
        };
    }

    angular
        .module('blocChat')
        .controller('AddRoomModalCtrl',['$uibModalInstance', '$scope', 'Room', AddRoomModalCtrl]);
})();
