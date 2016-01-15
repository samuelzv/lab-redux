'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo(state, action) {

    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, { completed: !state.completed });
        default:
            return state;

    }
};

var todos = function todos() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TODO':
            return [].concat(_toConsumableArray(state), [todo(undefined, action)]);

        case 'TOGGLE_TODO':
            return state.map(function (t) {
                return todo(t, action);
            });

        default:
            return state;
    }
};

var visibilityFilter = function visibilityFilter() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

/*
const todoApp = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    }
};
*/

var _Redux = Redux;
var combineReducers = _Redux.combineReducers;

var todoApp = combineReducers({ todos: todos, visibilityFilter: visibilityFilter });

var testAddTodo = function testAddTodo() {
    var stateBefore = [];
    var stateAfter = [{
        id: 0,
        text: 'Learn Redux',
        completed: false
    }];
    var action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

var testToggleTodo = function testToggleTodo() {
    var stateBefore = [{
        id: 0,
        text: 'Learn Redux',
        completed: false
    }, {
        id: 1,
        text: 'Go shoping',
        completed: false
    }];
    var action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    var stateAfter = [{
        id: 0,
        text: 'Learn Redux',
        completed: false
    }, {
        id: 1,
        text: 'Go shoping',
        completed: true
    }];
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

//testAddTodo();
//testToggleTodo();
var _Redux2 = Redux;
var createStore = _Redux2.createStore;

var store = createStore(todoApp);

console.log('Initial state');
console.log(store.getState());
console.log('-------------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('Current state');
console.log(store.getState());
console.log('-------------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go shopping'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('All test passed');

//# sourceMappingURL=todos-compiled.js.map