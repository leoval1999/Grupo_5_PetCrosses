const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const publicPath = path.join(__dirname,"/public");
const homeRoute = require("./src/routes/mainRoutes");
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


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
app.set('views', __dirname + '/src/views');
