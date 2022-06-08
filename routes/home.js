const express = require("express");
let router = express.Router();
const homeRoute = require("../controllers/home");

router.get("/", homeRoute.inicio);
router.get("/citas", homeRoute.citas);
router.get("/petshop",homeRoute.petshop);
router.get("/registro",homeRoute.registro);
router.get("/ingreso",homeRoute.ingreso);
router.get("/buscador",homeRoute.buscador);
router.get("/carrito-compras",homeRoute.carritoCompras);
router.get("/detalle",homeRoute.detalle);

module.exports = router;