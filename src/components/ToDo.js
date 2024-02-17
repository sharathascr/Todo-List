import React, { useState } from 'react'
import './styles/ToDo.css'
import ToDoForm from './ToDoForm'
import EditToDoForm from './EditTodoForm';

function ToDo({task,toggleCompleted,deleteTodos,editTodos}) {

    // console.log(task);
  return (
    <div className='todo'>
        <table>
          <tr>
            <td>
            <p onClick={()=>toggleCompleted(task.id)}>{task.task}</p></td>
          <td>
            <button onClick={()=>editTodos(task.id)}>edit</button></td>
            <td>
            <button onClick={()=>deleteTodos(task.id)}>delete</button></td>
        </tr>
    </table>
    </div>
  )
}

export default ToDo