const express=require("express")
const app=express();

const PORT=8989;

app.get("/ping",(req,res)=>{
      try {
        res.json({"message":"pong"})
        
      } catch (error) {
        console.log(error);
        res.json({"errorMsg":error})
      }
})

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT} successfully`);
})