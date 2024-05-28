const express = require("express");
const app     = express();
const router  = require("./routers/index");
const conexao = require("./infraestutura/conexao");
const tabelas = require("./infraestutura/tabelas");
const path    = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Configurar o Express para usar EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

router(app, express);
tabelas.init(conexao);

app.listen(3000, (error) => {
    if (error){
        console.log("Erro");
        return;
    }
    console.log("Aplicação rodando na porta [3000]");
});