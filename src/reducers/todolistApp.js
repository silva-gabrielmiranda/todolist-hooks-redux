import {combineReducers} from 'redux';

import {todos} from './todos'

const  todolistApp = combineReducers({
    todos
});

export default todolistApp;