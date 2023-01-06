const mongoose = require("mongoose");

const student = new Schema({
    name:{
        firstName:{
            type: String,
            required: true,
            max: 20,
        },
        middleName:{
            type: String,
            max: 20
        },
        lastName:{
            type: String,
            required: true,
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

    stuID:{
        type: String,
        min: 8
    },

    status:{
        type: String,
    }

    
});

export default model('student', student);