const express = require("express");
const app     = express();
const router  = require("./routers/index");
const conexao = require("./infraestutura/conexao");
const tabelas = require("./infraestutura/tabelas");
const populacao = require("./infraestutura/populacao");
const path    = require('path');
const session = require('express-session');

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'my-secret-key', // Use uma chave secreta para assinar a sessão
    resave: false,
    saveUninitialized: true
}));

// Configurar o Express para usar EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

router(app, express);
tabelas.init(conexao)
    .then(() => {
        console.log('Todas as tabelas foram criadas com sucesso.');
        populacao.init(conexao); // Chama a inicialização do script de população
    })
    .catch(error => {
        console.error('Erro ao criar tabelas:', error);
    });

app.listen(3000, (error) => {
    if (error){
        console.log("Erro");
        return;
    }
    console.log("Aplicação rodando na porta [3000]");
});