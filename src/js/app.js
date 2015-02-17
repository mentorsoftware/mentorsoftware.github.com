var angular=require('angular');
require('../../bower_components/angular-animate/angular-animate');
require('../../bower_components/angular-aria/angular-aria');
require('../../bower_components/angular-bootstrap/ui-bootstrap-tpls');
require('../../bower_components/angular-bootstrap/ui-bootstrap');


require('./controllers');
var app=angular.module('app', ['app.controllers','ui.bootstrap.tpls','ui.bootstrap']);
console.log('Loaded');
module.exports=app;

