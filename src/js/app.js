var angular=require('angular');
require('../../bower_components/angular-animate/angular-animate');
require('../../bower_components/angular-aria/angular-aria');

var hammer=require('../../bower_components/hammerjs/hammer');
window.Hammer=hammer;
var angularMaterial=require('../../bower_components/angular-material/angular-material');

require('./controllers');
var app=angular.module('app', ['ngMaterial','app.controllers']);
console.log('Loaded', app);
module.exports=app;

