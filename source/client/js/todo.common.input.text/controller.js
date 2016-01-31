'use strict';

TodoCommonInputTextController.$inject = ['$scope'];

function TodoCommonInputTextController($scope) {
  var vm = this;
  vm.state = null;
  vm.value = '';

  $scope.$watch('vm.value', (newValue, oldValue) => {
    vm.state = getState(newValue);
    console.log(vm.state);
  });

  vm.getStyle = function (baseClass) {
    return baseClass.concat('--', vm.state || 'empty');
  };

  function getState(value) {
    if (value.length === 0) {
      return 'empty';
    }

    return value.length > 0 && value.length > 3 ? 'success' : 'error';
  }
}

module.exports = TodoCommonInputTextController;