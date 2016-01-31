var controller = require('./controller');

module.exports =  angular.module('todo.signup',['ui.router'])
                         .config(require('./configuration'))
                         .controller(controller.name, controller);


