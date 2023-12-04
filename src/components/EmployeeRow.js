import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const EmployeeRow = (props) => {
  const emp = props.emp;

  return (
    <div className='card-container'>
      
      <div className='desc'>
        <h2>
          <Link to={`/view-employee/${emp._id}`}>{emp.first_name}</Link>
        </h2>
  
      </div>
    </div>
  );
};

export default EmployeeRow;