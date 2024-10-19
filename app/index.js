const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi this is my Docker Container!!!</h2>");
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
