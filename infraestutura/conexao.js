const mysql = require("mysql");

const conexao = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"DiSaias#2",
    database:"greenTech"
});

module.exports = conexao;