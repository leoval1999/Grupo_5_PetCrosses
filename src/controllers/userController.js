// Usuarios

const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
let productos = require('./../data/productos.json');
let user = require('./../data/users.json');
let User = require('../models/Users')
const { validationResult } = require('express-validator');
//const sequelize = require('sequelize')
//const { Sequelize } = require('../database/models'); INUTIL
let db = require('../database/models');




const userController = {
    registro: (req, res) => {
        db.Usuario.findAll()
            .then((usuarios) => {
                return res.render("./users/registro", { usuarios: usuarios })
            })
    },
    registrar: (req, res) => { //create
        let file = req.file ? `/img/users/${req.file.filename}` : "";
        const resultadoValidaciones = validationResult(req);
        if (resultadoValidaciones.errors.length > 0) {
            return res.render('./users/registro', {
                errors: resultadoValidaciones.mapped(),
                oldData: req.body
            });
        } else {
            db.Usuario.create({
                user_name: req.body.nombre,
                user_surname: req.body.apellido,
                user_email: req.body.correo,
                user_password: bcryptjs.hashSync(req.body.contrasenia, 10),
                user_image: file,
                user_date: req.body.fechaNacimiento,
                user_gender: req.body.sexo
            })

            return res.redirect('/user/ingresar')
        }

    },
    ingreso: (req, res) => {

        return res.render('./users/ingreso');
    },
    ingresar: (req, res) => {
        let usuarioALoguear = db.Usuario.findOne({
            where: {
                user_email: req.body.correo
            }
        }).then((usuarioALoguear) => {
            if (usuarioALoguear) {
                let contraseniaCorrecta = bcryptjs.compareSync(req.body.contrasenia, usuarioALoguear.user_password)

                if (contraseniaCorrecta) {

                    req.session.usuarioLogueado = usuarioALoguear;
                    return res.redirect("/user/perfil")
                }
            }

            return res.render('./users/ingreso', {
                errors: {
                    correo: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            })
        })

    },
    cerrarSesion: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },
    perfil: (req, res) => {
        return res.render('users/perfilUsuario', { user: req.session.usuarioLogueado })
    },
    editar: (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then((function (usuario) {
                res.render('users/editarUsuario', { usuario: usuario })
            }))

    },
    actualizar: (req, res) => {
        let file = req.file ? `/img/users/${req.file.filename}` : "";
        let contrasenia = req.body.contrasenia;

        db.Usuario.update({
            user_name: req.body.nombre,
            user_surname: req.body.apellido,
            user_email: req.body.correo,
            if(contrasenia) { user_password: bcryptjs.hashSync(contrasenia, 10) },
            user_image: file,
            user_date: req.body.fechaNacimiento,
            user_gender: req.body.sexo
        }, {
            where: {
                user_id: req.params.id
            }
        })
            .then(respuesta => {
                console.log(respuesta)
                res.redirect("/user/perfil")
            })
            .catch(error => { console.log(error) })
    },
    borrar: (req, res) => {
        db.Usuario.destroy({
            where: {
                user_id: req.params.id
            }
        })
        console.log(req.params.id)
        req.session.destroy();
        res.redirect('/user/ingresar')


    }

}

module.exports = userController;
