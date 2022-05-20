const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.join(__dirname,"/public");

app.listen(3000,()=>console.log("Funcionando 3000"));
app.use(express.static(publicPath));

app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"views/home.html"))})