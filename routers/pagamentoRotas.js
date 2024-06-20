const express = require('express');
const router = express.Router();
const controladorProduto = require("../controllers/produtoControlador");
const controladorCategoria = require("../controllers/categoriaControlador"); 
const controladorTipoTransacao = require("../controllers/tipoTransacaoControlador");
const controladorPedido = require("../controllers/pedidoControlador");

router.post('/finalizar', (req, res) => {
    const novoPedido = req.body; // Os dados do pedido devem estar no corpo da requisição
    console.log('Dados recebidos no backend:', novoPedido);
    controladorPedido.criar(novoPedido)
        .then(pedidoCriado => {
            res.status(201).json(pedidoCriado); // Retornar o pedido criado como resposta
        })
        .catch(error => {
            console.error('Erro ao criar pedido:', error);
            res.status(400).json({ message: error.message }); // Tratar erros caso ocorra algum problema na criação do pedido
        });
});

function renderizarCarrinho(req, res, nomePagina)  {
    // Receber a lista de IDs de produtos da query
    const produtosIds = req.query.produtos;
    console.log(produtosIds);

    // Verificar se há IDs de produtos na query
    if (!produtosIds) {
        return res.status(400).json({ message: 'Lista de produtos não fornecida' });
    }

    // Converter a lista de IDs de string para array de números
    const idsArray = JSON.parse(produtosIds);

    // Fazer a busca no banco de dados
    Promise.all([
        controladorCategoria.buscar(), // Buscar categorias
        controladorProduto.buscarPorIds(idsArray), // Buscar produtos por IDs
        controladorTipoTransacao.buscar()
    ])
    .then(([categorias, produtos, tipoTransacoes]) => {
        res.render(nomePagina, { title: nomePagina, categorias, produtos, tipoTransacoes});
    })
    .catch((error) => res.status(400).json({ message: error.message }));
};

module.exports = { router, renderizarCarrinho };
