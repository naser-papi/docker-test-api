const express = require("express");
const app = express();
const port = 8000;
app.get("/",(req,res)=>{
    res.json([{
        name:"Naser Papi",
        email:"naser@gmail.com"
    }])
})

app.listen(port,()=>{
    console.log("server is running on port: ",port);
})