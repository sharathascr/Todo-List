import React from 'react';
import './styles/ToDo.css';

function ToDo({task,toggleCompleted,deleteTodos,editTodos}) {
  return (
    <div className='todo'>
        <table className='table table-stripped'>
          <tr>
            <td>
            <p onClick={()=>toggleCompleted(task.id)}>{task.task}</p></td>
          <td>
            <button className='editBtn' onClick={()=>editTodos(task.id)}>edit</button></td>
            <td>
            <button className='deleteBtn' onClick={()=>deleteTodos(task.id)}>delete</button></td>
        </tr>
    </table>
    </div>
  )
}

export default ToDo