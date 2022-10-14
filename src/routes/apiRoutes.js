const express = require("express");
const router = express.Router();
const { Router } = require('express');
const apiController = require('../controllers/apiController');
//usuarios
router.get("/users", apiController.usuarios)
router.get("/users/:id", apiController.usuarioDetalle)
//productos
router.get("/products", apiController.productos)
router.get("/products/:id", apiController.productoDetalle)

module.exports = router;