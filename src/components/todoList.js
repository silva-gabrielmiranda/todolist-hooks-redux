import React from 'react';
import Todo from './todo'

function TodoList(){
    return(
        <div className="container">
            <div className="row">
                <Todo />
            </div>
        </div>
    );
}

export default TodoList;