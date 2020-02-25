export const ADD_ITEM = "ADD_ITEM";
export const ADD_TODO = "ADD_TODO";

export function addItem(item){
    return {
        type: ADD_ITEM,
        item
    }
}
export function addTodo(todo){
    return {
        type: ADD_ITEM,
        todo
    }
}