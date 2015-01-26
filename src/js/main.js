(function() {
    angular.module('app.controllers',[]).controller('MainController',function($scope, $injector, $log) {
        $scope.name = "name";
        console.log('Controller loaded');
    });

    var app=angular.module('app', ['app.controllers']);
    console.log('script');
})();