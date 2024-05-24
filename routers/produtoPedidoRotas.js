const { Router }             = require("express");
const router                 = Router();
const controladorProdutoPedido = require("../controllers/produtoPedidoControlador");

router.get("/transacoes", (req, res) => {
    const listaTransacoes = controladorProdutoPedido.buscar();
    
    listaTransacoes
    .then((transacoes) => res.status(200).json(transacoes))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/transacoes", (req, res) => {
    const novaTransacao = req.body;
    const transacao = controladorProdutoPedido.criar(novaTransacao);

    transacao
    .then(TransacaoCriada => res.status(200).json(TransacaoCriada))
    .catch(error => res.status(400).json(error.message));
});

router.put("/transacao/:id", (req, res) => {
    const { id } = req.params;
    const transacaoAtualizada = req.body;
    const transacao = controladorProdutoPedido.alterar(transacaoAtualizada, id);

    transacao
    .then((respTransacaoAtualizada)=> res.status(200).json(respTransacaoAtualizada))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/produto/:id", (req, res) => {
    const { id } = req.params;
    const transacao = controladorProdutoPedido.deletar(id);

    transacao
    .then((respProdutoPedidoDeletado)=> res.status(200).json(respProdutoPedidoDeletado))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;