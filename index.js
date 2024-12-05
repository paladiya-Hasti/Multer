const express = require('express');
const dbconnect = require('./Config/db');
const ProductRoute = require('./Routes/Product.Router');
const path = require('path');
const app = express();

app.use(express.json());
require("dotenv").config();

app.use(express.urlencoded({extended: true}));
app.use("/Products",ProductRoute)

app.use("upload",express.static(path.join(__dirname,"upload")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/form.html"));
})


const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    dbconnect();
});