import React, { useState, useEffect } from "react";

function Create({ onCreate }) {
  const [taskText, setTaskText] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const regex = /^[a-zA-Z\s]*$/;
    setIsValid(regex.test(taskText) && taskText.trim() !== "");
  }, [taskText]);

  const createTask = () => {
    if (!isValid) {
      alert("No Special Characters or Numbers Allowed");
      return;
    }
    onCreate(taskText);
    setTaskText("");
  };

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  return (
    <div>
      <div className="input-container">
        <input
          style={{
            borderColor: !isValid ? 'red' : "",
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
          type="text"
          placeholder="Enter a Task..."
          value={taskText}
          onChange={handleInputChange}
          className={!isValid ? "error" : ""} />
        <button onClick={createTask} disabled={!isValid}>
          Add
        </button>
      </div>
      {!isValid && taskText.trim() !== "" && (
        <p className="error-message">No Special Characters or Numbers Allowed</p>
      )}
    </div>
  );
}

export default Create