// Importação de módulos necessários
const express = require('express');        // Framework para criar o servidor
const bodyParser = require('body-parser'); // Middleware para analisar JSON no corpo das solicitações
const cors = require('cors');              // Middleware para lidar com política de mesma origem (CORS)

// Criação da instância do servidor Express
const app = express();
const port = 3000; // Porta em que o servidor irá ouvir

// Criação de um array para armazenar os dados em cache
const dataCache = [];

// Configuração do middleware CORS para permitir solicitações de diferentes origens
app.use(cors());

// Configuração do middleware BodyParser para analisar solicitações com corpo JSON
app.use(bodyParser.json({ limit: '10mb' }));

// Definição de uma rota POST '/receber-dados' para receber dados
app.post('/receber-dados', (req, res) => {
  // Obtém os dados JSON do corpo da solicitação
  const data = req.body;
  // Armazena os dados no array de cache
  dataCache.push(data);
  // Responde com um status de sucesso (código 200) e uma mensagem
  res.status(200).json({ message: 'Dados recebidos com sucesso no servidor intermediário.' });
});

// Definição de uma rota GET '/obter-dados' para obter os dados armazenados em cache
app.get('/obter-dados', (req, res) => {
  // Obtém os dados armazenados no array de cache
  const data = dataCache;
  // Responde com um status de sucesso (código 200) e os dados armazenados em cache
  res.status(200).json(data);
});

// Inicialização do servidor Express para ouvir na porta especificada
app.listen(port, () => {
  console.log(`Servidor intermediário está ouvindo na porta ${port}.`);
});
