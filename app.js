const cookies = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const cors = require("cors");
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const publicPath = path.join(__dirname,"/public");
const homeRoute = require("./src/routes/mainRoutes");
const userRoute = require("./src/routes/userRoutes");
const productRoute = require("./src/routes/productRoutes");
const apiRoute = require("./src/routes/apiRoutes");
const productController = require("./src/controllers/productController");
const administrador = require("./src/middlewares/administrador")

app.use(cors());


const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(
    session({
        secret:  "Secreto",
        resave: false,
        saveUninitialized:false
    })
)
app.use(administrador);

//routes

app.use("/products", productRoute);
app.use("/user", userRoute);
app.use("/api", apiRoute);
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
