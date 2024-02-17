import React, { useState } from 'react'
import ToDo from './ToDo'
import './styles/TodoWrapper.css';
import {v4 as uuidv4} from 'uuid';
import ToDoForm from './ToDoForm';
import EditToDoForm from './EditTodoForm';

function ToDoWrapper() {
    const [todos, setTodos]=useState([]);
    const addToDos=todo=>{
        setTodos([...todos, {id:uuidv4(),task:todo, isEditing:false, isDeleting:false, isCompleted:false}]);
    }
    const toggleCompleted=(id)=>{
        setTodos(todos.map((todo)=>todo.id===id ? {...todo, isCompleted:!todo.isCompleted} : todo))
    }

    const editTodos=(id)=>{
        setTodos(todos.map((todo)=>todo.id===id ? {...todo,isEditing:!todo.isEditing} : todo));
        // console.log(todos);
    }

    const deleteTodos=id =>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }
    const editTask=(task,id)=>{
        setTodos(todos.map((todo)=>todo.id===id ? {...todo, task,isEditing:!todo.isEditing}:todo))
    }
    console.log(todos)
  return (
    <div className='todowrapper'>
         <h1 >Get Things Done</h1>
        <ToDoForm addTodos={addToDos}/>
       {todos.map((todo,index)=>(todo.isEditing ? (<EditToDoForm key={index} editTodo={editTask} task={todo}  />):(<ToDo task={todo} key={index}
        toggleCompleted={toggleCompleted} 
        deleteTodos={deleteTodos} 
        editTodos={editTodos}/>)))}
        
    </div>
  )
}

export default ToDoWrapper