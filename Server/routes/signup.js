const express = require("express");
const route = express.Router();
const { newUserValidation } = require('../models/userValidator')
const userSchema = require("../models/user");
const bcrypt = require("bcrypt");

//Create a new user

route.post('/signup', async(req,res) =>{

    const {error} = newUserValidation(req.body);
    console.log(error);

    if(error){
        return res.status(400).send({message: error.errors[0].message});
    }

    const{firstName, middleName, lastName, email, password, roomNumber, linkedIn, bio} = req.body;

    const userLookup = await userSchema.findOne({email: email});

    if(userLookup){
        return res.status(409).send({message: "Email already exists, please login or pick another"})
    }

    const generateHash = await bcrypt.genSalt(Number(10));

    const hashPassword = await bcrypt.hash(password, generateHash);

    const user = {
        name:{
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
        },
        email: email,
        password: hashPassword,
        roomNumber: roomNumber,
        linkedIn: linkedIn,
        bio: bio
    };
    console.log(user);
    try{
        const response = await userSchema.create(user);
        res.send(response);
    } catch {
        res.status(400).send({message: "Error when creating a user"});
    }
})


module.exports = route; 



