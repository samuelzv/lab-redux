function directiveLink(scope, element, attr, ctrl) {

    element.on('$destroy', function(event) {
      console.log('destroying');
    });
}

directiveController.$inject = ['$scope'];
function directiveController ($scope)  {
    var vm = this;
    vm.state = null;
    vm.value = '';

    $scope.$watch('vm.value', (newValue, oldValue) => {
        vm.state = getState(newValue);
        console.log(vm.state);
    });

    vm.getStyle = (baseClass)=> {
        return baseClass.concat('--', vm.state || 'empty');
    };


    function getState(value) {
        if(value.length === 0) {
            return 'empty';
        }

        return (value.length > 0 && value.length > 3) ? 'success': 'error';
    }
}


angular.module('todo.common.input.text')
    .controller('TodoCommonInputTextController', directiveController)
    .directive('todoCommonInputText', function () {
        return {
            restrict: 'E',
            link: directiveLink,
            controller: 'TodoCommonInputTextController',
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'app/todo.common.input.text/todo.common.input.text.template.html',
            scope: {
                title: '@'
            }
        }
    });


