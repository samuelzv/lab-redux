var configuration = function ($stateProvider) {

      $stateProvider
          .state('home', {
              url: '/',
              controller: 'TodoHomeController',
              controllerAs: 'home',
              templateUrl: 'app/todo.home/template.html'
      });

};

configuration.$inject = ['$stateProvider'];

module.exports  = configuration;




