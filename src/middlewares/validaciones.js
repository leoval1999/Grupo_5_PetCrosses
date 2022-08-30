const path = require("path");
const multer = require("multer"); 
const {body} = require('express-validator');

const validaciones = [
    body('nombre').notEmpty().withMessage('Complete su nombre'),
    body('apellido').notEmpty().withMessage('Complete su apellido'),
    body('correo').notEmpty().withMessage('Debe completar con un correo').bail().isEmail().withMessage('Debe ingresar un correo valido'),
    body('contrasenia').notEmpty().withMessage('Las contraseñas deben ser iguales'),
    body('fechaNacimiento').notEmpty().withMessage('Ingrese su fecha de nacimiento'),
    body('sexo').notEmpty().withMessage('Ingrese su sexo'),
    body('imagenPerfil').custom((value, { req }) => {
        let file = req.file;
        let extensiones = ['.jpg', '.png','.gif'];
        
        

        if (!file){ 
            throw new Error('Tienes que cargar una imagen');
        }else{
            let archivoExtensiones = path.extname(file.originalname);
            if (!extensiones.includes(archivoExtensiones.toLowerCase())) {
                console.log(archivoExtensiones)
                throw new Error(`Las extension permitidas son ${extensiones.join(', ')}`);
            }
        }
        return true;
    })
 ]

 module.exports = validaciones;  