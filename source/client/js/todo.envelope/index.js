'use strict';

module.exports = angular.module('todo.envelope',[])
  .directive('todoEnvelope', require('./directive'))
  .factory('todoEnvelopeColorsService', require('./todoEnvelopeColorsService'));
