const express = require('express');
const app= express();
const path=require('path');

//relative absolute
// console.log(__dirname);     //output(i.e absolute path) :E:\NodeJs\ExpressJs\src
const staticPath= path.join(__dirname,"../public");

// console.log(staticPath);
//builtin middleware
app.use(express.static(staticPath));


app.get("/", (req, res) =>{
    res.send("hello from express");
});

app.get("/about",(req,res)=>{
res.send("hello from about pages");
});

app.listen(8000, ()=>{
  console.log("listening the port 8000")  ;
})


