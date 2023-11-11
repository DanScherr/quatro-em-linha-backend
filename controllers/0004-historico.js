const Historico = require('../models/0004-historico');

// Create a new historical record
exports.createHistorico = async (req, res) => {
  try {
    const {
      id_Jogador1,
      id_Jogador2,
      id_Skin_Jogador1,
      id_Skin_Jogador2,
      id_Jogador_Vitoria,
      qtd_jogadas,
    } = req.body;

    const historico = await Historico.create({
      id_Jogador1,
      id_Jogador2,
      id_Skin_Jogador1,
      id_Skin_Jogador2,
      id_Jogador_Vitoria,
      qtd_jogadas,
    });

    res.status(201).json({ status: true, data: historico });
  } catch (error) {
    console.error('Erro ao criar histórico:', error);
    res.status(400).json({ status: false, error: 'Houve um erro ao criar o histórico.' });
  }
};

// Get all historical records
exports.getAllHistorico = async (req, res) => {
  try {
    const historicos = await Historico.findAll();
    res.status(200).json({ status: true, data: historicos });
  } catch (error) {
    console.error('Erro ao buscar históricos:', error);
    res.status(500).json({ status: false, error: 'Houve um erro ao buscar os históricos.' });
  }
};

// Get a historical record by ID
exports.getHistoricoById = async (req, res) => {
  const { id } = req.params;

  try {
    const historico = await Historico.findByPk(id);

    if (historico) {
      res.status(200).json({ status: true, data: historico });
    } else {
      res.status(404).json({ status: false, error: 'Histórico não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar histórico:', error);
    res.status(500).json({ status: false, error: 'Houve um erro ao buscar o histórico.' });
  }
};

// Update a historical record by ID
exports.updateHistorico = async (req, res) => {
  const { id } = req.params;
  const {
    id_Jogador1,
    id_Jogador2,
    id_Skin_Jogador1,
    id_Skin_Jogador2,
    id_Jogador_Vitoria,
    qtd_jogadas,
  } = req.body;

  try {
    const historico = await Historico.findByPk(id);

    if (historico) {
      await historico.update({
        id_Jogador1,
        id_Jogador2,
        id_Skin_Jogador1,
        id_Skin_Jogador2,
        id_Jogador_Vitoria,
        qtd_jogadas,
      });

      res.status(200).json({ status: true, data: 'Histórico atualizado com sucesso.' });
    } else {
      res.status(404).json({ status: false, error: 'Histórico não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar histórico:', error);
    res.status(500).json({ status: false, error: 'Houve um erro ao atualizar o histórico.' });
  }
};

// Delete a historical record by ID
exports.deleteHistorico = async (req, res) => {
  const { id } = req.params;

  try {
    const historico = await Historico.findByPk(id);

    if (historico) {
      await historico.destroy();
      res.status(200).json({ status: true, data: 'Histórico excluído com sucesso.' });
    } else {
      res.status(404).json({ status: false, error: 'Histórico não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao excluir histórico:', error);
    res.status(500).json({ status: false, error: 'Houve um erro ao excluir o histórico.' });
  }
};
