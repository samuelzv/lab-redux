'use strict';

module.exports = function () {
  return {
    restrict: 'E',
    replace: true,
    link: require('./link'),
    controller: require('./controller'),
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: 'js/todo.envelope/template.html',
    scope: {
      envelope: '='
    }
  }
};
