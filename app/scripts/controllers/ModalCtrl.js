(function() {
    function ModalCtrl($uibModalInstance, $scope, Room) {
        
       $scope.create = function() {
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
        .controller('ModalCtrl',[ '$uibModalInstance', '$scope', 'Room', ModalCtrl]);
})();   
   

