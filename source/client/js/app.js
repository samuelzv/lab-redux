'use strict';

var angular = require('angular');


angular.module('todo.app',
  [
     'ui.router',
     require('./todo.home/module').name,
     require('./todo.login/module').name,
     require('./todo.signup/module').name,
     require('./todo.common/module').name
   ]);



