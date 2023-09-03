//@ts-check
"use strict";

const Teste = require('./../models/test');

const postTest = async (req, res, next) => {
    Teste.create(req.body).then(() => {
        res.send('user is inserted');
    })
};

module.exports.postTest = postTest;