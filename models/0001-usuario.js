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
    carteira: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuario',
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


async function criarTabela() {
    try {
        await Usuario.sync();
        console.log('Tabela Usuário criada com sucesso.');
    } catch (error) {
        console.error('Erro ao criar a tabela Usuário:', error);
    }
}

async function inserirDados(dados) {
    try {

        const dadosCriptografados = dados.map((usuario) => ({
            ...usuario,
            senha: bcrypt.hashSync(usuario.senha, 10), // O segundo parâmetro é o custo do hash (10 é um valor razoável)
        }));

        await Usuario.bulkCreate(dadosCriptografados);
        console.log('Dados de Usuário inseridos com sucesso.');
    } catch (error) {
        console.error('Erro ao inserir dados de Usuário:', error);
    } finally {
        //sequelize.close();
    }
}

(async () => {
    const dadosUsuario = [{
        nome: "Administrator",
        email: "Admin4emlinha@gmail.com",
        senha: "Admin2005",
    },];  
    await criarTabela();
    await inserirDados(dadosUsuario);
})();

module.exports = Usuario;