/*import React, { useState, useEffect } from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "./css/AdminView.css";
import ProfileView from "./EmployeeProfileView";
import { EmployeeSearchBar } from "./EmployeeSearchBar";
import EmployeeSearchresultView from "./EmployeeSearchresultView";


function AdminView() {
 const location = useLocation();

  const [employeedata, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      //.get("http://localhost:8000/getUsers")
      .get("http://localhost:8000/api/employee/getUsers")

      .then((data) => setEmployeeData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const onSearch = (query) => {
    const results = employeedata.filter((user) => {
      return (
        (user.empId &&
          user.empId.toLowerCase().includes(query.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(query.toLowerCase()))
        // Add more fields for searching as needed
      );
    });
    setSearchResults(results);
  };

  const onSearchResultClick = (selectedEmp) => {
    navigate("/profile-view", { state: { employeeData: selectedEmp } });
  };

  const onView = async (e) => {
    const empId = e.target.value;

    try {
      const selectedEmp = employeedata.find((user) => user.empId === empId);

      if (selectedEmp) {
        navigate("/profile-view", { state: { employeeData: selectedEmp } });
      } else {
        console.log(`Employee with EmpId ${empId} not found`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onView2 = async (e) => {
    const empId = e.target.value;

    try {
      const selectedEmp = employeedata.find((user) => user.empId === empId);

      if (selectedEmp) {
        navigate("/admin-update", { state: { employeeData: selectedEmp } });
      } else {
        console.log(`Employee with EmpId ${empId} not found`);
      }
    } catch (error) {
      console.error(error);
    }
  };
const onEdit = (user) => {
  const { empId } = user;
  //const editUrl = `/admin-update/${empId}`;
  //const editUrl = `/admin-update/`;
   navigate(`/admin-update/${empId}`);
  //window.location.href = editUrl;
};




  return (
    <>
      <br />
      <EmployeeSearchBar
        onSearch={onSearch}
        onSearchResultClick={onSearchResultClick}
      />

      <EmployeeSearchresultView
        searchResults={searchResults}
        onSearchResultClick={onSearchResultClick}
      />

      <div className="homepage">
        <table border="1">
          <thead>
            <tr>
              <th>Employee Id </th>
              <th>Email</th>
              <th>Password</th>
              <th>Nic Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Position</th>
              <th>Bank</th>
              <th>Account Number</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employeedata.map((user) => {
              return (
                
                  <tr key={user.empId}>
                    <td>{user.empId}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.nicNumber}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>{user.dob}</td>
                    <td>{user.selectPosition}</td>
                    <td>{user.selectedBank}</td>
                    <td>{user.accNum}</td>
                    <td>{user.gender}</td>
                    <td>{user.salaries}</td>
                    <td>
                      <button
                        value={user.empId}
                        onClick={onView}
                        name={"btn1" + user.empId}
                      >
                        view
                      </button>
                    </td>
                    <td>{/*
                      <button
                        onClick={() => onEdit(user.empId)}
                        name={"btn2" + user.empId}
                      >
                        Edit
              </button>
                      <button
                        value={user.empId}
                        onClick={onView2}
                        name={"btn1" + user.empId}
                      >
                        Update
                      </button>

      {/*<button onClick={() => onEdit(user)}>Update</button>
                        

          
                    </td>
                  </tr>
                
              );
            })}
          </tbody>
        </table>

        {selectedEmployee && (
          <ProfileView
            employeeData={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
          />
        )}
      </div>
    </>
  );
}

export default AdminView;*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/AdminView.css";
import ProfileView from "./EmployeeProfileView";
import { EmployeeSearchBar } from "./EmployeeSearchBar";
import EmployeeSearchresultView from "./EmployeeSearchresultView";

function AdminView() {
  const [employeedata, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employee/getUsers")
      .then((response) => setEmployeeData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const onSearch = (query) => {
    const results = employeedata.filter((user) => {
      return (
        (user.empId &&
          user.empId.toLowerCase().includes(query.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(query.toLowerCase()))
      );
    });
    setSearchResults(results);
  };

  const onSearchResultClick = (selectedEmp) => {
    navigate("/profile-view", { state: { employeeData: selectedEmp } });
  };

  const onView = (empId) => {
    navigate("/profile-view", {
      state: { employeeData: employeedata.find((user) => user.empId === empId) },
    });
  };

  const onView2 = (empId) => {
    navigate("/admin-update", {
      state: { employeeData: employeedata.find((user) => user.empId === empId) },
    });
  };

  return (
    <>
      <br />
      <EmployeeSearchBar onSearch={onSearch} onSearchResultClick={onSearchResultClick} />
      <EmployeeSearchresultView searchResults={searchResults} onSearchResultClick={onSearchResultClick} />
      <div className="homepage">
        <table border="1">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Email</th>
              <th>Password</th>
              <th>Nic Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Position</th>
              <th>Bank</th>
              <th>Account Number</th>
              <th>Gender</th>
              
            </tr>
          </thead>
          <tbody>
            {employeedata.map((user) => (
              <tr key={user.empId}>
                <td>{user.empId}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.nicNumber}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.dob}</td>
                <td>{user.selectPosition}</td>
                <td>{user.selectedBank}</td>
                <td>{user.accNum}</td>
                <td>{user.gender}</td>
                
                <td>
                  <button value={user.empId} onClick={() => onView(user.empId)}>
                    View
                  </button>
                  <button value={user.empId} onClick={() => onView2(user.empId)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedEmployee && <ProfileView employeeData={selectedEmployee} onClose={() => setSelectedEmployee(null)} />}
      </div>
    </>
  );
}

export default AdminView;
