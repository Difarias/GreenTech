const Produto = require('../models/produtoModelo');

exports.mostrarPagamento = async (req, res) => {
    try {
        // Supondo que o carrinho está armazenado na sessão
        const carrinho = req.session.carrinho || [];
        
        // Buscar os produtos pelos IDs armazenados no carrinho
        const produtos = await Produto.buscarPorIds(carrinho);

        res.render('pagamento', {
            title: 'Pagamento',
            produtos: produtos
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao carregar a página de pagamento');
    }
};
