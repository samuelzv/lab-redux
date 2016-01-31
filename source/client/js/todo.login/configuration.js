'use strict';

configuration.$inject = ['$stateProvider'];

function configuration($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        controller: 'TodoLoginController',
        controllerAs: 'login',
        templateUrl: 'js/todo.login/template.html'

    });
}

module.exports = configuration;