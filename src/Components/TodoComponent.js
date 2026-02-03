import React, { useState } from 'react';
import './TodoComponent.css';
import toast from 'react-hot-toast';

function TodoComponent() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    function addTask(e) {
        e.preventDefault();
        if (task.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, task]);
            setTask("");
        }
        else {
            toast.error("Enter a task", { duration: 1000 });
        }
    }

    const notify = (e) => {
        if (!e.target.checked) return;
        toast.success('Task Completed.', { duration: 1000 });
    }

    function deleteTask(index) {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            setTasks(prev => prev.filter((_, i) => i !== index));
        }
    }


    return (

        <div className='Todo_Container'>

            <h2>To-Do List</h2>

            <form action="" onSubmit={addTask} className='input_Container'>
                <input type="text"
                    id="task"
                    value={task}
                    placeholder='Add a task..'
                    onChange={(e) => setTask(e.target.value)} />
                <button type='Submit'>Add</button>
            </form>



            <div className='taskList'>
                {tasks.map((tas, index) =>
                    <li key={index}>
                        <input type='checkbox' onChange={notify} />
                        <span>{tas}</span>
                        <button className='delete_btn'
                            onClick={() => deleteTask(index)}>delete</button>
                    </li>
                )}
            </div>

        </div>
    )
}
export default TodoComponent;

