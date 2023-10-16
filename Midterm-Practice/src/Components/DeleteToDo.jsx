import React from 'react'

function DeleteToDo({ tasks, onDelete }) {
    
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={()=> onDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default DeleteToDo