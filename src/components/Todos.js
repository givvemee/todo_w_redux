import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <div className="main">
            <h2>Things to do... <span>👀</span></h2>
            <TodoInput />
            <TodoList/> 
        </div>
    );
};

export default Todos;