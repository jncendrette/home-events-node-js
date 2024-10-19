const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true })); // Suporte a form data

// Configuração do banco de dados
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Página inicial com formulário
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para inserir um novo evento
app.post('/eventos', async (req, res) => {
  const { nome, data } = req.body;
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('INSERT INTO eventos (nome, data) VALUES (?, ?)', [nome, data]);
    connection.end();
    res.send('Evento adicionado com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao adicionar o evento: ' + error.message);
  }
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
