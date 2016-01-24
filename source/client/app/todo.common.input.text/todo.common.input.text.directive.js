// TODO dont use $scope, pass me
var todoCommonInputTextController =($scope) => {
    $scope.state = 'empty';
    $scope.value = '';

    $scope.$watch('value', (newValue, oldValue) => {
        $scope.state = getState(newValue);
    });

    $scope.getStyle = (baseClass, state)=> {
        return baseClass.concat('--',state);
    };


    function getState(value) {
        if(value.length === 0) {
            return 'empty';
        }

        return (value.length > 0 && value.length > 3) ? 'success': 'error';
    }
};

todoCommonInputTextController.$inject = ['$scope'];

angular.module('todo.common.input.text')
    .controller('TodoCommonInputTextController', todoCommonInputTextController)
    .directive('todoCommonInputText', ()=> {
        return {
            restrict: 'E',
            controller: 'TodoCommonInputTextController',
            templateUrl: 'app/todo.common.input.text/todo.common.input.text.template.html',
            scope: {
                title: '@'
            }
        }
    });


