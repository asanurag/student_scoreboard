// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import StudentList from './components/StudentList/StudentList';
import AddStudentForm from './components/AddStudentForm/AddStudentForm';

const App = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        {/* <h1>Student Management System</h1> */}
        <AddStudentForm onAddStudent={handleAddStudent} />
        <StudentList students={students} />
      </div>
    </div>
  );
};

export default App;

