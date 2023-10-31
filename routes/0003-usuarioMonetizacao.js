//@ts-check
"use strict";
const express = require("express");
const router = express.Router();

// Importando controllers
const {
    getAllUsuarioMonetizacao,
    postUsuarioMonetizacao,
    getUsuarioMonetizacao,
    putUsuarioMonetizacao,
    getAllUsuarioMonetizacaoWithMonetizacao, 
    getUsuarioMonetizacaoWithMonetizacaoByUsuario,
    getUsuarioMonetizacaoWithMonetizacaoByMonetizacao,
    getUsuarioMonetizacaoWithMonetizacaoByMonetizacaoAndUsuario
} = require('./../controllers/0003-usuarioMonetizacao');

// Rotas sem parametros
router.route('/')
    .get(getAllUsuarioMonetizacao)
    .post(postUsuarioMonetizacao)
;

// Rota para obter todas as informações da tabela usuarioMonetizacao com detalhes da monetização
router.route('/all-with-monetizacao')
    .get(getAllUsuarioMonetizacaoWithMonetizacao)
;

// Rota para obter informações da tabela usuarioMonetizacao com detalhes da monetização por ID
router.route('/:id/with-monetizacao-by-usuario')
    .get(getUsuarioMonetizacaoWithMonetizacaoByUsuario)
;

router.route('/:id/with-monetizacao-by-monetizacao')
    .get(getUsuarioMonetizacaoWithMonetizacaoByMonetizacao)
;

router.route('/:id_usuario/with-monetizacao/:id_monetizacao')
    .get(getUsuarioMonetizacaoWithMonetizacaoByMonetizacaoAndUsuario)
;

// Rotas com parametros
router.route('/:id')
    .get(getUsuarioMonetizacao)
    .put(putUsuarioMonetizacao)
;

// Exportando model
module.exports = router;