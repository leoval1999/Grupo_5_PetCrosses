const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {body} = require('express-validator');
const validaciones = require("../middlewares/validaciones");
const upload = require ("../middlewares/uploadFile");
const invitado = require("../middlewares/invitado");
const autenticado = require("../middlewares/autenticado");

const productController = require("../controllers/productController");

router.get("/crear",productController.crear);


// router.get("/",productController.crearProducto);

// // CREACIÒN
// router.post("/crear-producto", productController.crearProducto),
// router.delete("/eliminar-producto/:id", productController.eliminarProducto);
// router.get("/edit-producto/:id", productController.modoEditarProducto)
// router.put("/editar-producto/:id", productController.editarProducto);
// router.get("/carrito-compras",productController.carritoCompras);
// router.get("/detalle",productController.detalle);


module.exports = router;  