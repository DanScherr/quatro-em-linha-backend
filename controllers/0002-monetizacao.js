//@ts-check
"use strict";

const { error } = require('console');
const Monetizacao = require('../models/0002-monetizacao');
const UsuarioMonetizacao = require('../models/0003-usuarioMonetizacao');
const { Sequelize } = require('sequelize');

/**
 * @description GET ALL -> Similar ao SELECT * do SQL
 * @route           /api/v1/monetizacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllMonetizacao = async (req, res, next) => {
    try {
        const monetizacoes = await Monetizacao.findAll();
        res.status(200).json({ status: true, data: monetizacoes });
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar as monetizações.' });
    }
};

/**
 * @description GET SINGLE PK -> Similar ao SELECT *,
 * WHERE id=1 do SQL
 * @route           /api/v1/monetizacao/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */exports.getMonetizacao = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    // Consulta para obter os IDs de monetização associados ao usuário
    const usuarioMonetizacao = await UsuarioMonetizacao.findAll({
      where: { id_usuario: id },
      attributes: ['id_monetizacao'],
    });

    // @ts-ignore
    const monetizacaoIds = usuarioMonetizacao.map((relacao) => relacao.id_monetizacao);

    if (monetizacaoIds.length > 0) {
        // Consulta para obter as monetizações que não estão associadas ao usuário
        const monetizacao = await Monetizacao.findAll({
          where: {
            id_Mon: {
            // @ts-ignore
              [Sequelize.Op.notIn]: monetizacaoIds,
            },
          },
          attributes: ['id_Mon','nome', 'descricao', 'categoria', 'imagem', 'valor'],
        });
  
        if (monetizacao) {
          res.status(200).json({ status: true, data: monetizacao });
        } else {
          res.status(404).json({ status: false, error: 'Monetizações não encontradas para o usuário.' });
        }
      } else {
        res.status(404).json({ status: false, error: 'Nenhuma relação de usuário monetização encontrada para o usuário.' });
      }
    } catch (error) {
      console.error('Erro ao buscar as monetizações:', error);
      res.status(500).json({ status: false, error: 'Houve um erro ao buscar as monetizações.' });
    }
  };

/**
 * @description POST -> Similar ao INSERT do SQL
 * @route           /api/v1/monetizacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postMonetizacao = async (req, res, next) => {
    const { nome, descricao, categoria, imagem, valor } = req.body;
    try {
        const novaMonetizacao = await Monetizacao.create({
            nome,
            descricao,
            categoria,
            imagem,
            valor,
        });
        res.status(201).json({ status: true, data: novaMonetizacao });
    } catch (error) {
        res.status(400).json({ status: false, error: 'Houve um erro ao criar a monetização.' });
    }
};

/**
 * @description PUT -> Similar ao UPDATE do SQL
 * @route           /api/v1/monetizacao/:id
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.putMonetizacao = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const { nome, descricao, categoria, imagem, valor } = req.body;
    try {
        const monetizacao = await Monetizacao.findByPk(id);
        if (monetizacao) {
            await monetizacao.update({
                nome,
                descricao,
                categoria,
                imagem,
                valor,
            });
            res.status(200).json({ status: true, data: 'Monetização atualizada com sucesso.' });
        } else {
            res.status(404).json({ status: false, error: 'Monetização não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ status: false, error: 'Houve um erro ao atualizar a monetização.' });
    }
};
