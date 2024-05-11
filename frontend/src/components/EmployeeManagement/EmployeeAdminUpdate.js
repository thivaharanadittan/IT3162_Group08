// EmployeeAdminUpdate.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeAdminUpdate({ userId }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    dob: "",
    selectedBank: "",
    accNum: "",
    selectPosition: "",
    nicNumber: "",
    gender: "",
  });

  useEffect(() => {
    // Fetch user data based on userId when component mounts
    axios
      .get(`http://localhost:8000/api/employee/getUser/${userId}`)
      .then((response) => {
        const userData = response.data;
        // Update form data with user data
        setFormData(userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data
    axios
      .put(`http://localhost:8000/api/employee/update/${userId}`, formData)
      .then((response) => {
        console.log("User updated successfully:", response.data);
        // Optionally, redirect to a different page after update
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update User</h2>

      <label> email </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <label> password </label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <label> EmployeeId </label>
      <input
        type="text"
        name="empId"
        value={formData.empId}
        onChange={handleChange}
        placeholder="Employee Id"
      />
      {/* Add more input fields for other user properties */}
      <button type="submit">Update User</button>
    </form>
  );
}

export default EmployeeAdminUpdate;
