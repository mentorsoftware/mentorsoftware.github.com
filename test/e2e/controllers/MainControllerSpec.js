'use strict';
require('angular/angular');
require('angular-mocks/angular-mocks');

//var app=require('../../../src/js/app');
var app=require('../../../src/js/controllers');


describe('Unit: MainCtrl', function() {

    var ctrl, $scope;

    beforeEach(function() {
        //console.log('angular', angular.mock);
        //instantiate the app module
        //angular.mock.module('app');
        angular.mock.module('app.controllers');

        // mock the controller
        angular.mock.inject(function($controller, $rootScope, $injector) {
            //console.log($controller, app);
            $scope = $rootScope.$new();
            ctrl = $controller('MainController',{$scope : $scope, $injector: $injector});
        });
    });

    it('should exist and have property name', function() {
        expect(ctrl).toBeDefined();
        expect($scope.name).toBeDefined();
    });



});