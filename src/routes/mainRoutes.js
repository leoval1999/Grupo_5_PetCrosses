const express = require("express");
const routes = express.Router();
const homeRoute = require("../controllers/homeController");
const multer = require("multer");
const path = require("path");
const {body} = require('express-validator')

const validaciones = [
    body('nombre').notEmpty().withMessage('Complete su nombre'),
    body('apellido').notEmpty().withMessage('Complete su apellido'),
    body('correo').notEmpty().withMessage('Debe completar con un correo').bail().isEmail().withMessage('Debe ingresar un correo valido'),
    body('contrasenia').notEmpty().withMessage('Las contraseñas deben ser iguales'),
    body('fechaNacimiento').notEmpty().withMessage('Ingrese su fecha de nacimiento'),
    body('sexo').notEmpty().withMessage('Ingrese su sexo'),
    body('imagenPerfil').custom((value, { req }) => {
        let file = req.file;
        let extensiones = ['.jpg', '.png'];

        if(!file){
            throw new Error('Tienes que cargar una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!extensiones.includes(fileExtension)){
                throw new Error(`Las extension permitidas son ${extensiones.join(', ')}`);
            }
        }
    })
 ]

const storage = multer.diskStorage({
    destination: (req,file,callback) =>{
        let folder = path.join(__dirname,'../../public/img/users');
        callback(null,folder); 
    },
    filename: (req,file,callback) =>{
        let imageName = 'imagenPerfil' + Date.now() + path.extname(file.originalname);
        callback(null,imageName);
    }
})
const upload = multer({storage});

routes.get("/", homeRoute.inicio);
routes.get("/citas", homeRoute.citas);
routes.get("/petshop",homeRoute.petshop);
routes.get("/registro",homeRoute.registro);
routes.get("/ingreso",homeRoute.ingreso);
routes.get("/carrito-compras",homeRoute.carritoCompras);
routes.get("/detalle",homeRoute.detalle);
//productos
routes.get("/products",homeRoute.products);
routes.post("/products/crear-producto", homeRoute.crearProducto),
routes.delete("/products/eliminar-producto/:id", homeRoute.eliminarProducto);
routes.get("/products/edit-producto/:id", homeRoute.modoEditarProducto)
routes.put("/products/editar-producto/:id", homeRoute.editarProducto);
//usuarios
routes.post("/ingresar", homeRoute.ingresar);
routes.post("/registrar", upload.single('imagenPerfil'), validaciones ,homeRoute.registrar);

module.exports = routes;  