const fs = require('fs');
const path = require('path');
let productos = require('./../data/productos.json');
let users = require('./../data/users.json');
const {validationResult} = require('express-validator');

const homeController ={
    inicio: (req,res)=>{ res.render('./products/home')},
    citas: (req,res)=>{res.render('./products/citas')},
    petshop: (req,res)=>{res.render('./products/petshop')},
    registro: (req,res)=>{res.render('./users/registro')}, 
    ingreso: (req,res)=>{res.render('./users/ingreso')},
    carritoCompras: (req,res)=>{res.render('./products/carrito')},
    detalle: (req,res)=>{res.render('./products/detalle')},
//productos
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


    },
    
    registrar: (req, res) => {
        const newId = users[(users.length - 1)].id + 1;
        let usuarioCreado = {
            id: newId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo:req.body.correo,
            contrasenia:req.body.contrasenia,
            fechaNacimiento: req.body.fechaNacimiento,
            sexo: req.body.sexo,
            imagenPerfil: req.body.imagenPerfil
        }
            users.push(usuarioCreado);
            fs.writeFileSync(
                path.join(__dirname, "../data/users.json"),
                JSON.stringify(users, null, 4),
                {
                    encoding: "utf-8",
                }
            )
        
       

        const resultadoValidaciones = validationResult(req);
        console.log(resultadoValidaciones)
        if(resultadoValidaciones.errors.length > 0){
            return res.render('./users/registro',{
                errors: resultadoValidaciones.mapped(),
                oldData: req.body
            });    
        }

        return res.send('Ok, las validaciones se pasaron y no tienes errores');
    },
    ingresar: (req, res) => {
       res.redirect("/");
    }
}
module.exports = homeController;