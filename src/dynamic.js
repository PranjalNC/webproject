const express = require('express');
const app= express();
const path=require('path');
const hbs= require("hbs");

//relative absolute
const staticPath= path.join(__dirname,"../public");
const templatePath= path.join(__dirname,"../templates/views");
const partialsPath= path.join(__dirname,"../templates/partials");

//to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

//builtin middleware
app.use(express.static(staticPath));

//template engine route
app.get("/",(req,res) =>{
    res.render("index",{
        channelName: "Pranjal",
    });

});

app.get("/about",(req,res) =>{
    //http://localhost:8000/about?name=mumbai
    console.log(req.query) ;             //output in terminal: {name: 'mumbai'}
    console.log(req.query.name) ;       //output: london
    res.render("about",{
        // name :'pc',
        name: req.query.name,           //output in webpage : welcome ..........mumbai
        age: req.query.age,
    });

});

app.get('/about/*', (req, res) => {
    res.render("404",{
        errorComment: "Opps this about us page doesn't exists",
    });
})


app.get('*', (req, res) => {
    res.render("404",{
        errorComment: "Opps doesn't exists",
    });
})

//in above get nad below get, it is following top to down aproach that's why it is calling render method
// app.get("/", (req, res) =>{
//     res.send("hello from express");
// });



app.listen(8000, ()=>{
  console.log("listening the port 8000")  ;
})



