//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllCotacao,
    postCotacao,
    getCotacao,
    putCotacao,
} = require('./../controllers/0007-cotacao');

// Rotas sem parametros
router.route('/')
    .get(getAllCotacao)
    .post(postCotacao)
;

// Rotas com parametros
router.route('/:id')
    .get(getCotacao)
    .put(putCotacao)
;

// Exportando model
module.exports = router;