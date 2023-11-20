//@ts-check
"use strict";

const { error } = require('console');
const Anuncio = require('../models/0005-anuncio');

/**
 * @description GET ALL -> Similar ao SELECT * do SQL
 * @route           /api/v1/anuncios
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllAnuncio = async (req, res, next) => {
    try {
        const Anuncios = await Anuncio.findAll();
        res.status(200).json({ status: true, data: Anuncios });
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar os Anúncios.' });
    }
};

/**
 * @description GET SINGLE PK -> Similar ao SELECT *,
 * WHERE id=1 do SQL
 * @route           /api/v1/anuncios/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAnuncio = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const Anuncios = await Anuncio.findByPk(id);
        if (Anuncios) {
            res.status(200).json({ status: true, data: Anuncios });
        } else {
            res.status(404).json({ status: false, error: 'Anúncio não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar o Anúncio.' });
    }
};

/**
 * @description POST -> Similar ao INSERT do SQL
 * @route           /api/v1/Anuncio
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postAnuncio = async (req, res, next) => {
    const { nome_Anun, imagem_Anun, empresa_Anun} = req.body;
    try {
        const novoAnuncio = await Anuncio.create({
            nome_Anun,
            imagem_Anun,
            empresa_Anun,
        });
        res.status(201).json({ status: true, data: novoAnuncio });
    } catch (error) {
        res.status(400).json({ status: false, error: 'Houve um erro ao criar o Anúncio.' });
    }
};

/**
 * @description PUT -> Similar ao UPDATE do SQL
 * @route           /api/v1/Anuncios/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.putAnuncio = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const { nome_anun, imagem_anun, empresa_anun } = req.body;
    try {
        const Anuncios = await Anuncio.findByPk(id);
        if (Anuncios) {
            await Anuncios.update({
                nome_anun,
                imagem_anun,
                empresa_anun,
            });
            res.status(200).json({ status: true, data: 'Anúncio atualizado com sucesso.' });
        } else {
            res.status(404).json({ status: false, error: 'Anúncio não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao atualizar o usuário.' });
    }
};