import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import EmployeeRow from './EmployeeRow';


function EmployeeList() {
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/v1/emp')
      .then((res) => {
        setEmps(res.data);
      })
      .catch((err) => {
        console.log('Error from employee list');
      });
  }, []);

  const empList =
    emps.length === 0
      ? 'no employee yet'
      : emps.map((emp, k) => <EmployeeRow emp={emp} key={k} />);

  return (
    <div className='EmployeeList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Employees List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-employee'
              className='btn btn-outline-warning float-right'
            >
              + Add New Employee
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{empList}</div>
      </div>
    </div>
  );
}

export default EmployeeList;