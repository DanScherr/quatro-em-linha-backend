//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    postUsuarioLogin
} = require('./../controllers/0005-login');

// Rotas de Login sem parametros
router.route('/')
    .post(postUsuarioLogin)
;

// Exportando model
module.exports = router;