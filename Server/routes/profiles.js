const express = require("express");
const route = express.Router();
const userSchema = require("../models/user");

//View one user on the application
route.get('/:username', async(req,res) =>{
    const response = await userSchema.find({username: req.params.username})
    return res.json(response)
})

//View all profiles on the application
route.get('/', async(req,res) => {
    const response = await userSchema.find();
    return res.json(response);
})






module.exports = route; 
