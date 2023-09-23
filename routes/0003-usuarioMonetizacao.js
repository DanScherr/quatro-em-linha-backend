//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllUsuarioMonetizacao,
    postUsuarioMonetizacao,
    getUsuarioMonetizacao,
    putUsuarioMonetizacao
} = require('./../controllers/0003-usuarioMonetizacao');

// Rotas sem parametros
router.route('/')
    .get(getAllUsuarioMonetizacao)
    .post(postUsuarioMonetizacao)
;

// Rotas com parametros
router.route('/:id')
    .get(getUsuarioMonetizacao)
    .put(putUsuarioMonetizacao)
;

// Exportando model
module.exports = router;