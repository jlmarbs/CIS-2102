import React from 'react';
import './Display.css';

function Display({ filteredStudents }) {
  console.log(filteredStudents);

  return (
    <div className="Display">
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

export default Display