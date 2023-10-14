import React from 'react';
import './DisplayStudent.css';

function DisplayStudent({ filteredStudents }) {
  console.log(filteredStudents);

  return (
    <div className="student-display">
      {filteredStudents.map(({ id, name, age, course }, index) => (
        <div className="student-box" key={id}>
          <p style={{ whiteSpace: 'pre-line' }}>
            {`ID: ${id}
            Name: ${name}
            Age: ${age}
            Course: ${course}`}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DisplayStudent