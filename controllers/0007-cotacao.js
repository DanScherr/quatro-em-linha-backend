//@ts-check
"use strict";

const { error } = require('console');
const Cotacao = require('../models/0006-cotacao');

/**
 * @description GET ALL -> Similar ao SELECT * do SQL
 * @route           /api/v1/Cotacaos
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllCotacao = async (req, res, next) => {
    try {
        const Cotacaos = await Cotacao.findAll();
        res.status(200).json({ status: true, data: Cotacaos });
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar as Cotações.' });
    }
};

/**
 * @description GET SINGLE PK -> Similar ao SELECT *,
 * WHERE id=1 do SQL
 * @route           /api/v1/Cotacaos/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getCotacao = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const Cotacaos = await Cotacao.findByPk(id);
        if (Cotacaos) {
            res.status(200).json({ status: true, data: Cotacaos });
        } else {
            res.status(404).json({ status: false, error: 'Cotação não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar a Cotação.' });
    }
};

/**
 * @description POST -> Similar ao INSERT do SQL
 * @route           /api/v1/Cotacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postCotacao = async (req, res, next) => {
    const { valor_Con} = req.body;
    try {
        const novoCotacao = await Cotacao.create({
            valor_Con,
        });
        res.status(201).json({ status: true, data: novoCotacao });
    } catch (error) {
        res.status(400).json({ status: false, error: 'Houve um erro ao criar a Cotação.' });
    }
};

/**
 * @description PUT -> Similar ao UPDATE do SQL
 * @route           /api/v1/Cotacaos/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.putCotacao = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const { valor_Con } = req.body;
    try {
        const Cotacaos = await Cotacao.findByPk(id);
        if (Cotacaos) {
            await Cotacaos.update({
                valor_Con,
            });
            res.status(200).json({ status: true, data: 'Cotação atualizada com sucesso.' });
        } else {
            res.status(404).json({ status: false, error: 'Cotação não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao atualizar a Cotação.' });
    }
};