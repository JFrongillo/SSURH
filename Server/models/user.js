import { Schema, model } from 'mongoose';

const user = new Schema({
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

export default model('user', user);