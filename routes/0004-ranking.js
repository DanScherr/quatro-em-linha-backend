//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllRankingEntries,
    createRankingEntry,
    getRankingEntry,
    updateRankingEntry
} = require('./../controllers/0004-ranking');

// Rotas sem parametros
router.route('/')
    .get(getAllRankingEntries)
    .post(createRankingEntry)
;

// Rotas com parametros
router.route('/:id')
    .get(getRankingEntry)
    .put(updateRankingEntry)
;

// Exportando model
module.exports = router;