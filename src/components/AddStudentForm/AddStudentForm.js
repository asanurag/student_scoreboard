// AddStudentForm.js
import React, { useState } from 'react';
import './AddStudentForm.css';

const AddStudentForm = ({ onAddStudent }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    score: '',
    result: '-',
    grade: '-',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update result and grade based on the entered score
    if (name === 'score') {
      const score = parseInt(value, 10);
      let result, grade;

      if (score >= 0 && score <= 30) {
        result = 'Failed';
        grade = 'Poor';
      } else if (score >= 31 && score <= 75) {
        result = 'Passed';
        grade = 'Average';
      } else if (score >= 76 && score <= 100) {
        result = 'Passed';
        grade = 'Excellent';
      } else {
        result = '-';
        grade = '-';
      }

      setFormData((prevData) => ({ ...prevData, result, grade }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    closeForm();
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
    setFormData({
      name: '',
      class: '',
      score: '',
      result: '-',
      grade: '-',
    });
  };

  return (
    <div className="add-student-form">
      <button className="add-button" onClick={openForm}>
        + Add Student
      </button>
      {isFormVisible && (
        <div className="form-popup">
          <h2>Add Student</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
              <label>Class:</label>
              <input type="text" name="class" value={formData.class} onChange={handleInputChange} />
            </div>
            <div>
              <label>Score:</label>
              <input type="number" name="score" value={formData.score} onChange={handleInputChange} />
            </div>
            <div>
              <label>Result:</label>
              <input type="text" name="result" value={formData.result} readOnly />
            </div>
            <div>
              <label>Grade:</label>
              <input type="text" name="grade" value={formData.grade} readOnly />
            </div>
            <button type="submit">Add Student</button>
            <button type="button" onClick={closeForm}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddStudentForm;

