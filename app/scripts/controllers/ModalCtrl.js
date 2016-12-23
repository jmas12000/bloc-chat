
(function() {
    function ModalCtrl($uibModalInstance, $scope, Room) {
        
       $scope.create=function(addRoom) {
           
            if ($scope.newRoom) {
             Room.addRoom($scope.newRoom); 
             $uibModalInstance.close('Submitted');
    
            }else {
               $uibModalInstance.close('Error');
            }  
            
        };
        $scope.close = function() {
            $uibModalInstance.close('Close');
        };

        $scope.cancel = function() { 
            
            $uibModalInstance.close('Cancel');
        };
    }
        
    angular
        .module('blocChat')
        .controller('ModalCtrl',[ '$uibModalInstance', '$scope', 'Room', ModalCtrl]);
})();   

