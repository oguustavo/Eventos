const mysql = require('mysql2');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',        // Substitua pelo host do seu banco de dados
  user: 'seu-usuario',      // Substitua pelo seu usuário do banco de dados
  password: 'sua-senha',    // Substitua pela sua senha do banco de dados
  database: 'nome-do-banco' // Substitua pelo nome do seu banco de dados
});

// Conecte-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

module.exports = connection;
