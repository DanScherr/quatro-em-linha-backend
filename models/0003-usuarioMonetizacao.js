//@ts-check
"use strict";
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../bin/database");

class UsuarioMonetizacao extends Model {}

UsuarioMonetizacao.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Usuarios',
            key: 'id_User',
        },
    },
    id_monetizacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Monetizacaos',
            key: 'id_Mon',
        },
    },
}, {
    sequelize,
    modelName: 'UsuarioMonetizacao',
    timestamps: false,
});

module.exports = UsuarioMonetizacao;
