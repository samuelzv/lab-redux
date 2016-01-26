(function(angular) {
    TodoHomeController.$inject=[];

    function TodoHomeController() {
        var vm = this;
    };


    angular.module('todo.home')
        .controller('TodoHomeController', TodoHomeController);
})(angular);

