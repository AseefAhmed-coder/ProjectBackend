const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "firstname must be provided"],
        minlength: 3,
        maxlength: 15,
    },
    lastname: {
        type: String,
        required: [true, "lastname must be provided"],
        minlength: 3,
        maxlength: 15,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: function (value) {
        //         return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
        //     },
        //     message: 'Invalid email address',
        // },
    },
    phone: {
        type: String,
        // validate: {
            // validator: function (value) {
                // return /^[0-9]{10}$/.test(value);
            // },
            // message: 'Invalid phone number',
        // },
    },
    activity: {
        type: String,
        required: [true, "Activity is required"],
    },
    durations: {
        type: String,
        required: [true, "Duration is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: 5,
        maxlength: 255,
    },
    dateofjoining: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true }); 

module.exports = mongoose.model("Employee", EmployeeSchema)