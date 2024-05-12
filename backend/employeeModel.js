const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/loginDB")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required:true,
  },
  password: {
    type: String,
    required:true,
  },
  empId: {
    type: String,
    required:true,
  },
  firstName: {
    type: String,
    required:true,
  },
  lastName: {
    type: String,
    required:true,
  },
  address: {
    type: String,
    required:true,
  },
  dob: {
    type: Date,
    required:true,
  },
  selectedBank: {
    type: String,
  },
  accNum: {
    type: Number,
  },
  selectPosition: {
    type: String,
    required:true,
  },
  nicNumber: {
    type: String,
    required:true,
  },
  gender: {
    type: String,
    required:true,
  },
  mobileNumber: {
    type: Number,
    required:true,
  },
  joiningDate: {
    type: Date,
    required:true,
  },
  
  salaries: [
    {
      year: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
      
      baseSalary: {
        type: Number,
        required: true,
      },
      overtimeHours: {
        type: Number,
        required: true,
      },
      overtimeRate: {
        type: Number,
        required: true,
      },
      leaveDays: {
        type: Number,
        required: true,
      },
      totalSalary: {
        type: Number,
        required: true,
      },
    },
  ],
  
 
});

const collection = mongoose.model("employeeData", newSchema);

module.exports = collection;
