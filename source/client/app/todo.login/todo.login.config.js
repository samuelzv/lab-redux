(function(angular) {
    function configuration($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'TodoLoginController',
                controllerAs: 'login',
                templateUrl: 'app/todo.login/todo.login.template.html'

            });

    }

    angular.module('todo.login')
        .config(['$stateProvider', configuration]);
})(angular);
