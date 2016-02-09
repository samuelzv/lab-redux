'use strict';

module.exports = function($log, envelopeService) {

  console.log(envelopeService);

  var link = function(scope, element, attr) {

    var imageCurrentBudget = element.find('img');

    if(imageCurrentBudget && imageCurrentBudget.length) {
      var budget = scope.vm.budget;
      var top = envelopeService.getTopByCurrentBudget(budget.initial,budget.current);
      imageCurrentBudget[0].style.top = top + 'px';
    } else {
      $log.error('Cannot set envelope indicator position');
    }
  }

  return link;
};
