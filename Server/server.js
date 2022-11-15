const express = require("express");
const app = express();
const cors = require("cors");
/**
 * Define routes here
 */
const dbConnection = require('./db/conn')

require('dotenv').config({path: 'config.env'});
const SERVER_PORT = 3070

dbConnection()
app.use(cors({origin: '*'}));
app.use(express.json());
/**
 * Define app.use routes here
 */

app.listen(SERVER_PORT, (req,res) =>{
    console.log(`Server is running on port: ${SERVER_PORT}`);
})