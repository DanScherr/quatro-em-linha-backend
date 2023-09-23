//@ts-check
"use strict";

const { error } = require('console');
const Usuario = require('../models/0001-usuario');

/**
 * @description GET ALL -> Similar ao SELECT * do SQL
 * @route           /api/v1/usuarios
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllUsuario = async (req, res, next) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json({ status: true, data: usuarios });
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar os usuários.' });
    }
};

/**
 * @description GET SINGLE PK -> Similar ao SELECT *,
 * WHERE id=1 do SQL
 * @route           /api/v1/usuarios/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getUsuario = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            res.status(200).json({ status: true, data: usuario });
        } else {
            res.status(404).json({ status: false, error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar o usuário.' });
    }
};

/**
 * @description POST -> Similar ao INSERT do SQL
 * @route           /api/v1/usuarios
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postUsuario = async (req, res, next) => {
    const { nome, email, senha, telefone, dataNascimento, sexo, status } = req.body;
    try {
        const novoUsuario = await Usuario.create({
            nome,
            email,
            senha,
            telefone,
            dataNascimento,
            sexo,
            status,
        });
        res.status(201).json({ status: true, data: novoUsuario });
    } catch (error) {
        res.status(400).json({ status: false, error: 'Houve um erro ao criar o usuário.' });
    }
};

/**
 * @description PUT -> Similar ao UPDATE do SQL
 * @route           /api/v1/usuarios/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.putUsuario = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const { nome, email, senha, telefone, dataNascimento, sexo, status } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            await usuario.update({
                nome,
                email,
                senha,
                telefone,
                dataNascimento,
                sexo,
                status,
            });
            res.status(200).json({ status: true, data: 'Usuário atualizado com sucesso.' });
        } else {
            res.status(404).json({ status: false, error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao atualizar o usuário.' });
    }
};
