const express = require("express");
const app = express();
const cors = require("cors");
/**
 * Defining backend elements 
 */
const signup = require('./routes/signup')
const profile = require ('./routes/profiles')
// ---------------------------------------------
const dbConnection = require('./db/conn')
const SERVER_PORT = 3070


require('dotenv').config({path: 'config.env'});


dbConnection()
app.use(cors({origin: '*'}));
app.use(express.json());
/**
 * Define app.use routes here
 */
app.use('/signup', signup)
app.use('/profiles', profile)


app.listen(SERVER_PORT, (req,res) =>{
    console.log(`Server is running on port: ${SERVER_PORT}`);
})