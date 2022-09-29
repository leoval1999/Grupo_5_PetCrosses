//productos
let db = require("../database/models");
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');


const productController = {

    crear: (req, res) => {
        if(req.session.usuarioLogueado.user_id == 15){
 console.log(req.session.usuarioLogueado.user_id)
        let pedidoCategorias = db.Categoria.findAll()
        let pedidoSubCategorias = db.SubCategoria.findAll()
        Promise.all([pedidoCategorias,pedidoSubCategorias])
            .then(function ([categorias,subcategorias]) {
                return res.render("./admin/products", {categorias:categorias, subcategorias:subcategorias});
            })
        }else{
            res.send("NO PUEDES INGRESAR")
        }
       
    },
     procesarProducto: (req, res) =>{
        let file = req.file ? `/img/${req.file.filename}` : "";
        let categoria = req.body.categoria
        let subcategoria = req.body.subcategoria
         db.Producto.create({
             product_name: req.body.nombre,
             product_price: req.body.precio,
             product_description: req.body.descripcion,
             product_stock: req.body.cantidad,
             categoryID: categoria,
             subcategoryID: subcategoria,
             product_image: file
         })
         .then(respuesta => {
            console.log(respuesta)
            res.redirect("/products/petshop")})
        
     },
     listado: (req,res) => {
        db.Producto.findAll()
        .then(function(productos){
            res.render("./products/petshop", {productos:productos})
        })
     },
     detalle: (req,res) => {
       db.Producto.findByPk(req.params.id)
       
       .then(function(producto){
        let pedidoCategorias = db.Categoria.findByPk(producto.categoryID)
        let pedidoSubCategorias = db.SubCategoria.findByPk(producto.subcategoryID)
        Promise.all([pedidoCategorias,pedidoSubCategorias,producto])
            .then(function ([categoria,subcategoria,producto]) {
                return res.render("./products/detalle", {categoria:categoria, subcategoria:subcategoria, producto:producto});
            })
        
       })
     },
     editar: (req,res)=>{
        let pedidoCategorias = db.Categoria.findAll()
        let pedidoSubCategorias = db.SubCategoria.findAll()
        let pedidoProductos = db.Producto.findByPk(req.params.id)
        Promise.all([pedidoCategorias,pedidoSubCategorias,pedidoProductos])
            .then(function ([categorias,subcategorias,productos]) {
                return res.render("./admin/editProducts", {categorias:categorias, subcategorias:subcategorias, productos:productos});
            })
     },
     actualizar: (req,res)=>{
        let file = req.file ? `/img/${req.file.filename}` : "";
        let categoria = req.body.categoria
        let subcategoria = req.body.subcategoria
         db.Producto.update({
             product_name: req.body.nombre,
             product_price: req.body.precio,
             product_description: req.body.descripcion,
             product_stock: req.body.cantidad,
             categoryID: categoria,
             subcategoryID: subcategoria,
             product_image: file
         },{
            where: {
                product_id: req.params.id
            }
         })
         .then(respuesta => {
            console.log(respuesta)
            res.redirect("/products/petshop")})

         .catch(error => { console.log(error) })
     },
     borrar: (req, res) => {
        db.Producto.destroy({
            where: {
                product_id: req.params.id
            }
        })
        res.redirect('/products/petshop')


    }

    //products: (req,res)=>{res.render('./admin/products', {productos})},
    // crear: (req, res) => {
    //     const newId = productos[(productos.length - 1)].id + 1;
    //     let productoCreado = {
    //         id: newId,
    //         producto: req.body.producto,
    //         precio: req.body.precio,
    //         descripcion: req.body.descripcion, 
    //         cantidad: req.body.cantidad,
    //         img: req.body.img
    //     }
    //     productos.push(productoCreado);
    //     fs.writeFileSync(
    //         path.join(__dirname, "../data/productos.json"),
    //         JSON.stringify(productos, null, 4),
    //         {
    //             encoding: "utf-8",
    //         }
    //     )
    //     res.redirect("/products");
    // },
    // eliminarProducto: (req, res) => {
    //     let id = req.params.id;
    //     productos = productos.filter(item => item.id != id); 
    //     fs.writeFileSync(
    //         path.join(__dirname, "../data/productos.json"),
    //         JSON.stringify(productos, null, 4),
    //         {
    //             encoding: "utf-8",
    //         }
    //     )
    //     res.render("./admin/products", {productos});
    // },
    // modoEditarProducto: (req, res) => {
    //     let id = req.params.id;
    //     let productosEdit = productos.find(item => item.id == id);
    //     res.render("./admin/editProducts", {productosEdit});
    // },
    // editarProducto: (req, res) => {
    //     let id = req.params.id;
    //     const {producto, precio, descripcion, cantidad} = req.body;
    //     productos.forEach(item => {
    //         if(item.id == id) {
    //             item.producto = producto;
    //             item.precio = precio;
    //             item.descripcion = descripcion;
    //             item.cantidad = cantidad;
    //         }
    //     });
    //     fs.writeFileSync(
    //         path.join(__dirname, "../data/productos.json"),
    //         JSON.stringify(productos, null, 4),
    //         {
    //             encoding: "utf-8",
    //         }
    //     )
    //     res.render("./admin/products", {productos});


    // },
    // carritoCompras: (req,res)=>{res.render('./products/carrito')},
    // detalle: (req,res)=>{res.render('./products/detalle')}
    // }
}

module.exports = productController;