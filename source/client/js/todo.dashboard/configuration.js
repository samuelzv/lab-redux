'use strict';

configuration.$inject = ['$stateProvider'];

function configuration($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/dashboard',
        controller: 'TodoDashboardController',
        controllerAs: 'dashboard',
        templateUrl: 'js/todo.dashboard/template.html'

    });
}

module.exports = configuration;