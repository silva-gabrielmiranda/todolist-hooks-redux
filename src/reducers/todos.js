import {ADD_TODO} from '../actions/actions';

const initialState = [{
    title: "",
    items: []
}];

export function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return [...state, action.todo]
    }
};