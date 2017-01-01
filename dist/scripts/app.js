/*Main module of blocChat. Main service injections happen here. The first stage of the Angular build is .config  which enables us to establish routes throughout the app with $stateProvider
and $routeProvider as well as disable hashBang mode with $locationProvider. iu-router gets injected here to enable us to use the controller as syntax. This enables us to refer
to $scope as 'this' when a controller is communicating to its associated view (html page) */
(function() {
    function config($stateProvider, $locationProvider) {

        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})();
