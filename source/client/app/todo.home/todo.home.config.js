(function(angular) {

    function configuration($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'TodoHomeController',
                controllerAs: 'home',
                templateUrl: 'app/todo.home/todo.home.template.html'

            });

    }

    angular.module('todo.home')
        .config(['$stateProvider', configuration]);

})(angular);
