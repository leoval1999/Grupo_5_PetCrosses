const express = require("express");
const router = express.Router();
const homeRoute = require("../controllers/homeController");
const multer = require("multer");
const path = require("path");
const {body} = require('express-validator');
const validaciones = require("../middlewares/validaciones");
const upload = require ("../middlewares/uploadFile");
const invitado = require("../middlewares/invitado");
const autenticado = require("../middlewares/autenticado");

router.get("/", homeRoute.inicio);
//router.get("/citas", homeRoute.citas);
router.get("/petshop",homeRoute.petshop);
router.get("/test", homeRoute.test.funciona);




module.exports = router;  