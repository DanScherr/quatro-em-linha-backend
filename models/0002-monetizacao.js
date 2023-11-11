//@ts-check
"use strict";
const { Model, DataTypes } = require('sequelize');
const sequelize = require("../bin/database");

class Monetizacao extends Model {}

Monetizacao.init({
    id_Mon: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Monetizacao',
    tableName: 'Monetizacao',
});

async function criarTabela() {
    try {
        await Monetizacao.sync();
        console.log('Tabela Monetizacao criada com sucesso.');
    } catch (error) {
        console.error('Erro ao criar a tabela Monetizacao:', error);
    }
}

async function inserirDados(dados) {
    try {
        await Monetizacao.bulkCreate(dados);
        console.log('Dados de Monetizacao inseridos com sucesso.');
    } catch (error) {
        console.error('Erro ao inserir dados de Monetizacao:', error);
    } finally {
        //sequelize.close();
    }
}

(async () => {
    const dadosMonetizacao = [{
        nome: 'Rey',
        descricao: 'Figurinha do Rey de Star Wars',
        categoria: 'star-wars',
        imagem: 'rey.png',
        valor: 5.0,
    },
    {
        nome: 'Jedi',
        descricao: 'Figurinha de Jedi de Star Wars',
        categoria: 'star-wars',
        imagem: 'jedi.png',
        valor: 5.0,
    },
    {
        nome: 'Jangofett',
        descricao: 'Figurinha de Jangofett de Star Wars',
        categoria: 'star-wars',
        imagem: 'jangofett.png',
        valor: 5.0,
    },
    {
        nome: 'Luke',
        descricao: 'Figurinha do Luke de Star Wars',
        categoria: 'star-wars',
        imagem: 'luke.png',
        valor: 5.0,
    },
    {
        nome: 'Ahsoka',
        descricao: 'Figurinha da Ahsoka de Star Wars',
        categoria: 'star-wars',
        imagem: 'ahsoka.png',
        valor: 5.0,
    },
    {
        nome: 'Grogu',
        descricao: 'Figurinha do Grogu de Star Wars',
        categoria: 'star-wars',
        imagem: 'grogu.png',
        valor: 5.0,
    },
    {
        nome: 'GalacticempireLogo',
        descricao: 'Figurinha da logo de GalacticempireLogo de Star Wars',
        categoria: 'star-wars',
        imagem: 'galacticempireLogo.png',
        valor: 5.0,
    },
    {
        nome: 'RebelLogo',
        descricao: 'Figurinha da logo de RebelLogo de Star Wars',
        categoria: 'star-wars',
        imagem: 'rebelLogo.png',
        valor: 5.0,
    },
    {
        nome: 'Darthvader',
        descricao: 'Figurinha do Darthvader de Star Wars',
        categoria: 'star-wars',
        imagem: 'darthvader.png',
        valor: 5.0,
    },
    {
        nome: 'Chewbaca',
        descricao: 'Figurinha do Chewbaca de Star Wars',
        categoria: 'star-wars',
        imagem: 'chewbaca.png',
        valor: 5.0,
    },
    {
        nome: 'Virgem',
        descricao: 'Figurinha do signo virgem',
        categoria: 'signos',
        imagem: 'Virgem.png',
        valor: 5.0,
    },
    {
        nome: 'Leão',
        descricao: 'Figurinha do signo leão',
        categoria: 'signos',
        imagem: 'Leão.png',
        valor: 5.0,
    },
    {
        nome: 'Câncer',
        descricao: 'Figurinha do signo câncer',
        categoria: 'signos',
        imagem: 'Câncer.png',
        valor: 5.0,
    },
    {
        nome: 'Gêmeos',
        descricao: 'Figurinha do signo gêmeos',
        categoria: 'signos',
        imagem: 'Gêmeos.png',
        valor: 5.0,
    },
    {
        nome: 'Áries',
        descricao: 'Figurinha do signo áries',
        categoria: 'signos',
        imagem: 'Áries.png',
        valor: 5.0,
    },
    {
        nome: 'Touro',
        descricao: 'Figurinha do signo touro',
        categoria: 'signos',
        imagem: 'Touro.png',
        valor: 5.0,
    },
    {
        nome: 'Aquário',
        descricao: 'Figurinha do signo aquário',
        categoria: 'signos',
        imagem: 'Aquário.png',
        valor: 5.0,
    },
    {
        nome: 'Peixes',
        descricao: 'Figurinha do signo peixes',
        categoria: 'signos',
        imagem: 'Peixes.png',
        valor: 5.0,
    },
    {
        nome: 'Capricórnio',
        descricao: 'Figurinha do signo capricórnio',
        categoria: 'signos',
        imagem: 'Capricórnio.png',
        valor: 5.0,
    },
    {
        nome: 'Sagitário',
        descricao: 'Figurinha do signo sagitário',
        categoria: 'signos',
        imagem: 'Sagitário.png',
        valor: 5.0,
    },
    {
        nome: 'Escorpião',
        descricao: 'Figurinha do signo escorpião',
        categoria: 'signos',
        imagem: 'Escorpião.png',
        valor: 5.0,
    },
    {
        nome: 'Libra',
        descricao: 'Figurinha do signo libra',
        categoria: 'signos',
        imagem: 'Libra.png',
        valor: 5.0,
    },
    {
        nome: 'Natal',
        descricao: 'Figurinha do natal',
        categoria: 'diversos',
        imagem: 'Natal-att.png',
        valor: 5.0,
    },
    {
        nome: 'Verão',
        descricao: 'Figurinha do verão',
        categoria: 'diversos',
        imagem: 'Verão.png',
        valor: 5.0,
    },
    {
        nome: 'Páscoa',
        descricao: 'Figurinha da páscoa',
        categoria: 'diversos',
        imagem: 'Páscoa.png',
        valor: 5.0,
    },
    {
        nome: 'Halloween',
        descricao: 'Figurinha do halloween',
        categoria: 'diversos',
        imagem: 'Halloween.png',
        valor: 5.0,
    },
    {
        nome: 'Lufa Lufa',
        descricao: 'Figurinha da casa Lufa Lufa do filme Harry Potter',
        categoria: 'Harry-Potter',
        imagem: 'Lufa-Lufa.png',
        valor: 5.0,
    },
    {
        nome: 'Corvinal',
        descricao: 'Figurinha da casa Corvinal do filme Harry Potter',
        categoria: 'Harry-Potter',
        imagem: 'Corvinal.png',
        valor: 5.0,
    },
    {
        nome: 'Sonserina',
        descricao: 'Figurinha da casa Sonserina do filme Harry Potter',
        categoria: 'Harry-Potter',
        imagem: 'Sonserina.png',
        valor: 5.0,
    },
    {
        nome: 'Grifinória',
        descricao: 'Figurinha da casa Grifinória do filme Harry Potter',
        categoria: 'Harry-Potter',
        imagem: 'Grifinória.png',
        valor: 5.0,
    },
    {
        nome: 'São Paulo',
        descricao: 'Figurinha do time São Paulo',
        categoria: 'futebol',
        imagem: 'São Paulo.png',
        valor: 5.0,
    },
    {
        nome: 'Santos',
        descricao: 'Figurinha do time Santos',
        categoria: 'futebol',
        imagem: 'Santos.png',
        valor: 5.0,
    },
    {
        nome: 'Corinthians',
        descricao: 'Figurinha do time Corinthians',
        categoria: 'futebol',
        imagem: 'Corinthians.png',
        valor: 5.0,
    },
    {
        nome: 'Palmeiras',
        descricao: 'Figurinha do time Palmeiras',
        categoria: 'futebol',
        imagem: 'Palmeiras.png',
        valor: 5.0,
    },
    {
        nome: 'Worf',
        descricao: 'Figurinha do Worf de Star Trek',
        categoria: 'star-trek',
        imagem: 'worf.png',
        valor: 5.0,
    },
    {
        nome: 'Troi',
        descricao: 'Figurinha da Troi de Star Trek',
        categoria: 'star-trek',
        imagem: 'troi.png',
        valor: 5.0,
    },
    {
        nome: 'Crusher',
        descricao: 'Figurinha da Crusher de Star Trek',
        categoria: 'star-trek',
        imagem: 'crusher.png',
        valor: 5.0,
    },
    {
        nome: 'Data',
        descricao: 'Figurinha do Data de Star Trek',
        categoria: 'star-trek',
        imagem: 'data.png',
        valor: 5.0,
    },
    {
        nome: 'Laforge',
        descricao: 'Figurinha do Laforge de Star Trek',
        categoria: 'star-trek',
        imagem: 'laforge.png',
        valor: 5.0,
    },
    {
        nome: 'Picard',
        descricao: 'Figurinha do Picard de Star Trek',
        categoria: 'star-trek',
        imagem: 'picard.png',
        valor: 5.0,
    },
    {
        nome: 'Riker',
        descricao: 'Figurinha do Riker de Star Trek',
        categoria: 'star-trek',
        imagem: 'riker.png',
        valor: 5.0,
    },
    {
        nome: 'Trek1',
        descricao: 'Figurinha da nave Trek1 de Star Trek',
        categoria: 'star-trek',
        imagem: 'trek1.png',
        valor: 5.0,
    },
    {
        nome: 'Trek2',
        descricao: 'Figurinha da nave Trek2 de Star Trek',
        categoria: 'star-trek',
        imagem: 'trek2.png',
        valor: 5.0,
    },
    {
        nome: 'Trek3',
        descricao: 'Figurinha da nave Trek3 de Star Trek',
        categoria: 'star-trek',
        imagem: 'trek3.png',
        valor: 5.0,
    },
    {
        nome: 'Dragon Ball Z',
        descricao: 'Figurinha da logo de Dragon Ball Z',
        categoria: 'dragon-ball-z',
        imagem: 'Dragon Ball Z.png',
        valor: 5.0,
    },
    {
        nome: 'Esfera do Dragão',
        descricao: 'Figurinha da Esfera do Dragão',
        categoria: 'dragon-ball-z',
        imagem: 'Esfera do Dragao.png',
        valor: 5.0,
    },
    {
        nome: 'Radar do Dragão',
        descricao: 'Figurinha do Radar do Dragão',
        categoria: 'dragon-ball-z',
        imagem: 'Radar do Dragao.png',
        valor: 5.0,
    },
    {
        nome: 'Uniforme de Son Goku',
        descricao: 'Figurinha do Uniforme de Son Goku',
        categoria: 'dragon-ball-z',
        imagem: 'Uniforme De Son Goku.png',
        valor: 5.0,
    },
    {
        nome: 'Uzumaki',
        descricao: 'Figurinha do clã Uzumaki',
        categoria: 'naruto',
        imagem: 'Uzumaki.png',
        valor: 5.0,
    },
    {
        nome: 'Sharigan Sasuke',
        descricao: 'Figurinha do Sharigan do Sasuke',
        categoria: 'naruto',
        imagem: 'Sharigan Sasuke.png',
        valor: 5.0,
    },
    {
        nome: 'Uchiha',
        descricao: 'Figurinha do clã Uchiha',
        categoria: 'naruto',
        imagem: 'Uchiha.png',
        valor: 5.0,
    },
    {
        nome: 'Sharigan Kakashi',
        descricao: 'Figurinha do Sharigan do Kakashi',
        categoria: 'naruto',
        imagem: 'Sharigan Kakashi.png',
        valor: 5.0,
    },
    {
        nome: 'Angemon',
        descricao: 'Figurinha do digimon Angemon',
        categoria: 'digimon',
        imagem: 'Angemon.png',
        valor: 5.0,
    },
    {
        nome: 'Tailmon',
        descricao: 'Figurinha do digimon Tailmon',
        categoria: 'digimon',
        imagem: 'Tailmon.png',
        valor: 5.0,
    },
    {
        nome: 'Digivice',
        descricao: 'Figurinha do Digivice',
        categoria: 'digimon',
        imagem: 'Digivice.png',
        valor: 5.0,
    },
    {
        nome: 'Agumon',
        descricao: 'Figurinha do digimon Agumon',
        categoria: 'digimon',
        imagem: 'Agumon.png',
        valor: 5.0,
    },
    {
        nome: 'Vaporeon',
        descricao: 'Figurinha do pokemon Vaporeon',
        categoria: 'pokemon',
        imagem: 'Vaporeon.png',
        valor: 5.0,
    },
    {
        nome: 'Pokebola',
        descricao: 'Figurinha da Pokebola',
        categoria: 'pokemon',
        imagem: 'Pokebola.png',
        valor: 5.0,
    },
    {
        nome: 'Pikachu',
        descricao: 'Figurinha do pokemon Pikachu',
        categoria: 'pokemon',
        imagem: 'Pikachu.png',
        valor: 5.0,
    },
    {
        nome: 'Charizard',
        descricao: 'Figurinha do pokemon Charizard',
        categoria: 'pokemon',
        imagem: 'Charizard.png',
        valor: 5.0,
    },
    {
        nome: 'Homem de Ferro',
        descricao: 'Figurinha do Homem de Ferro',
        categoria: 'marvel',
        imagem: 'Homem de Ferro.png',
        valor: 5.0,
    },
    {
        nome: 'Homem Aranha',
        descricao: 'Figurinha do Homem Aranha',
        categoria: 'marvel',
        imagem: 'Homem Aranha.png',
        valor: 5.0,
    },
    {
        nome: 'Capitão América',
        descricao: 'Figurinha do Capitão América',
        categoria: 'marvel',
        imagem: 'Capitão América-att.png',
        valor: 5.0,
    },
    {
        nome: 'Logo Marvel',
        descricao: 'Figurinha da logo da Marvel',
        categoria: 'marvel',
        imagem: 'Marvel-att.png',
        valor: 5.0,
    },
    {
        nome: 'Batman',
        descricao: 'Figurinha do Batman',
        categoria: 'dc',
        imagem: 'Batman.png',
        valor: 5.0,
    },
    {
        nome: 'Superman',
        descricao: 'Figurinha do Superman',
        categoria: 'dc',
        imagem: 'Superman.png',
        valor: 5.0,
    },
    {
        nome: 'Flash',
        descricao: 'Figurinha do Flash',
        categoria: 'dc',
        imagem: 'Flash.png',
        valor: 5.0,
    },
    {
        nome: 'Logo da DC',
        descricao: 'Figurinha da logo da DC',
        categoria: 'dc',
        imagem: 'DC Comics-att.png',
        valor: 5.0,
    },];  
    await criarTabela();
    await inserirDados(dadosMonetizacao);
})();

module.exports = Monetizacao;
