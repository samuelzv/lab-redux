'use strict';

var angular = require('angular');

//angular.module('todo.app', ['ui.router', 'todo.home' ,'todo.login','todo.common']);

angular.module('todo.app',
  [
     'ui.router',
     require('./todo.home/module').name,
     require('./todo.login/module').name,
     require('./todo.signup/module').name
   ]);



