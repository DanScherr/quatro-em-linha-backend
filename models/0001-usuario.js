//@ts-check
"use strict";
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../bin/database");
const bcrypt = require('bcryptjs');


class Usuario extends Model {
    async verificaSenha(senha) {
    // @ts-ignore
    return bcrypt.compare(senha, this.senha);
  }}
// Cria tabela com respectivo Schema
Usuario.init({
    id_User: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Usuario',
    hooks: {
        beforeCreate: async (usuario) => {
          const saltRounds = 10; // Número de rounds para a criptografia
          // @ts-ignore
          const hashedPassword = await bcrypt.hash(usuario.senha, saltRounds);
          // @ts-ignore
          usuario.senha = hashedPassword;
        },
      },
});

module.exports = Usuario;