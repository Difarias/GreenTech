//Configurando o Express e subindo a aplicação.
const express = require("express");
const app     = express();
const router = require("./routers/index");
const conexao = require("./infraestutura/conexao");
const tabelas = require("./infraestutura/tabelas");

tabelas.init(conexao);

router(app);

app.listen(3000, (error) => {
    if (error){
        console.log("Erro");
        return;
    }
    console.log("Sucesso");
});