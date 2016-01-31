'use strict';

module.exports = function () {
  return {
    restrict: 'E',
    link: require('./link'),
    controller: require('./controller'),
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: 'js/todo.common.input.text/template.html',
    scope: {
      title: '@'
    }
  };
};