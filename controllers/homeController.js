const path = require('path');

const homeController ={
    inicio: (req,res)=>{ res.render('home')},
    citas: (req,res)=>{res.render('citas')},
    petshop: (req,res)=>{res.render('petshop')},
    registro: (req,res)=>{res.render('registro')},
    ingreso: (req,res)=>{res.render('ingreso')},
    carritoCompras: (req,res)=>{res.render('carrito')},
    detalle: (req,res)=>{res.render('detalle')}
}
module.exports = homeController;