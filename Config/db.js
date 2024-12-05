const mongoose = require('mongoose');
require("dotenv").config();
 const url = process.env.DB_URL;
 
 const dbconnect = async () =>{
    try{
        await mongoose.connect(url)
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.error('Failed to connect to MongoDB', error);
    }   
}

module.exports = dbconnect;