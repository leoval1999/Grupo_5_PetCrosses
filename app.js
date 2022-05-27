const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.join(__dirname,"/public");

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`Corriendo puerto ${port}` )
});
app.use(express.static(publicPath));

app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"views/home.html"))})
app.get("/citas",(req,res)=>{res.sendFile(path.join(__dirname,"views/citas.html"))})
app.get("/petshop",(req,res)=>{res.sendFile(path.join(__dirname,"views/petshop.html"))})
app.get("/registro",(req,res)=>{res.sendFile(path.join(__dirname,"views/registro.html"))})
app.get("/ingreso",(req,res)=>{res.sendFile(path.join(__dirname,"views/ingreso.html"))})
app.get("/buscador",(req,res)=>{res.sendFile(path.join(__dirname,"views/buscador.html"))})
app.get("/carrito-compras",(req,res)=>{res.sendFile(path.join(__dirname,"views/carrito.html"))})
app.get("/detalle",(req,res)=>{res.sendFile(path.join(__dirname,"views/detalle.html"))})