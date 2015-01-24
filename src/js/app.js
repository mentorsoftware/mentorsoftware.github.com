var angular=require('angular');
require('../../bower_components/angular-animate/angular-animate');
require('../../bower_components/angular-aria/angular-aria');


require('./controllers');
var app=angular.module('app', ['app.controllers']);
console.log('Loaded', app);
module.exports=app;

