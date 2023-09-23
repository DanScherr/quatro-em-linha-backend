//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllMonetizacao,
    postMonetizacao,
    getMonetizacao,
    putMonetizacao
} = require('./../controllers/0002-monetizacao');

// Rotas sem parametros
router.route('/')
    .get(getAllMonetizacao)
    .post(postMonetizacao)
;

// Rotas com parametros
router.route('/:id')
    .get(getMonetizacao)
    .put(putMonetizacao)
;

// Exportando model
module.exports = router;