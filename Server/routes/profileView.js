const express = require("express");
const route = express.Router();
const userSchema = require("../models/user");


route.get('/:username', async(req,res) =>{
    const response = await userSchema.find({username: req.params.username})
    return res.json(response)
})




module.exports = route; 
