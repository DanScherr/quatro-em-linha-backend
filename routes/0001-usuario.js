//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllUsuario,
    postUsuario,
    getUsuario,
    putUsuario,
} = require('./../controllers/0001-usuario');

// Rotas sem parametros
router.route('/')
    .get(getAllUsuario)
    .post(postUsuario)
;

// Rotas com parametros
router.route('/:id')
    .get(getUsuario)
    .put(putUsuario)
;

// Exportando model
module.exports = router;