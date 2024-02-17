import React from 'react';
import './styles/ToDo.css';

function ToDo({task,toggleCompleted,deleteTodos,editTodos}) {
  
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