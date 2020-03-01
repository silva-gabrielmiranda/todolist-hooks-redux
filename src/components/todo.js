import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/actions';

function Todo(props) {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState("");
    const HandleAddItem = () => {
        props.data.items.push(input);
        console.log({
            _id: props.data._id,
            title: props.data.title,
            items: props.data.items
        });
        dispatch(addItem({
            _id: props.data._id,
            title: props.data.title,
            items: props.data.items
        }));
        setInput("");
    };
    return (
        <div className="col-8 offset-2 rounded my-3 elevation1">
            <p className="p-2 h1 text-center">
                {props.data.title}
            </p>

            <ul className="list-group p-1 elevation2 mb-3">
                {props.data.items.map(item => <li className="list-group-item background-primary" key={"item" + props.data.items.indexOf(item)}>{item}</li>)}
            </ul>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Novo Item" aria-label="Novo Item" aria-describedby="button-addon2" onChange={e => setInput(e.target.value)} value={input}/>
                <div className="input-group-append">
                    <button className="btn btn-primary bold" type="button" id="button-addon2" onClick={HandleAddItem}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Todo;