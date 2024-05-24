const { Router } = require("express");
const router = Router();
const controladorProdutoPedido = require("../controllers/produtoPedidoControlador");

router.get("/produto-pedido", (req, res) => {
    const listaProdutosPedidos = controladorProdutoPedido.buscar();
    
    listaProdutosPedidos
        .then((produtosPedidos) => res.status(200).json(produtosPedidos))
        .catch((error) => res.status(400).json(error.message));
});

router.post("/produto-pedido", (req, res) => {
    const novoProdutoPedido = req.body;
    const produtosPedidos = controladorProdutoPedido.criar(novoProdutoPedido);

    produtosPedidos
        .then(produtoPedidoCriado => res.status(200).json(produtoPedidoCriado))
        .catch(error => res.status(400).json(error.message));
});

router.put("/produto-pedido/:id_produto/:id_pedido", (req, res) => {
    const { id_produto, id_pedido } = req.params;
    const produtoPedidoAtualizado = req.body;
    const produtosPedidos = controladorProdutoPedido.alterar(produtoPedidoAtualizado, id_produto, id_pedido);

    produtosPedidos
        .then(respProdutoPedidoAtualizado => res.status(200).json(respProdutoPedidoAtualizado))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/produto-pedido/:id_produto/:id_pedido", (req, res) => {
    const { id_produto, id_pedido } = req.params;
    const produtosPedidos = controladorProdutoPedido.deletar(id_produto, id_pedido);

    produtosPedidos
        .then(respProdutoPedidoDeletado => res.status(200).json(respProdutoPedidoDeletado))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;
