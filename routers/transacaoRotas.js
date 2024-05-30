const { Router }             = require("express");
const router                 = Router();
const controladorTransacoes = require("../controllers/transacaoControlador");

router.get("/", (req, res) => {
    const listaTransacoes = controladorTransacoes.buscar();
    
    listaTransacoes
    .then((transacoes) => res.status(200).json(transacoes))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/", (req, res) => {
    const novaTransacao = req.body;
    const transacao = controladorTransacoes.criar(novaTransacao);

    transacao
    .then(TransacaoCriada => res.status(200).json(TransacaoCriada))
    .catch(error => res.status(400).json(error.message));
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const transacaoAtualizada = req.body;
    const transacao = controladorTransacoes.alterar(transacaoAtualizada, id);

    transacao
    .then((respTransacaoAtualizada)=> res.status(200).json(respTransacaoAtualizada))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const transacao = controladorTransacoes.deletar(id);

    transacao
    .then((respTransacaoDeletada)=> res.status(200).json(respTransacaoDeletada))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;