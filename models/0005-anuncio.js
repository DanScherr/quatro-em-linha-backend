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

async function criarTabela() {
    try {
        await Anuncio.sync();
        console.log('Tabela Anúncio criada com sucesso.');
    } catch (error) {
        console.error('Erro ao criar a tabela Anúncio:', error);
    }
}

async function inserirDados(dados) {
    try {
        await Anuncio.bulkCreate(dados);
        console.log('Dados de Anúncio inseridos com sucesso.');
    } catch (error) {
        console.error('Erro ao inserir dados de Anúncio:', error);
    } finally {
        //sequelize.close();
    }
}

(async () => {
    const dadosAnuncio = [{
        nome_Anun: "Thought to Break",
        imagem_Anun: "https://img.freepik.com/vetores-gratis/ilustracao-vetorial-de-panfletos-de-propaganda-de-cafe_73621-1144.jpg?w=740&t=st=1700331291~exp=1700331891~hmac=f34c395c14b11ed29d0d89c0472d1e48daf1015ee1cc334e44f8a822def6910c",
        empresa_Anun: "4emlinha",
    },
    {
        nome_Anun: "Propaganda02",
        imagem_Anun: "https://img.freepik.com/fotos-gratis/abstrato-de-lampada-criativa-em-ia-generativa-de-fundo-azul-brilhante_188544-8090.jpg?w=740&t=st=1700331404~exp=1700332004~hmac=19e4650f05d61cc952ba1c113ba876b717694fa9e82a577b7918d4817c76339e",
        empresa_Anun: "4emlinha",
    },];  
    await criarTabela();
    await inserirDados(dadosAnuncio);
})();


module.exports = Anuncio;