const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.join(__dirname,"/public");
const homeRoute = require("./src/routes/mainRoutes");
const port = process.env.PORT || 3000;



//routes
app.use("/", homeRoute);
//archivos estáticos
app.use(express.static(publicPath));

//Server
app.listen(port,(req,res)=>{
    console.log(`Funcionando en el puerto ${port}`)
});

//Vinculación EJS
app.set('view engine','ejs');
