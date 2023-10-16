import { useState, useEffect } from 'react'
import styles from '../Pages/ToDoList.module.css'

function CreateToDo({ onCreate }) {
    const [taskText, setTaskText] = useState("")
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        const regex = /^[a-zA-Z\s]*$/
        setIsValid(regex.test(taskText) && taskText.trim() != "")
    }, [taskText])

    const createTask = () => {
        if(!isValid){
            alert("No Special Characters or Numbers Allowed")
            return
        }
        onCreate(taskText)
        setTaskText("") 
    }

    const handleInputChange = (e) => {
        setTaskText(e.target.value)
    }

    return (
        <>
            <div className={styles["input-container"]}>
                <input 
                style={{
                    borderColor: !isValid ? 'red' : "",
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                className={`${styles.input} ${!isValid ? styles.error : ""}`}
                type="text"
                placeholder="Enter a task..."
                value={taskText}
                onChange={handleInputChange} 
                />

                <button onClick={createTask} disabled={!isValid}>ADD</button>
            </div>
            {!isValid && taskText.trim() != "" && (
                <p className={styles["error-message"]}>No Special Characters or Numbers Allowed</p>
            )}   
        </>
    )
}

export default CreateToDo