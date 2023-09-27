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
    try {
        const loginUsuario = await Usuario.findAll({
            where: {
                email: email,
                senha: senha,
            }
        });

        if (loginUsuario.length !== 0) res.status(200).json({ status: true });
        else res.status(404).json({ status: false });
    } catch (error) {
        res.status(400).json({ status: false, error: 'Houve um erro ao tentar logar o Usuário.' });
    }
};