import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import ViewEmployee from './components/ViewEmployee';
import UpdateEmployee from './components/UpdateEmployee';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<EmployeeList />} />
          <Route path='/create-employee' element={<CreateEmployee />} />
          <Route path='/update-employee/:id' element={<UpdateEmployee />} />
          <Route path='/view-employee/:id' element={<ViewEmployee />} />
        </Routes>
    </Router>
  );
};

export default App;