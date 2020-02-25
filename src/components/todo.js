import React from 'react';

function Todo() {
    return (
        <div className="col-8 offset-2 rounded my-3 elevation1">
            <p className="p-2 h1 text-center">
                Testando Lista
            </p>

            <ul className="list-group p-1 elevation2 mb-3">
                <li className="list-group-item background-primary">Item 1</li>
                <li className="list-group-item background-primary">Item 2</li>
                <li className="list-group-item background-primary">Item 3</li>
            </ul>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Novo Item" aria-label="Novo Item" aria-describedby="button-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" id="button-addon2">+</button>
                </div>
            </div>
        </div>
    );
}

export default Todo;