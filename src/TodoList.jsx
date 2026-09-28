import { Input } from "./Input/Input";
import { useState } from "react";
import { DeleteBtn } from "./DeleteBtn/DeleteBtn";

export default function TodoList() {
    const [newTask, setTask] = useState([]);
    function addTask(task) {
        setTask([...newTask, { id: Date.now(), text: task, finished: false}]);
        //console.log(newTask);
    }
    function toggledFinished(finishedTask) {
        setTask(
            newTask.map((oneTask) => {
                if (finishedTask === oneTask.id) {
                    return {...oneTask, finished: !oneTask.finished}
                } else {
                    return oneTask
                }
            })
        )
    }
    function deleteTask(deleteId) {
        setTask(
            newTask.filter((removeTask) => removeTask.id !== deleteId)
        )
    }
    return (
        <div className="todo-app">
            <h1>To Do List</h1>
            <Input onAdd={addTask}/>
            <ul className="todo-list">
                {newTask.map((tasks) => (
                    <li key={tasks.id} onClick={() => toggledFinished(tasks.id)} className={tasks.finished === true ? 'normal completed' : 'normal'}>
                        {tasks.text}
                    <DeleteBtn onPress={() => deleteTask(tasks.id)}>Delete 🗑️</DeleteBtn>
                    </li>
                ))}
            </ul>
        </div>
    );
}
