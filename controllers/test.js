//@ts-check
"use strict";

const { error } = require('console');
// Importa o Schema da pasta /models
const Teste = require('./../models/test');

/**
 * @description GET ALL -> Similar ao SELECT * do SQL
 * @route           /api/v1/criacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllTest = async (req, res, next) => {
    return Teste.findAll()
    .then((data) => res.status(200).json({status: true, data: data}))
    .catch((err) => {
        res.status(400).json({status: false, data: 'There was an error.'});
        return res.send(err);
    });
};

/**
 * @description GET SINGLE PK -> Similar ao SELECT *,
 * WHERE id=1 do SQL
 * @route           /api/v1/criacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getTest = async (req, res, next) => {
    const id = parseInt(req.params.id);
    return await Teste.findByPk(id)
    .then((data) => res.status(200).json({status: true, data: data}))
    .catch((err) => {
        res.status(400).json({status: false, data: 'There was an error.'});
        return res.send(err);
    });
};

/**
 * @description POST -> Similar ao INSERT do SQL
 * @route           /api/v1/criacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postTest = async (req, res, next) => {
    const { username } = req.body;

    return Teste.create({ username })
    .then(() => {
        res.status(200).json({status: true, data: 'Informações Inseridas.'});
    })
    .catch((err) => {
        res.status(400).json({status: false, data: 'There was an error.'});
        return res.send(err);
    });
};

/**
 * @description PUT -> Similar ao UPDATE do SQL
 * @route           /api/v1/criacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.putTest = async (req, res, next) => {
    const id = parseInt(req.params.id);

    return await Teste.findByPk(id)
    .then(
        (data) => {
            const { username } = req.body;

            return data?.update({ username })
            .then(() => res.status(200).json({status: true, data: 'Informações Atualizadas.'}))
            .catch((err) => {
                res.status(400).json({status: false, data: 'There was an error.'});
                return res.send(err);
            });
        }
    );
};