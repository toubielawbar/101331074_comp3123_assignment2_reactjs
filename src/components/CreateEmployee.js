import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateEmployee = (props) => {
 
  const navigate = useNavigate();
  const [emp, setEmp] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    salary: ''
  });

  const onChange = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8081/api/v1/emp', emp)
      .then((res) => {
        setEmp({
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            salary: ''
        });

        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Creating employee!');
      });
  };

  return (
    <div className='CreateEmployee'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Employee</h1>
            <p className='lead text-center'>Create new employee</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enter employee first name'
                  name='first_name'
                  className='form-control'
                  value={emp.first_name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
              <input
                  type='text'
                  placeholder='Enter employee last name'
                  name='last_name'
                  className='form-control'
                  value={emp.last_name}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
              <input
                  type='text'
                  placeholder='Enter employee email'
                  name='email'
                  className='form-control'
                  value={emp.email}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
              <input
                  type='text'
                  placeholder='Enter employee gender'
                  name='gender'
                  className='form-control'
                  value={emp.gender}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
              <input
                  type='text'
                  placeholder='Enter employee salary'
                  name='salary'
                  className='form-control'
                  value={emp.salary}
                  onChange={onChange}
                />
              </div>
            

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
                value='ADD EMPLOYEE'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;