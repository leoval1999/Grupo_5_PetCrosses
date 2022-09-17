const express = require("express");
const routes = express.Router();
const homeRoute = require("../controllers/homeController");
const multer = require("multer");
const path = require("path");
const {body} = require('express-validator');
const validaciones = require("../middlewares/validaciones");
const upload = require ("../middlewares/uploadFile");
const invitado = require("../middlewares/invitado");
const autenticado = require("../middlewares/autenticado");

routes.get("/", homeRoute.inicio);
routes.get("/citas", homeRoute.citas);
routes.get("/petshop",homeRoute.petshop);
routes.get("/registro", invitado ,homeRoute.registro);
routes.get("/ingreso", invitado ,homeRoute.ingreso);
routes.get("/carrito-compras",homeRoute.carritoCompras);
routes.get("/detalle",homeRoute.detalle);


module.exports = routes;  