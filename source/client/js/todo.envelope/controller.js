'use strict';

TodoEnvelopeController.$inject = ['todoEnvelopeColorsService'];

function TodoEnvelopeController(todoEnvelopColorsService) {
  var vm = this;

  vm.color = todoEnvelopColorsService.getColorByIndex(vm.index);
}

module.exports = TodoEnvelopeController;
