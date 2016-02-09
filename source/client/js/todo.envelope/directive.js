'use strict';

var directive = ['$log', 'envelopeService', function ($log, envelopeService) {

  return {
    restrict: 'E',
    replace: true,
    link: require('./link')($log,envelopeService),
    controller: require('./controller'),
    controllerAs: 'vm',
    bindToController: true,
    templateUrl: 'js/todo.envelope/template.html',
    scope: {
      budget: '='
    }
  }
}];

module.exports = directive;
