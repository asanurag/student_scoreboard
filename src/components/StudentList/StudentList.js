import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa'; 
import './StudentList.css';

const StudentList = ({ students, onRemoveStudent, onEditStudent }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (index) => {
    setSelectedStudent(index === selectedStudent ? null : index);
  };

  const getResultStyle = (result) => {
    if (result === 'Passed') {
      return { backgroundColor: 'green', color: 'white', borderRadius: '50%' };
    } else if (result === 'Failed') {
      return { backgroundColor: 'red', color: 'white' };
    } else {
      return {};
    }
  };

  const getGradeStyle = (grade) => {
    if (grade === 'Excellent') {
      return { color: 'green' };
    } else if (grade === 'Average') {
      return { color: '#3498db' }; 
    } else if (grade === 'Poor') {
      return { color: 'red' };
    } else {
      return {};
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Result</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              onClick={() => handleSelectStudent(index)}
              className={index === selectedStudent ? 'selected' : ''}
            >
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{`${student.class}th`}</td>
              <td style={getResultStyle(student.result)}>{student.result}</td>
              <td>{`${student.score}/100`}</td>
              <td style={getGradeStyle(student.grade)}>{student.grade}</td>
              {index === selectedStudent && (
                <td>
                  <button onClick={() => onRemoveStudent(index)}>
                    <FaTrash />
                  </button>
                  <button onClick={() => onEditStudent(index)}>
                    <FaEdit />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
