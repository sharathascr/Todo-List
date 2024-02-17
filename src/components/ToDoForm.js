import React, { useState } from 'react'

function ToDoForm({addTodos}) {
    const [value, setValue]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(value);
        if(value!=""){
        addTodos(value);
        setValue("");
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
         <input value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button>Save</button>
            </form>
    </div>
  )
}

export default ToDoForm