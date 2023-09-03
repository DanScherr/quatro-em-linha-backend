//@ts-check
"use strict";

const express = require("express");

const router = express.Router();

const {
    postTest
} = require('./../controllers/test');

// Rotas sem parametros
router.route('/')
    .post(postTest)
;

// Rotas com parametros

// Exportando model
module.exports = router;