'use strict';

var directive = ['$log', 'todoEnvelopeColorsService', function ($log, todoEnvelopeColorsService) {

  return {
    restrict: 'E',
    replace: true,
    link: require('./link')($log,todoEnvelopeColorsService),
    controller: require('./controller'),
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: 'js/todo.envelope/template.html',
    scope: {
      budget: '=',
      index: '='
    }
  }
}];

module.exports = directive;
