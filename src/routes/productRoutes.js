const express = require("express");
const routes = express.Router();
const multer = require("multer");
const path = require("path");
const {body} = require('express-validator');
const validaciones = require("../middlewares/validaciones");
const upload = require ("../middlewares/uploadFile");
const invitado = require("../middlewares/invitado");
const autenticado = require("../middlewares/autenticado");

const productController = require("../controllers/productController");



routes.get("/products",productController.crearProducto);

// CREACIÒN
routes.post("/products/crear-producto", productController.crearProducto),
routes.delete("/products/eliminar-producto/:id", productController.eliminarProducto);
routes.get("/products/edit-producto/:id", productController.modoEditarProducto)
routes.put("/products/editar-producto/:id", productController.editarProducto);


module.exports = routes;  