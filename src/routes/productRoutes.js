const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");
const {body} = require('express-validator');
const validaciones = require("../middlewares/validaciones");
const upload = require ("../middlewares/multerProductos");
const invitado = require("../middlewares/invitado");
const autenticado = require("../middlewares/autenticado");




router.get("/crear",productController.crear);
router.post("/crear",upload.single('img'),productController.procesarProducto);
router.get("/petshop",productController.listado);
router.get("/:id/petshop",productController.detalle);
router.get("/:id/editar",productController.editar);
router.put("/:id/editar",upload.single('img'),productController.actualizar);
router.delete("/:id/petshop/borrar",productController.borrar);





// // CREACIÒN
// router.post("/crear-producto", productController.crearProducto),
// router.delete("/eliminar-producto/:id", productController.eliminarProducto);
// router.get("/edit-producto/:id", productController.modoEditarProducto)
// router.put("/editar-producto/:id", productController.editarProducto);
// router.get("/carrito-compras",productController.carritoCompras);
// router.get("/detalle",productController.detalle);


module.exports = router;  