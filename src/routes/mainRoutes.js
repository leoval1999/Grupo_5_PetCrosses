const express = require("express");
const routes = express.Router();
const homeRoute = require("../controllers/homeController");

routes.get("/", homeRoute.inicio);
routes.get("/citas", homeRoute.citas);
routes.get("/petshop",homeRoute.petshop);
routes.get("/registro",homeRoute.registro);
routes.get("/ingreso",homeRoute.ingreso);
routes.get("/carrito-compras",homeRoute.carritoCompras);
routes.get("/detalle",homeRoute.detalle);
routes.get("/products",homeRoute.products);
routes.post("/products/crear-producto", homeRoute.crearProducto),
routes.delete("/products/eliminar-producto/:id", homeRoute.eliminarProducto);
routes.get("/products/edit-producto/:id", homeRoute.modoEditarProducto)
routes.put("/products/editar-producto/:id", homeRoute.editarProducto);
module.exports = routes;  