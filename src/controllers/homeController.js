const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
let productos = require('./../data/productos.json');
let users = require('./../data/users.json');
let User = require('../models/Users')
const {validationResult} = require('express-validator');
let db = require("../database/models");
const sequelize = require('sequelize');

const homeController ={
    inicio: (req,res)=>{ 
        db.Producto.findAll()
        .then(function(productos){
            res.render('./products/home', {productos:productos})
        })
        
    },
    citas: (req,res)=>{res.render('./products/citas')},
    petshop: (req,res)=>{res.render('./products/petshop')},
    registro: (req,res)=>{res.render('./users/registro')}, 
    ingreso: (req,res)=>{res.render('./users/ingreso')},
    
    perfil: (req,res) => {
        res.render('./users/perfilUsuario', {
            user: req.session.usuarioLogueado
        })},
    test: {
        funciona: (req, res) => {
            db.Usuario.findByPk(1)
                .then(usuario => {
                    console.log(usuario.user_name)
                    if (usuario.user_name == 'Leonel') {
                        res.send('Funciona!!');
                    }
                });
        }
    }
            
        
    

}
    
module.exports = homeController;