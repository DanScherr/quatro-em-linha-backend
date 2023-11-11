//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllHistorico,
    createHistorico,
    getHistoricoById,
    updateHistorico
} = require('../controllers/0004-historico');

// Rotas sem parametros
router.route('/')
    .get(getAllHistorico)
    .post(createHistorico)
;

// Rotas com parametros
router.route('/:id')
    .get(getHistoricoById)
    .put(updateHistorico)
;

// Exportando model
module.exports = router;