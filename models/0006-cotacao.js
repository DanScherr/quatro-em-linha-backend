//@ts-check
"use strict";
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../bin/database");


class Contacao extends Model {}
// Cria tabela com respectivo Schema
Contacao.init({
    id_Con: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    valor_Con: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Contacao',
    tableName: 'Contacao',
    
});

async function criarTabela() {
    try {
        await Contacao.sync();
        console.log('Tabela Contacao criada com sucesso.');
    } catch (error) {
        console.error('Erro ao criar a tabela Contacao:', error);
    }
}

async function inserirDados(dados) {
    try {
        await Contacao.bulkCreate(dados);
        console.log('Dados de Contacao inseridos com sucesso.');
    } catch (error) {
        console.error('Erro ao inserir dados de Contacao:', error);
    } finally {
        //sequelize.close();
    }
}

(async () => {
    const dadosContacao = [{
        valor_Con: 2.0,
    },];  
    await criarTabela();
    await inserirDados(dadosContacao);
})();


module.exports = Contacao;