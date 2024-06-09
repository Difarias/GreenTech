const rotasCategoria = require("./categoriaRotas");
const rotasEndereco = require("./enderecoRotas");
const rotasCliente = require("./clienteRotas");
const rotasProduto = require("./produtoRotas");
const rotasPedido = require("./pedidoRotas");
const rotasTipoTransacao = require("./tipoTransacaoRotas");
const rotasTransacao = require("./transacaoRotas");
const rotasProdutoPedido = require("./produtoPedidoRotas");

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        rotasCategoria.renderizarCategoriasEProdutos(req, res, 'principal');
    });
    
    app.get('/login', (req, res) => {
        res.render('login', { title: "login" });
    });

    app.get('/cadastro', (req, res) => {
        rotasCategoria.renderizarCategorias(req, res, 'cadastro');
    });

    app.get('/pagamento', (req, res) => {
        rotasCategoria.renderizarCategorias(req, res, 'pagamento');
    });

    app.get('/pedidos', (req, res) => {
        rotasCategoria.renderizarCategorias(req, res, 'pedidos');
        
    });

    app.get('/produtos', (req, res) => {
        rotasCategoria.renderizarCategorias(req, res, 'produtos');
    });

    app.get('/detalhesProdutos', (req, res) => {
        rotasCategoria.renderizarCategorias(req, res, 'detalhesProdutos');
    });

    app.get('/detalhesPedidos', (req, res) => {
        rotasCategoria.renderizarCategorias(req, res, 'detalhesPedidos');
    });

    // Use os middlewares corretos
    app.use('/categorias', rotasCategoria.router);
    app.use('/enderecos', rotasEndereco);
    app.use('/clientes', rotasCliente);
    app.use('/produtos', rotasProduto);
    app.use('/pedidos', rotasPedido);
    app.use('/tipos-transacao', rotasTipoTransacao);
    app.use('/transacoes', rotasTransacao);
    app.use('/produtos-pedidos', rotasProdutoPedido);
};
