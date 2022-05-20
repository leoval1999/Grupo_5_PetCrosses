const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.join(__dirname,"/public");

app.listen(3000,()=>console.log("Funcionando 3000"));
app.use(express.static(publicPath));

app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"views/home.html"))})
app.get("/citas",(req,res)=>{res.sendFile(path.join(__dirname,"views/citas.html"))})
app.get("/petshop",(req,res)=>{res.sendFile(path.join(__dirname,"views/petshop.html"))})
app.get("/registro",(req,res)=>{res.sendFile(path.join(__dirname,"views/registro.html"))})
app.get("/buscador",(req,res)=>{res.sendFile(path.join(__dirname,"views/buscador.html"))})
app.get("/carrito-compras",(req,res)=>{res.sendFile(path.join(__dirname,"views/carrito.html"))})