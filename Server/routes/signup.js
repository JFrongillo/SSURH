const express = require("express");
const route = express.Router();
const { newUserValidation } = require('../models/userValidator')
const userSchema = require("../models/user");
const bcrypt = require("bcrypt");

/**
 * Creates a new user
 */

route.post('/', async(req,res) =>{

    const {error} = newUserValidation(req.body);
    console.log(error);

    //Checking for validation errors, if an error exists, send a 4
    if(error){
        return res.status(400).send({message: error.errors[0].message});
    }

    //deconstructing the req.body object
    const{firstName, middleName, lastName, email, password, username, roomNumber, linkedIn, bio} = req.body;

    //Looking up the email provided, if it exists, return a client error 409 and notify the user that the email exists
    const userLookup = await userSchema.findOne({email: email});

    if(userLookup){
        return res.status(409).send({message: "Email already exists, please login or pick another"})
    }

    //Generates the hash for the password encryption
    const generateHash = await bcrypt.genSalt(Number(10));

    //Generates a hashed password
    const hashPassword = await bcrypt.hash(password, generateHash);

    //Creation of the user object.
    const user = {
        name:{
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
        },
        email: email,
        password: hashPassword,
        username: username,
        roomNumber: roomNumber,
        linkedIn: linkedIn,
        bio: bio
    };

    //Logging the user for debugging purposes 
    console.log(user);

    //Attempting to create the user, if there is an error a status 400 will be thrown
    try{
        const response = await userSchema.create(user);
        res.send(response);
    } catch {
        res.status(400).send({message: "Error when creating a user"});
    }
})


module.exports = route; 



