const express = require("express");
const router = express.Router();
const collection = require("./employeeModel");
const { ObjectId } = require('mongodb'); // Import ObjectId from mongodb

router.get("/getUsers", async (req, res) => {
  try {
    const employeedata = await collection.find();
    res.json(employeedata);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/getEmployeeByPosition", async (req, res) => {
  const { position } = req.query;

  try {
    const employeeData = await collection.find({ selectPosition: position });
    res.json(employeeData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/getUser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await collection.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/update", async (req, res) => {
  const { _id, ...updatedData } = req.body;
  try {
    const result = await collection.updateOne({ _id: ObjectId(_id) }, { $set: updatedData });
    if (result.modifiedCount > 0) {
      res.json({ success: true, message: 'Employee updated successfully' });
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ success: false, message: 'Failed to update employee' });
  }
});


router.post("/login", async (req, res) => {
  const { empId, password } = req.body;
  try {
    const employeeData = await collection.findOne({ empId: empId, password: password });
    if (employeeData) {
      res.json(employeeData);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (e) {
    console.error("Error fetching employee data:", e);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  const {
    email, password, empId, firstName, lastName, address, dob, selectedBank,
    accNum, selectPosition, nicNumber, gender, mobileNum, joiningDate
  } = req.body;
  const data = {
    email: email, password: password, empId: empId, firstName: firstName, lastName: lastName,
    address: address, dob: dob, selectedBank: selectedBank, accNum: accNum, selectPosition: selectPosition,
    nicNumber: nicNumber, gender: gender, joiningDate: joiningDate, mobileNumber: mobileNum,
  };
  try {
    const check = await collection.findOne({ empId: empId });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    console.log(e);
    res.json("fail");
  }
});

router.post('/update-salary', async (req, res) => {
  const { empId, totalSalary, year, month } = req.body;
  try {
    const updatedEmployee = await collection.findOneAndUpdate({ empId }, { $push: { salaries: { totalSalary } } }, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    return res.json(updatedEmployee);
  } catch (error) {
    console.error('Failed to update salary:', error);
    return res.status(500).json({ error: 'Failed to update salary' });
  }
});

module.exports = router;
