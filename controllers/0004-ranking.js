const Ranking = require('../models/0004-ranking'); // Importe o modelo do Ranking

// Create (Criação de uma entrada no ranking)
exports.createRankingEntry = async (req, res, next) => {
    try {
        const novaEntrada = await Ranking.create(req.body);
        res.status(201).json({ status: true, data: novaEntrada });
    } catch (error) {
        console.error('Erro ao criar uma entrada no ranking:', error.message);
        res.status(400).json({ status: false, error: 'Houve um erro ao criar uma entrada no ranking.' });
    }
};

// Read (Recuperação de uma entrada no ranking pelo ID)
exports.getRankingEntry = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const entrada = await Ranking.findByPk(id);
        if (entrada) {
            res.status(200).json({ status: true, data: entrada });
        } else {
            res.status(404).json({ status: false, error: 'Entrada no ranking não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao buscar uma entrada no ranking:', error.message);
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar uma entrada no ranking.' });
    }
};

// Update (Atualização de uma entrada no ranking)
exports.updateRankingEntry = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const entrada = await Ranking.findByPk(id);
        if (entrada) {
            await entrada.update(req.body);
            res.status(200).json({ status: true, data: 'Entrada no ranking atualizada com sucesso.' });
        } else {
            res.status(404).json({ status: false, error: 'Entrada no ranking não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao atualizar uma entrada no ranking:', error.message);
        res.status(500).json({ status: false, error: 'Houve um erro ao atualizar uma entrada no ranking.' });
    }
};

// Delete (Exclusão de uma entrada no ranking)
exports.deleteRankingEntry = async (req, res, next) => {
    const id = parseInt(req.params.id);
    try {
        const entrada = await Ranking.findByPk(id);
        if (entrada) {
            await entrada.destroy();
            res.status(200).json({ status: true, data: 'Entrada no ranking excluída com sucesso.' });
        } else {
            res.status(404).json({ status: false, error: 'Entrada no ranking não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao excluir uma entrada no ranking:', error.message);
        res.status(500).json({ status: false, error: 'Houve um erro ao excluir uma entrada no ranking.' });
    }
};

// Read All (Recuperação de todas as entradas no ranking)
exports.getAllRankingEntries = async (req, res, next) => {
    try {
        const entradas = await Ranking.findAll();
        res.status(200).json({ status: true, data: entradas });
    } catch (error) {
        console.error('Erro ao buscar todas as entradas no ranking:', error.message);
        res.status(500).json({ status: false, error: 'Houve um erro ao buscar todas as entradas no ranking.' });
    }
};
