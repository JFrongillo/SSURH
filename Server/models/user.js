const mongoose = require("mongoose");

const user = mongoose.Schema({
    name:{
        firstName:{
            type: String,
            max: 20,
        },
        middleName:{
            type: String,
            max: 20
        },
        lastName:{
            type: String,
            max: 20
        } 
    },
    email:{
        type: String, 
        required: true
    },
    password:{
        type: String, 
        required: true
    },

    username:{
        type: String,
        required: true,
    },

    title:{
        type: String,
        max: 20
    },

    roomNumber: {
        type: String, 
        max: 6,
    }, 

    linkedIn:{
        type: String,
    },

    bio:{
        type: String, 
        max: 4000
    }
});

module.exports = mongoose.model("user", user);