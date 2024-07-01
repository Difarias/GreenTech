const mysql = require("mysql");

const conexao = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"seu_usuario",
    password: "sua_senha",
    database:"greenTech"
});

module.exports = conexao;