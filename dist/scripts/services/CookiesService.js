(function() {
    function CookiesService($cookies, $uibModal, $rootScope) {
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/newUserModal.html',
                controller: 'CookiesCtrl',
                backdrop: 'static',
                keyboard: false
            });
        }else {
            console.log("User " + currentUser + " is logged in right now");
        }
        $rootScope.addedUser = function(user) {
            console.log("back in CookieService function, Going to add "+ user+ " as current user");
            $cookies.put('blocChatCurrentUser', user);
        };
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal','$rootScope', CookiesService]);
})();
