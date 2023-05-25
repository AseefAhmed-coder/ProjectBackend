require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const getEmployees = require('./routes/getEmployees')
const createEmployee = require('./routes/createEmployee')
const updateEmployee = require('./routes/updateEmployee')
const deleteEmployee = require('./routes/deleteEmployee')
const getEmployeeById = require('./routes/getEmployeeById')
const searchEmployee = require('./routes/searchEmployee')
const cors = require("cors");
const PORT = process.env.PORT || 8000;

app.use(cors());

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
app.use(express.json())

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



app.use('/client', getEmployees)
app.use('/client', createEmployee)
app.use('/client', updateEmployee)
app.use('/client', deleteEmployee)
app.use('/searchclient', searchEmployee)
app.use('/client', getEmployeeById)





app.listen(PORT, ()=>console.log(`Server started on port ${PORT} on http://localhost:${PORT}`));