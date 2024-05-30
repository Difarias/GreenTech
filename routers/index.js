const rotasCategoria     = require("./categoriaRotas");
const rotasEndereco      = require("./enderecoRotas");
const rotasCliente       = require("./clienteRotas");
const rotasProduto       = require("./produtoRotas");
const rotasPedido        = require("./pedidoRotas");
const rotasTipoTransacao = require("./tipoTransacaoRotas");
const rotasTransacao     = require("./transacaoRotas");
const rotasProdutoPedido = require("./produtoPedidoRotas");

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // Rota para a página principal do eccomerce
    app.get('/', (req, res) => {
        res.render('principal', { title: "Página Inicial" });
    });
    
      // Rota para a página de login
      app.get('/login', (req, res) => {
        res.render('login', { title: "Login" });
    });

    app.use('/categorias', rotasCategoria);
    app.use('/enderecos', rotasEndereco);
    app.use('/clientes', rotasCliente);
    app.use('/produtos', rotasProduto);
    app.use('/pedidos', rotasPedido);
    app.use('/tipos-transacao', rotasTipoTransacao);
    app.use('/transacoes', rotasTransacao);
    app.use('/produtos-pedidos', rotasProdutoPedido);
};