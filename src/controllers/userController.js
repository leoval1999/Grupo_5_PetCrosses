// Usuarios

const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
let productos = require('./../data/productos.json');
let users = require('./../data/users.json');
let User = require('../models/Users')
const {validationResult} = require('express-validator');

const userController ={
registrar: (req, res) => {
    let file = req.file

   

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
module.exports = userController;