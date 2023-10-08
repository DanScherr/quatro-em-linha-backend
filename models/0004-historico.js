// Importe o Sequelize e DataTypes
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../bin/database'); // Certifique-se de que o seu arquivo de configuração do banco de dados está configurado corretamente

class Historico extends Model {}

Historico.init(
  {
    id_Jogador1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id_User', // Substitua 'id_User' pelo nome da chave primária na tabela 'usuario'
      },
    },
    id_Jogador2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id_User', // Substitua 'id_User' pelo nome da chave primária na tabela 'usuario'
      },
    },
    id_Skin_Jogador1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Monetizacaos',
        key: 'id_Mon',
      },
    },
    id_Skin_Jogador2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Monetizacaos',
        key: 'id_Mon',
      },
    },
    id_Jogador_Vitoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Usuarios',
        key: 'id_User', // Substitua 'id_User' pelo nome da chave primária na tabela 'usuario'
      },
    },
    qtd_jogadas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Historico',
    timestamps: false, // Defina como true se desejar que o Sequelize adicione colunas createdAt e updatedAt à tabela
  }
);

module.exports = Historico;
