//@ts-check
"use strict";

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const db = {};
 
module.exports = sequelize;