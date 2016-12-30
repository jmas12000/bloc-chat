(function () {
    function CookiesCtrl( $uibModalInstance, $scope, $rootScope) {
        $scope.userCreate = function() {
            var userToAdd = $scope.newUser;
            
            if(userToAdd) {
                $uibModalInstance.close('Submitted');
                $scope.addedUser(userToAdd);
            }
        };
    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl',['$uibModalInstance', '$scope', '$rootScope', CookiesCtrl]);
})();
