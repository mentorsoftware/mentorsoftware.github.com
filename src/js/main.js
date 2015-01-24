(function() {
    angular.module('app.controllers',[]).controller('MainController',function($scope, $injector, $mdSidenav, $log) {
        $scope.name = "name";
        console.log('Controller loaded');
    });

    var app=angular.module('app', ['ngMaterial','app.controllers']);
    console.log('script');
})();