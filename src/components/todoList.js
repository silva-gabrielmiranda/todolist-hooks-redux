import React from 'react';
import {useSelector} from 'react-redux';
import Todo from './todo';

function TodoList(){
    const state = useSelector(state => state.todos);
    console.log(state);
    return(
        <div className="container">
            <div className="row">
                {state.map( item => <Todo data={item} />)}
            </div>
        </div>
    );
}

export default TodoList;