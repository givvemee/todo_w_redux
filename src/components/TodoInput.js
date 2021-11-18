import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addone, inputs } from '../store/modules/todos';

const TodoInput = () => {
    const text = useSelector(state => state.todos.text)
    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault()
        dispatch(addone(text))
        dispatch(inputs(''))
    }
    return (
        <form onSubmit={onSubmit} className="form">
            <input type="text" onChange={e => dispatch(inputs(e.target.value))} value={text} placeholder="type and enter to list"/> 
        </form>
    );
};

export default TodoInput;