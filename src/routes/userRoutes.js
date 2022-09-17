const express = require("express");
const routes = express.Router();
const user = require("../controllers/userController");
const multer = require("multer");
const path = require("path");
const {body} = require('express-validator');
const validaciones = require("../middlewares/validaciones");
const upload = require ("../middlewares/uploadFile");
const invitado = require("../middlewares/invitado");
const autenticado = require("../middlewares/autenticado");

//routes.get('/perfil', autenticado , user.perfil);
routes.get('/ingresar', user.ingreso);
routes.post("/ingresar", user.ingresar);
routes.post("/registrar", upload.single('imagenPerfil'), validaciones ,user.registrar);
routes.get('/cerrarSesion', user.cerrarSesion);


module.exports = routes;  