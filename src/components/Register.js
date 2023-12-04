import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register = ({ setRegister }) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleCreateEmployee = () => {
    axios.post('http://localhost:8081/api/v1/user/signup', user)
      .then((response) => {
        console.log(response.data);
        setRegister(true);
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : 'An error occurred during account registration.');
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="mb-4 text-center">Create Employee</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username:
                  <input type="text" className="form-control" id="username" name="username" value={user.username} onChange={handleChange} />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                  <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                  <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleChange} />
                </label>
              </div>
              <button type="button" className="btn btn-primary btn-block" onClick={handleCreateEmployee}>
                Create Employee
              </button>
            </form>
            <div className="mt-3 text-center">
              <Link to="/">
                <button type="button" className="btn btn-secondary">
                  Back to Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
