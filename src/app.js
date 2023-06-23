const express = require('express');
const app= express();

// app.get(route,callback) -syntax   req(request) and res(response) both are callback function objects

app.get("/", (req, res) =>{
    res.send("hello from express");
});
app.get("/about",(req,res)=>{
res.send("hello from about pages");
});
//to listen the request
app.listen(8000, ()=>{
  console.log("listening the port 8000")  ;
})


