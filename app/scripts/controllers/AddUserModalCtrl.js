/*Ctrlr talking to newUserModal to create a new user. Use of $uibModalInstance enables us to close, submit or cancel the Modal, communication is done through $scope
because of controller association in run block*/
(function () {
    function AddUserModalCtrl( $uibModalInstance, $scope, $cookies) {
        $scope.userCreate = function() {
            var userToAdd = $scope.newUser;
            if(userToAdd) {
                $uibModalInstance.close('Submitted');
                $cookies.put('blocChatCurrentUser', userToAdd);
            }
        };
    }

    angular
        .module('blocChat')
        .controller('AddUserModalCtrl',['$uibModalInstance', '$scope', '$cookies', AddUserModalCtrl]);
})();
