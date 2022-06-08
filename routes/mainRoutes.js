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

module.exports = routes;