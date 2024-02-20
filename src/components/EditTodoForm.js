import React, { useState } from 'react'
import './styles/EditTodoForm.css'

function EditToDoForm({editTodo,task}) {
    const [value, setValue]=useState(task.task);
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(value);
        editTodo(value,task.id);
        setValue("");
        
    }
    // console.log(task);
  return (
    <div>
        <form onSubmit={handleSubmit}>
         <input type='text' onChange={(e)=>setValue(e.target.value)} value={value} placeholder='update task...'/>
            <button className='updateBtn'>Update</button>
            </form>
    </div>
  )
}

export default EditToDoForm