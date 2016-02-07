"use strict";

TodoDashboardController.$inject = [];

function TodoDashboardController() {
    var vm = this;

    // change it to a service
    vm.envelopes = [
        {
            name: 'Gas',
            lastUpdate: '',
            initial: 1600,
            current: 1200
        },
        {
            name: 'Luz',
            lastUpdate: '',
            initial: 200,
            current: 200
        },
        {
            name: 'Agua tomar',
            lastUpdate: '',
            initial: 150,
            current: 50
        },
        {
             name: 'Mesadas',
             lastUpdate: '',
             initial: 1000,
             current: 0
        },
        {
             name: 'Escuela',
             lastUpdate: '',
             initial: 300,
             current: 120
        },
        {
             name: 'Despensa',
             lastUpdate: '',
             initial: 300,
             current: 120
        }
      ];
}

module.exports = TodoDashboardController;