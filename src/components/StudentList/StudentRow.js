// StudentRow.js
import React from 'react';

const StudentRow = ({ student }) => {
  const { no, name, class: studentClass, result, score, grade } = student;

  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{studentClass}</td>
      <td style={{ backgroundColor: result === 'Failed' ? 'red' : 'green' }}>{result}</td>
      <td>{score}</td>
      <td>{grade}</td>
      <td>
        <button onClick={() => console.log(`Edit ${name}`)}>Edit</button>
        <button onClick={() => console.log(`Remove ${name}`)}>Remove</button>
      </td>
    </tr>
  );
};

export default StudentRow;
