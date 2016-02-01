'use strict';

var controller = require('./controller');

module.exports = angular.module('todo.signup',
                        [
                          'ui.router',
                          'validation',
                          'validation.rule'
                        ])
                        .config(require('./configuration'))
                        .controller(controller.name, controller);