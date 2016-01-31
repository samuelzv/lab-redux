var controller    = require('./controller');

module.exports =   angular.module('todo.home',['ui.router'])
                          .config(require('./configuration'))
                          .controller(controller.name, controller);


