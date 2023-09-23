//@ts-check
"use strict";
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../bin/database");

class Ranking extends Model {}

Ranking.init({
    posicao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_jogador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Usuario', 
            key: 'id_User',
        },
    },
    pontuacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qtd_vitoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qtd_derrota: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Ranking',
    timestamps: false,
});

module.exports = Ranking;
