'use strict';

function TodoMainPageHeaderController() {
  var vm = this;

  vm.module = 'home';

  vm.clickModule = (module)=> {
    vm.module = module;
  }


}

TodoMainPageHeaderController.$inject = [];

module.exports = TodoMainPageHeaderController;
