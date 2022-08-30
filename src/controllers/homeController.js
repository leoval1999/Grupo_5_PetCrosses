const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
let productos = require('./../data/productos.json');
let users = require('./../data/users.json');
let User = require('../models/Users')
const {validationResult} = require('express-validator');

const homeController ={
    inicio: (req,res)=>{ res.render('./products/home')},
    citas: (req,res)=>{res.render('./products/citas')},
    petshop: (req,res)=>{res.render('./products/petshop')},
    registro: (req,res)=>{res.render('./users/registro')}, 
    ingreso: (req,res)=>{res.render('./users/ingreso')},
    carritoCompras: (req,res)=>{res.render('./products/carrito')},
    detalle: (req,res)=>{res.render('./products/detalle')},
    perfil: (req,res) => {
        res.render('./users/perfilUsuario', {
            user: req.session.usuarioLogueado
        })},
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
    // Usuarios
    registrar: (req, res) => {
        let file = req.file
        /* const newId = users[(users.length - 1)].id + 1;
        let usuarioCreado = {
            
            id: newId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo:req.body.correo,
            contrasenia:req.body.contrasenia,
            fechaNacimiento: req.body.fechaNacimiento,
            sexo: req.body.sexo,
           if(file){
            imagenPerfil:  `/img/users/${file.filename}`
           } 
        }
        
            users.push(usuarioCreado);
            fs.writeFileSync(
                path.join(__dirname, "../data/users.json"),
                JSON.stringify(users, null, 4),
                {
                    encoding: "utf-8",
                }
            )
        */
       

        const resultadoValidaciones = validationResult(req);
        if(resultadoValidaciones.errors.length > 0){
            return res.render('./users/registro',{
                errors: resultadoValidaciones.mapped(),
                oldData: req.body
            });    
        }

        let userInDB = User.findField('correo', req.body.correo);
        if (userInDB){
            return res.render('./users/registro',{
                errors: {correo: {
                    msg:'Este Email ya está registrado'
                }
            },
                oldData: req.body
            });    
        }

       let userToCreate = {
        ...req.body,
        contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
            imagenPerfil: `/img/users/${file.filename}`

       }

       User.create(userToCreate);
        return res.redirect('/ingreso')
    },
    ingreso:(req,res) => {
        return res.render('./users/ingreso');
    },

    ingresar: (req, res) => {
       let usuarioRegistrar = User.findField('correo', req.body.correo);
       if(usuarioRegistrar){
        let contraseniaCorrecta = bcryptjs.compareSync(req.body.contrasenia, usuarioRegistrar.contrasenia)
        if(contraseniaCorrecta){
            delete usuarioRegistrar.contrasenia
            req.session.usuarioLogueado = usuarioRegistrar; 
            return res.redirect("/perfil")
        }
       }
       return res.render('./users/ingreso',{
        errors: {
            correo: {
                msg: 'Las credenciales son inválidas'
            }
        }
       })
    },
    cerrarSesion: (req,res) =>{
        req.session.destroy();
        return res.redirect('/');
    }
}
module.exports = homeController;