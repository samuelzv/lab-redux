'use strict';

var configuration = function configuration($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        controller: 'TodoHomeController',
        controllerAs: 'home',
        templateUrl: 'js/todo.home/template.html'
    });
};

configuration.$inject = ['$stateProvider'];

module.exports = configuration;