import React from 'react';
import TodoList from './components/todoList';
import NavBar from './components/navbar';
import {createStore} from "redux";
import {Provider} from "react-redux";


import './styles.css';
import todolistApp from './reducers/todolistApp';

const store = createStore(todolistApp);

function App() {
  return (
    <Provider store={store}>
    <NavBar />
    <TodoList />
    </Provider>
  );
}

export default App;
