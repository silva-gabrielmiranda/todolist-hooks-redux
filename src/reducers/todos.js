import { ADD_TODO, ADD_ITEM } from '../actions/actions';

const initialState = [{
    _id: 0,
    title: "Testando",
    items: ["Teste1", "Teste2", "Teste3", "Teste4", "Teste5"]
}, {
    _id: 1,
    title: "Testando2",
    items: ["Teste1", "Teste1", "Teste1", "Teste1", "Teste1"]
}];

export function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo];
        case ADD_ITEM:
            let oldItems = state.filter(item => item._id !== action.item._id);
            oldItems.push(action.item);
            return oldItems;
        default:
            return state;
    }
};