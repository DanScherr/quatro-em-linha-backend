//@ts-check
"use strict";

// @ts-ignore
// @ts-ignore
const { error } = require('console');
const UsuarioMonetizacao = require('../models/0003-usuarioMonetizacao');
const Monetizacao = require('../models/0002-monetizacao');

/**
 * @description GET ALL -> Similar ao SELECT * do SQL
 * @route           /api/v1/usuarioMonetizacao
 * @access          Public
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// @ts-ignore
// @ts-ignore
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
// @ts-ignore
// @ts-ignore
exports.getUsuarioMonetizacao = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const usuarioMonetizacao = await UsuarioMonetizacao.findAll({
            where: {id_usuario: id }
          });
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
// @ts-ignore
// @ts-ignore
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
// @ts-ignore
// @ts-ignore
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
// @ts-ignore
// @ts-ignore
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

// @ts-ignore
// @ts-ignore
exports.getAllUsuarioMonetizacaoWithMonetizacao = async (req, res, next) => {
  try {
    const usuarioMonetizacoes = await UsuarioMonetizacao.findAll({
      attributes: ['id_usuario', 'id_monetizacao'], // Adicione outras colunas que você deseja na saída
    });

    // @ts-ignore
    const monetizacaoIds = usuarioMonetizacoes.map((relacao) => relacao.id_monetizacao);

    if (monetizacaoIds.length === 0) {
      return res.status(404).json({ status: false, error: 'Nenhuma relação de usuário monetização com detalhes de monetização encontrada' });
    }

    const monetizacoes = await Monetizacao.findAll({
      where: { id_Mon: monetizacaoIds },
      attributes: ['nome', 'descricao', 'categoria', 'imagem', 'valor'],
    });

    if (monetizacoes.length > 0) {
      // Combine as informações da relação de usuário monetização com as informações da monetização
      // @ts-ignore
      const resultado = usuarioMonetizacoes.map((relacao) => {
        // @ts-ignore
        const monetizacao = monetizacoes.find((m) => m.id_Mon === relacao.id_monetizacao);
        return {
          // @ts-ignore
          id_Mon: relacao.id,
          // @ts-ignore
          id_User: relacao.id_usuario,
          monetizacao: monetizacao,
        };
      });

      res.status(200).json({ status: true, data: monetizacoes });
    } else {
      res.status(404).json({ status: false, error: 'Nenhuma relação de usuário monetização com detalhes de monetização encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar as relações de usuário monetização com detalhes da monetização:', error);
    res.status(500).json({ status: false, error: 'Houve um erro ao buscar as relações de usuário monetização com detalhes da monetização.' });
  }
};
  
// @ts-ignore
exports.getUsuarioMonetizacaoWithMonetizacaoByUsuario = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
      const usuarioMonetizacao = await UsuarioMonetizacao.findAll({
        where: {id_usuario: id },
        attributes: ['id_usuario', 'id_monetizacao'], // Adicione outras colunas que você deseja na saída
      });

      // @ts-ignore
      const monetizacaoIds = usuarioMonetizacao.map((relacao) => relacao.id_monetizacao);
  
      if (!usuarioMonetizacao) {
        return res.status(404).json({ status: false, error: 'Relação de usuário monetização não encontrada' });
      }

      const monetizacao = await Monetizacao.findAll({
        where: { id_Mon: monetizacaoIds },
        attributes: ['nome', 'descricao', 'categoria', 'imagem', 'valor'],
      });
  
      if (monetizacao) {
        // Combine as informações da relação de usuário monetização com as informações da monetização
        const resultado = {
          // @ts-ignore
          id: usuarioMonetizacao.id,
          // @ts-ignore
          id_usuario: usuarioMonetizacao.id_usuario,
          monetizacao: monetizacao,
        };
  
        res.status(200).json({ status: true, data: monetizacao });
      } else {
        res.status(404).json({ status: false, error: 'Detalhes da monetização não encontrados' });
      }
    } catch (error) {
      console.error('Erro ao buscar a relação de usuário monetização com detalhes da monetização:', error);
      res.status(500).json({ status: false, error: 'Houve um erro ao buscar a relação de usuário monetização com detalhes da monetização.' });
    }
  };

  
// @ts-ignore
exports.getUsuarioMonetizacaoWithMonetizacaoByMonetizacao = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
      const usuarioMonetizacao = await UsuarioMonetizacao.findAll({
        where: {id_monetizacao: id },
        attributes: ['id_usuario', 'id_monetizacao'], // Adicione outras colunas que você deseja na saída
      });

      // @ts-ignore
      const monetizacaoIds = usuarioMonetizacao.map((relacao) => relacao.id_monetizacao);
  
      if (!usuarioMonetizacao) {
        return res.status(404).json({ status: false, error: 'Relação de usuário monetização não encontrada' });
      }

      const monetizacao = await Monetizacao.findAll({
        where: { id_Mon: monetizacaoIds },
        attributes: ['nome', 'descricao', 'categoria', 'imagem', 'valor'],
      });
  
      if (monetizacao) {
        // Combine as informações da relação de usuário monetização com as informações da monetização
        const resultado = {
          // @ts-ignore
          id: usuarioMonetizacao.id,
          // @ts-ignore
          id_usuario: usuarioMonetizacao.id_usuario,
          monetizacao: monetizacao,
        };
  
        res.status(200).json({ status: true, data: monetizacao });
      } else {
        res.status(404).json({ status: false, error: 'Detalhes da monetização não encontrados' });
      }
    } catch (error) {
      console.error('Erro ao buscar a relação de usuário monetização com detalhes da monetização:', error);
      res.status(500).json({ status: false, error: 'Houve um erro ao buscar a relação de usuário monetização com detalhes da monetização.' });
    }
  };
  
  // @ts-ignore
exports.getUsuarioMonetizacaoWithMonetizacaoByMonetizacaoAndUsuario = async (req, res, next) => {
    const id = parseInt(req.params.id_monetizacao);
    const idUsuario = parseInt(req.params.id_usuario);
    try {
      const usuarioMonetizacao = await UsuarioMonetizacao.findAll({
        where: {id_monetizacao: id, id_usuario: idUsuario},
        attributes: ['id_usuario', 'id_monetizacao'], // Adicione outras colunas que você deseja na saída
      });

      // @ts-ignore
      const monetizacaoIds = usuarioMonetizacao.map((relacao) => relacao.id_monetizacao);
  
      if (!usuarioMonetizacao) {
        return res.status(404).json({ status: false, error: 'Relação de usuário monetização não encontrada' });
      }

      const monetizacao = await Monetizacao.findAll({
        where: { id_Mon: monetizacaoIds },
        attributes: ['nome', 'descricao', 'categoria', 'imagem', 'valor'],
      });
  
      if (monetizacao) {
        // Combine as informações da relação de usuário monetização com as informações da monetização
        const resultado = {
          // @ts-ignore
          id: usuarioMonetizacao.id,
          // @ts-ignore
          id_usuario: usuarioMonetizacao.id_usuario,
          monetizacao: monetizacao,
        };
  
        res.status(200).json({ status: true, data: monetizacao });
      } else {
        res.status(404).json({ status: false, error: 'Detalhes da monetização não encontrados' });
      }
    } catch (error) {
      console.error('Erro ao buscar a relação de usuário monetização com detalhes da monetização:', error);
      res.status(500).json({ status: false, error: 'Houve um erro ao buscar a relação de usuário monetização com detalhes da monetização.' });
    }
  };