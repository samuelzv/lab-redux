'use strict';

function link(scope, element, attr, ctrl) {

  element.on('$destroy', function (event) {
    console.log('destroying');
  });
}

module.exports = link;