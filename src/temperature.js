const express = require('express');
const app= express();
const path=require('path');
const hbs= require("hbs");
const requests = require ("requests");

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
requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&APPID=7fd9fb842998c5e5f99752c981943670`,
)
.on('data',  (chunk) => {
    const objData=JSON.parse(chunk);
    const arrData = [objData];
  console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);

    //    const realTimeData = arrData.map((val) =>  replaceVal(homeFile,val))
    //    .join("");
        res.write(arrData[0].name);

})
.on('end', (err) => {
  if (err) return console.log('connection closed due to errors', err);
 res.end();
//   console.log('end');
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




app.listen(8000, ()=>{
  console.log("listening the port 8000")  ;
})



