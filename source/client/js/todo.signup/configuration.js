'use strict';

configuration.$inject = ['$stateProvider'];

function configuration($stateProvider) {
    $stateProvider.state('signup', {
        url: '/signup',
        controller: 'TodoSignupController',
        controllerAs: 'signup',
        templateUrl: 'js/todo.signup/template.html'

    });
}

module.exports = configuration;