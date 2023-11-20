//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllAnuncio,
    postAnuncio,
    getAnuncio,
    putAnuncio,
} = require('./../controllers/0006-anuncio');

// Rotas sem parametros
router.route('/')
    .get(getAllAnuncio)
    .post(postAnuncio)
;

// Rotas com parametros
router.route('/:id')
    .get(getAnuncio)
    .put(putAnuncio)
;

// Exportando model
module.exports = router;