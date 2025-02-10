const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./model/user.model');
const routes = require('./routes'); // Importing routes
require('dotenv').config();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });

app.use('/', routes); // Using routes

app.get("/ping",(req,res)=>{
    try {
        res.json({"message":"pong"})
    } catch (error) {
        console.log(error);
        res.json({"errorMsg":error})
    }
});

app.get("/", async (req, res) => {
    try {
        const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
        res.json({ "databaseStatus": dbStatus });
    } catch (error) {
        console.log(error);
        res.json({ "errorMsg": error });
    }
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT} successfully`);
});
