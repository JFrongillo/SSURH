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
    },

    experience:[{
        current:{
            type: Boolean,
        },
        startDate:{
            type: String
        },
        endDate:{
            type: String
        },
        description:{
            type: String,
            max: 40000
        }
    }]

    
});

module.exports = mongoose.model('student', student);