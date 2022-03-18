import React from 'react';
import { useDispatch } from 'react-redux';
import { CounterState, remove, toggle } from '../store/modules/todos';

// import { todo } from './TodoList';


const TodoItem = (todo ) => {
    const {id, text, isChecked} = todo
    const dispatch = useDispatch()
    return (
        <li style={{color: isChecked ? 'gray' : 'white', opacity: isChecked ? 0.5 : 1}}>
            <input type="checkbox" checked={isChecked} onChange={() => dispatch(toggle(id))}/> {text} 
            <button style={{border: 'none', background: 'transparent'}}onClick={() => dispatch(remove(id))}> ❌ </button>
        </li>
    );
};

export default TodoItem;