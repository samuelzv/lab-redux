'use strict';

var angular = require('angular');


angular.module('todo.app',
  [
     'ui.router',
     require('./todo.home').name,
     require('./todo.login').name,
     require('./todo.signup').name,
     require('./todo.common').name,
     require('./todo.mainpage').name
   ]);



