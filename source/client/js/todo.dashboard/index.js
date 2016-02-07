'use strict';

var controller = require('./controller');

module.exports = angular.module('todo.dashboard', ['ui.router'])
                        .config(require('./configuration'))
                        .controller(controller.name, controller);