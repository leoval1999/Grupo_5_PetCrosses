const path = require('path');

const homeController ={
    inicio: (req,res)=>{ res.render('./products/home')},
    citas: (req,res)=>{res.render('./products/citas')},
    petshop: (req,res)=>{res.render('./products/petshop')},
    registro: (req,res)=>{res.render('./users/registro')},
    ingreso: (req,res)=>{res.render('./users/ingreso')},
    carritoCompras: (req,res)=>{res.render('./products/carrito')},
    detalle: (req,res)=>{res.render('./products/detalle')}
}
module.exports = homeController;