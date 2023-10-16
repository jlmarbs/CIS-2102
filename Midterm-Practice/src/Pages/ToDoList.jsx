import { useState } from 'react'
import CreateToDo from '../Components/CreateToDo'
import DeleteToDo from '../Components/DeleteToDo'
import styles from './ToDoList.module.css'

function ToDoList() {
    const [tasks, setTasks] = useState([])

    const createTask = (taskText) => {
        setTasks([...tasks, taskText])
    }

    const deleteTask = (index) => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)
    }

    return (
        <>
            <div className={styles["second-page"]}>
                <h2>TO-DO LIST</h2>
                <CreateToDo onCreate={createTask} />
                <DeleteToDo tasks={tasks} onDelete={deleteTask} />
            </div>
        </>
    )
}

export default ToDoList