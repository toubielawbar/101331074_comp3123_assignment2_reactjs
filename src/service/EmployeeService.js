// EmployeeService.js
import axios from 'axios';

const EMPLOYEE_API_URL = "http://localhost:8081/api/v1/employees";

const EmployeeService = {
  getEmployees: () => {
    return axios.get(EMPLOYEE_API_URL);
  },
  createEmployee: (employee) => {
    return axios.post(EMPLOYEE_API_URL, employee);
  },
  getEmployeeById: (employeeId) => {
    return axios.get(`${EMPLOYEE_API_URL}/${employeeId}`);
  },
  updateEmployee: (employeeId, employee) => {
    return axios.put(`${EMPLOYEE_API_URL}/${employeeId}`, employee);
  },
  deleteEmployee: (employeeId) => {
    return axios.delete(`${EMPLOYEE_API_URL}/${employeeId}`);
  },
};

export default EmployeeService;
