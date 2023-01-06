const mongoose = require("mongoose");

const research = new Schema({
    name:{
        type: String, 
        required: true
    },

    description:{
        type: String, 
        min: 0,
        max: 40000
    },

    publications:[{
        pubLink:{
            type: String
        }
    }],

    faculty:[{
        facultyId:{
            type: String 
        }
    }],

    students:[{
        studentId:{
            type: String,
        },

        reason:{
            type: String,
            min: 0,
            max: 40000
        }
    }]
});

export default model('reseach', research)