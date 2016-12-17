var blocChat = angular.module('blocChat', ['firebase', 'ui.router']);

blocChat.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
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
    
}]);
                
blocChat.factory('Room', ['$firebaseArray', function($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    rooms = $firebaseArray(ref);
    rooms = ["room 1", "room 2", "room 3", "room 4", "room 5", "room 6"];
    
   
    return {
        all : rooms
    }
}]);

blocChat.controller('HomeCtrl', [ '$scope', 'Room', function( $scope, Room) {
    $scope.rooms = Room.all;
}]);
                
                
                
                
