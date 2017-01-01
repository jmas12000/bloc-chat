/*Run block added to the main blocChat module. If info needs to be retained, or meathods need to be re-used, it would be better to put this into a factory or service. $cookies can be
injected into other controllers or services to store, retrieve or delete info retained by the $cookies service. $cookies are a good way to hold user data through Angulars CRUD way.
ngCookies must be injected into the main module and $cookies into the user modules to effectively use them. Run blocks happen after the config stage of the build. */
(function() {
    function CookiesRunModal($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/newUserModal.html',
                controller: 'AddUserModalCtrl',
                backdrop: 'static',
                keyboard: false
            });
        }else {
            console.log("User " + currentUser + " is logged in right now");
        }
    };

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', CookiesRunModal]);
})();
