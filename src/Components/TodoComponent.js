import React, {useState} from 'react';
import'./TodoComponent.css';
function TodoComponent(){
    const [tasks, setTasks]= useState([]); 
    function addTask(){
        const taskInput = document.getElementById("task");
        if(taskInput.value.trim() !== ""){
            alert("Task Added: " + taskInput.value);
            setTasks(prevTasks => [...prevTasks, taskInput.value]);
        }
        else{
            alert("Please enter a task.");
        }
        console.log(tasks);
    }
    function check(event){
        const isChecked = event.target.checked;
        if(isChecked){
            alert("Task Completed");
        }
    }
    function deleteTask(){
        tasks.pop();
        setTasks([...tasks]);   
    }
        
    
    return(
        <div className='Todo_Container'>
            
            <h2>To-Do List</h2>
            <div className='input_Container'>
            <input type="text" id="task" placeholder='Add a task..' />
            <button onClick={addTask} >Add</button>
            </div>
            
            <div className='taskList'>
                <div className='list'>
                    {tasks.map((tas,index)=><li key={index}>
                        <input type='checkbox' 
                            onChange={check}/>
                        <span>{tas}</span>
                        <button className='delete_btn'
                        onClick={deleteTask}>delete</button>
                    </li>
                    )} 
                </div>
            </div>
                
        </div>
    )
}
export default TodoComponent;

