const express = require('express');
const app= express();
const port=3000;

app.get("/", (req, res) =>{
    // // res.send("welcome to home page");
    // res.send("<h1>welcome to home page</h1>");
    // res.send("<h1>welcome to demo page</h1>");

//or
    res.write("<h1>welcome to home page</h1>"); //for multiple html elements
    res.write("<h1>welcome to demo page</h1>");
    res.end();  //to close the coonection-if we write it then our page keeps on reloading..

});
app.get("/about",(req,res)=>{
res.status(200).send("welcome to about pages");
});

app.get("/contact", (req, res) =>{
    // res.send("welcome to contact page");
    res.json([
        {
        id:1,
        name:"my",
    },{
        id:2,
        name:"meme",
    },
])
});

app.get("/temp", (req, res) =>{
    // res.send("welcome to temp page");
    res.send({
        id:1,
        name:"my",
    })
});


//to listen the request
app.listen(port, ()=>{
  console.log(`listening the port no ${port}`)  ;
})


