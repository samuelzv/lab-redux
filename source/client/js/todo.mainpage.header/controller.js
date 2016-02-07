'use strict';


TodoMainPageHeaderController.$inject = ['$state'];

function TodoMainPageHeaderController($state) {
  var vm = this;

  vm.module = 'home';

  vm.clickModule = (module)=> {
    vm.module = module;
    $state.go(module);
  }
}


module.exports = TodoMainPageHeaderController;
