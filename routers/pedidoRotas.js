const { Router }             = require("express");
const router                 = Router();
const controladorPedido = require("../controllers/pedidoControlador");

router.get("/detalhesPedidos/:idPedido", (req, res) => {
    const idPedido = req.params.idPedido;
    controladorPedido.buscarDetalhesPedido(idPedido)
        .then((pedido) => res.status(200).json(pedido))
        .catch((error) => res.status(400).json(error.message));
});

router.get("/:idCliente/pedidos", (req, res) => {
    const idCliente = req.params.idCliente;
    const listaPedidos = controladorPedido.buscarPorCliente(idCliente);
    
    listaPedidos
    .then((pedidos) => res.status(200).json(pedidos))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/", (req, res) => {
    const novoPedido = req.body;
    const pedido = controladorPedido.criar(novoPedido);

    pedido
    .then(pedidoCriado => res.status(200).json(pedidoCriado))
    .catch(error => res.status(400).json(error.message));
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const pedidoAtualizado = req.body;
    const pedido = controladorPedido.alterar(pedidoAtualizado, id);

    pedido
    .then((respPedidoAtualizado)=> res.status(200).json(respPedidoAtualizado))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const pedido = controladorPedido.deletar(id);

    pedido
    .then((respPedidoDeletado)=> res.status(200).json(respPedidoDeletado))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;