const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const multer = require("multer");
const path = require("path");
const {body} = require('express-validator');
const validaciones = require("../middlewares/validaciones");
const upload = require ("../middlewares/uploadFile");
const invitado = require("../middlewares/invitado");
const autenticado = require("../middlewares/autenticado");



router.get('/ingresar', invitado, userController.ingreso);
router.get("/registro", invitado, userController.registro)
router.post("/ingresar", userController.ingresar);
router.post("/registrar", upload.single('imagenPerfil'), validaciones ,userController.registrar);
router.get('/perfil', autenticado , userController.perfil);
router.get('/cerrarSesion', userController.cerrarSesion);
router.get('/:id/editar', userController.editar)
router.put('/:id/editar', upload.single('imagenPerfil'), autenticado, userController.actualizar)
router.delete('/:id/borrar', autenticado, userController.borrar)



module.exports = router;  