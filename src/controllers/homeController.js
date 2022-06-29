const fs = require('fs');
const path = require('path');
let productos = require('./../data/productos.json');

const homeController ={
    inicio: (req,res)=>{ res.render('./products/home')},
    citas: (req,res)=>{res.render('./products/citas')},
    petshop: (req,res)=>{res.render('./products/petshop')},
    registro: (req,res)=>{res.render('./users/registro')}, 
    ingreso: (req,res)=>{res.render('./users/ingreso')},
    carritoCompras: (req,res)=>{res.render('./products/carrito')},
    detalle: (req,res)=>{res.render('./products/detalle')},
    products: (req,res)=>{res.render('./admin/products', {productos})},
    crearProducto: (req, res) => {
         const newId = productos[(productos.length - 1)].id + 1;
        let productoCreado = {
            id: newId,
            producto: req.body.producto,
            precio: req.body.precio,
            descripcion: req.body.descripcion, 
            cantidad: req.body.cantidad,
            img: req.body.img
        }
        productos.push(productoCreado);
        fs.writeFileSync(
            path.join(__dirname, "../data/productos.json"),
            JSON.stringify(productos, null, 4),
            {
                encoding: "utf-8",
            }
        )
        res.redirect("/products");
    },
    eliminarProducto: (req, res) => {
        let id = req.params.id;
        productos = productos.filter(item => item.id != id); 
        fs.writeFileSync(
            path.join(__dirname, "../data/productos.json"),
            JSON.stringify(productos, null, 4),
            {
                encoding: "utf-8",
            }
        )
        res.render("./admin/products", {productos});
    },
    modoEditarProducto: (req, res) => {
        let id = req.params.id;
        let productosEdit = productos.find(item => item.id == id);
        res.render("./admin/editProducts", {productosEdit});
    },
    editarProducto: (req, res) => {
        let id = req.params.id;
        const {producto, precio, descripcion, cantidad} = req.body;
        productos.forEach(item => {
            if(item.id == id) {
                item.producto = producto;
                item.precio = precio;
                item.descripcion = descripcion;
                item.cantidad = cantidad;
            }
        });
        fs.writeFileSync(
            path.join(__dirname, "../data/productos.json"),
            JSON.stringify(productos, null, 4),
            {
                encoding: "utf-8",
            }
        )
        res.render("./admin/products", {productos});


    }
}
console.log(productos.length);
module.exports = homeController;