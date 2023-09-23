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
            model: 'Usuario',
            key: 'id_User',
        },
    },
    id_monetizacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Monetizacao',
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'UsuarioMonetizacao',
    timestamps: false,
});

module.exports = UsuarioMonetizacao;
