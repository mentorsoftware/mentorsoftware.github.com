console.log('Loaded controller');
var ctrlMod=require('./controllersModule');

ctrlMod.controller('MainController',function($scope, $injector, $log) {
    $scope.name="name";
    $scope.toggleLeft = function() {
        console.log('left');

    }
});

