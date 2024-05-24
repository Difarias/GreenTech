const rotasCategoria     = require("./categoriaRotas");
const rotasEndereco      = require("./enderecoRotas");
const rotasCliente       = require("./clienteRotas");
const rotasProduto       = require("./produtoRotas");
const rotasPedido        = require("./pedidoRotas");
const rotasTipoTransacao = require("./tipoTransacaoRotas");
const rotasTransacao     = require("./transacaoRotas");
//const rotasProdutoPedido = require("./produtoPedidoRotas");

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get('/', (req, res) => {
        res.render('index', { title: "Página Inicial" });
    });
    
    app.use(rotasCategoria);
    app.use(rotasEndereco);
    app.use(rotasCliente);
    app.use(rotasProduto);
    app.use(rotasPedido);
    app.use(rotasTipoTransacao);
    app.use(rotasTransacao);
    //app.use(rotasProdutoPedido);
    
};

