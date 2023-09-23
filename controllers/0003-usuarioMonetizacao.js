//@ts-check
"use strict";

const { error } = require('console');
const UsuarioMonetizacao = require('../models/0003-usuarioMonetizacao');

/**
 * @description GET ALL -> Similar ao SELECT * do SQL
 * @route           /api/v1/usuarioMonetizacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllUsuarioMonetizacao = async (req, res, next) => {
    try {
        const usuarioMonetizacoes = await UsuarioMonetizacao.findAll();
        res.status(200).json({ status: true, data: usuarioMonetizacoes });
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar as relações de usuário monetização.' });
    }
};

/**
 * @description GET SINGLE PK -> Similar ao SELECT *,
 * WHERE id=1 do SQL
 * @route           /api/v1/usuarioMonetizacao/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getUsuarioMonetizacao = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const usuarioMonetizacao = await UsuarioMonetizacao.findByPk(id);
        if (usuarioMonetizacao) {
            res.status(200).json({ status: true, data: usuarioMonetizacao });
        } else {
            res.status(404).json({ status: false, error: 'Relação de usuário monetização não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar a relação de usuário monetização.' });
    }
};

/**
 * @description POST -> Similar ao INSERT do SQL
 * @route           /api/v1/usuarioMonetizacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postUsuarioMonetizacao = async (req, res, next) => {
    const { id_usuario, id_monetizacao } = req.body;
    try {
        const novaRelacao = await UsuarioMonetizacao.create({
            id_usuario,
            id_monetizacao,
        });
        res.status(201).json({ status: true, data: novaRelacao });
    } catch (error) {
        console.error('Erro ao criar a relação de usuário monetização:', error.message);
        res.status(400).json({ status: false, error: 'Houve um erro ao criar a relação de usuário monetização.' });
    }
};


/**
 * @description PUT -> Similar ao UPDATE do SQL
 * @route           /api/v1/usuarioMonetizacao/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.putUsuarioMonetizacao = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const { userId, monetizacaoId } = req.body;
    try {
        const relacao = await UsuarioMonetizacao.findByPk(id);
        if (relacao) {
            await relacao.update({
                userId,
                monetizacaoId,
            });
            res.status(200).json({ status: true, data: 'Relação de usuário monetização atualizada com sucesso.' });
        } else {
            res.status(404).json({ status: false, error: 'Relação de usuário monetização não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao atualizar a relação de usuário monetização.' });
    }
};

/**
 * @description DELETE -> Similar ao DELETE do SQL
 * @route           /api/v1/usuarioMonetizacao/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.deleteUsuarioMonetizacao = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const relacao = await UsuarioMonetizacao.findByPk(id);
        if (relacao) {
            await relacao.destroy();
            res.status(200).json({ status: true, data: 'Relação de usuário monetização excluída com sucesso.' });
        } else {
            res.status(404).json({ status: false, error: 'Relação de usuário monetização não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao excluir a relação de usuário monetização.' });
    }
};
