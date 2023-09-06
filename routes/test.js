//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllTest,
    postTest,
    getTest,
    putTest
} = require('./../controllers/test');

// Rotas sem parametros
router.route('/')
    .get(getAllTest)
    .post(postTest)
;

// Rotas com parametros
router.route('/:id')
    .get(getTest)
    .put(putTest)
;

// Exportando model
module.exports = router;