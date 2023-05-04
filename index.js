const mongoose = require("mongoose");

  mongoose.connect("mongodb://127.0.0.1:27017/employees")
  .then(() => console.log("Connected!"))
  .catch((e) => console.log("Error connecting" + e))

  const employeeSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, min: 16, max:65 },
    department: [ String ],
    date: { type: Date, default: new Date },
    isApproved: Boolean
  })
  const Employee = mongoose.model('Employee', employeeSchema);

   const createEmployee = async () => {
     const mohamed = new Employee({
       name: "amr",
       age: 18,
       department: ["node dev", "react dev"],
       isApproved: true,
     });
     const result = await mohamed.save();
     console.log(result);
   };

createEmployee()