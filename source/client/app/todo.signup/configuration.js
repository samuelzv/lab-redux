configuration.$inject = ['$stateProvider'];

function configuration($stateProvider) {
      $stateProvider
          .state('signup', {
              url: '/signup',
              controller: 'TodoSignupController',
              controllerAs: 'signup',
              templateUrl: 'app/todo.signup/template.html'

          });
  }

module.exports = configuration;

