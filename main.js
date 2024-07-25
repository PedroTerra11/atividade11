const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Função para buscar todos os estados
async function fetchEstados() {
  const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  return response.data;
}

// Função para buscar todas as cidades de um estado
async function fetchCidades(estadoId) {
  const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
  return response.data;
}

// Rota para listar todos os estados
app.get('/estados', async (req, res) => {
  try {
    const estados = await fetchEstados();
    res.status(200).json(estados);
  } catch (error) {
    res.status(500).send('Erro ao buscar dados dos estados');
  }
});

// Rota para listar as cidades de um estado específico
app.get('/cidades/:estadoId', async (req, res) => {
  const { estadoId } = req.params;
  try {
    const cidades = await fetchCidades(estadoId);
    res.status(200).json(cidades);
  } catch (error) {
    res.status(500).send('Erro ao buscar dados das cidades');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});