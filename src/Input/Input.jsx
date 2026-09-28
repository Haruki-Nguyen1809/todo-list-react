import './Input.css';
import {useState} from "react";
import { AddBtn } from '../Add/Add';

export function Input({onAdd}) {
    const [inputValue, setInputValue] = useState('');
    function handleValue(e) {
        setInputValue(e.target.value);
    }
    return (
        <div className="add-task-row">
            <input className="todo-input" onChange={handleValue} type="text" value={inputValue} placeholder="Enter a new task" />
            <AddBtn onSelected={() => onAdd(inputValue)}>Add</AddBtn>
        </div>
    );
}