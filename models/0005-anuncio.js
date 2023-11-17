//@ts-check
"use strict";
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../bin/database");


class Anuncio extends Model {}
// Cria tabela com respectivo Schema
Anuncio.init({
    id_Anun: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome_Anun: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    imagem_Anun: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    empresa_Anun : {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Anuncio',
    tableName: 'Anuncio',
    
});

module.exports = Anuncio;