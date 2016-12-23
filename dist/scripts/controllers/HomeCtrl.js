(function () {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
          
        this.modalOpen= function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl'
            }); 
        };
    }
           
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);    
})();
