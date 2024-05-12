// import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import EmployeeHome from "./components/EmployeeManagement/EmployeeHome";
import EmployeeLogin from "./components/EmployeeManagement/EmployeeLogin";
import EmployeeSignup from "./components/EmployeeManagement/EmployeeSignup";
import EmployeeProfileView from "./components/EmployeeManagement/EmployeeProfileView";
import EmployeeViewDetails from "./components/EmployeeManagement/EmployeeViewDetails";
import EmployeeAdminView from "./components/EmployeeManagement/EmployeeAdminView";
import EmployeeAdminUpdate from "./components/EmployeeManagement/EmployeeAdminUpdate";
import EmployeeSalaryManagement from "./components/EmployeeManagement/EmployeeSalaryManagement";
import EmployeeLeaveManagement from "./components/EmployeeManagement/EmployeeLeaveManagement";
import EmployeeNavbar from "./components/EmployeeManagement/EmployeeNavbar";
import EmployeeLogout from "./components/EmployeeManagement/EmployeeLogout";
import { EmployeeSearchBar } from "./components/EmployeeManagement/EmployeeSearchBar";




import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/employee-signup" element={<EmployeeSignup />} />
          <Route path="/employee-home" element={<EmployeeHome />} />
          <Route path="/employee-profile-view" element={<EmployeeProfileView />} />
          <Route path="/employee-view-details" element={<EmployeeViewDetails />} />
          <Route path="/employee-admin-view" element={<EmployeeAdminView />} />
          <Route path="/employee-admin-update/" element={<EmployeeAdminUpdate />} />
          <Route path="/employee-salary-management" element={<EmployeeSalaryManagement />} />
          <Route path="/employee-leaving" element={<EmployeeLeaveManagement />} />
          <Route path="/employee-navbar" element={<EmployeeNavbar />} />
          <Route path="/employee-logout" element={<EmployeeLogout />} />
          <Route path="/employee-search" element={<EmployeeSearchBar />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
