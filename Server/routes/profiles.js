const express = require("express");
const route = express.Router();
const userSchema = require("../models/user");

//View one user on the application
route.get('/:username', async(req,res) =>{
    const response = await userSchema.find({username: req.params.username});
    return res.json(response);
})

//View all profiles on the application
route.get('/', async(req,res) => {
    const response = await userSchema.find();
    return res.json(response);
})

route.put('/:username/edit', async(req,res) => {
    const{firstName, middleName, lastName, roomNumber, linkedIn, bio} = req.body;

    //Lookup the user by the username provided in the path
    const user = await userSchema.findOne({username: req.params.username});

    //if the user doesnt exist, return 404 and notify the user that the queried user isnt found
    if(!user){
        return res.status(404).send({message: "User not Found"})
    } 
    
    //Converts the user document's _id into a String.
    const userId = JSON.stringify(user._id).replace(/["]+/g, '')

    //Uses the stringified _id to lookup the user and updates their information based on 
    const response = await userSchema.findByIdAndUpdate(userId, {
        name:{
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
        },
        roomNumber: roomNumber,
        linkedIn: linkedIn,
        bio: bio,
    })

    return res.json(response)
    
})






module.exports = route; 
