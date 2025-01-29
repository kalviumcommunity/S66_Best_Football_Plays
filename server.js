const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./model/user.model');
require('dotenv').config();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((error) => {
        console.log(error);
    });


app.get("/ping",(req,res)=>{
      try {
        res.json({"message":"pong"})
        
      } catch (error) {
        console.log(error);
        res.json({"errorMsg":error})
      }
})



app.post('/create', async(req,res)=>{
  const{username,password} = req.body;
  payload={username,password};
  
  try {
      let new_user = new UserModel(payload);
      await new_user.save();
      res.send({ "message": "Hurray! Successfully saved the user to the database" });
  } catch (error) {
      console.log(error);
      res.send({ "error": error });
  }
});



app.listen(process.env.PORT,()=>{
  console.log(`Server is running on http://localhost:${process.env.PORT} successfully`);
})