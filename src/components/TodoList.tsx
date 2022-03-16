import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TodoItem from './TodoItem';

export interface todo {
    key?: number,
    id: number,
    text: string,
    isChecked: boolean
}

const TodoList = () => {
    const todos = useSelector((state : RootState) => state.todos.todos)
    return (
        <ul style={{listStyle : 'none'}} className="list">
           {
               todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
           } 
        </ul>
    );
};

export default TodoList;