const path = require('path');

const home ={
    inicio: (req,res)=>{res.sendFile(path.join(__dirname,"../views/home.html"))},
    citas: (req,res)=>{res.sendFile(path.join(__dirname,"../views/citas.html"))},
    petshop: (req,res)=>{res.sendFile(path.join(__dirname,"../views/petshop.html"))},
    registro: (req,res)=>{res.sendFile(path.join(__dirname,"../views/registro.html"))},
    ingreso: (req,res)=>{res.sendFile(path.join(__dirname,"../views/ingreso.html"))},
    buscador: (req,res)=>{res.sendFile(path.join(__dirname,"../views/buscador.html"))},
    carritoCompras: (req,res)=>{res.sendFile(path.join(__dirname,"../views/carrito.html"))},
    detalle: (req,res)=>{res.sendFile(path.join(__dirname,"../views/detalle.html"))}
}
module.exports = home;