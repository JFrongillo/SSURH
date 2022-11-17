import { Schema, model } from 'mongoose';

const user = new Schema({
    email:{
        required: true,
        type: String,
    },

    password:{
        required: true, 
        type: String,
        min: 8,
        max: 16
    },

    email:{
        required: true,
        type: String
    },

    name: {
        type: String,
        max: 30
    },

    title: String,

    roomNumber:{
        type: String, 
        label: "Room Number",
    },

    phoneNumber:{
        type: String,
        label: "Phone Number",
    },

    biography: {
        type: String,
        max: 256,
    },

    date:{
        type: Date,
        default: Date.now,
    }

});

export default model('user', user);