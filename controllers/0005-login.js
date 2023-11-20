//@ts-check
"use strict";

const { error } = require('console');
const Usuario = require('../models/0001-usuario');

/**
 * @description POST -> Similar ao INSERT do SQL
 * @route           /api/v1/usuarios
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postUsuarioLogin = async (req, res, next) => {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email: email } });
    try {
        if (usuario && await usuario.verificaSenha(senha)) {
            // Senha correta, permita o login
            // @ts-ignore
            res.status(200).json({ status: true, id: usuario.id_User});
          } else {
            // Senha incorreta, negue o login
            res.status(404).json({ status: false });
          }
    } catch (error) {
        res.status(400).json({ status: false, error: 'Houve um erro ao tentar logar o Usuário.' });
    }
};