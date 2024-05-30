const { Router }             = require("express");
const router                 = Router();
const controladorTipoTransacao = require("../controllers/tipoTransacaoControlador");

router.get("/", (req, res) => {
    const listaTiposTransacoes = controladorTipoTransacao.buscar();
    
    listaTiposTransacoes
    .then((tipoTransacoes) => res.status(200).json(tipoTransacoes))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/", (req, res) => {
    const novaTransacao = req.body;
    const tipoTransacao = controladorTipoTransacao.criar(novaTransacao);

    tipoTransacao
    .then(TipoTransacaoCriada => res.status(200).json(TipoTransacaoCriada))
    .catch(error => res.status(400).json(error.message));
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const tipoTransacaoAtualizada = req.body;
    const tipoTransacao = controladorTipoTransacao.alterar(tipoTransacaoAtualizada, id);

    tipoTransacao
    .then((respTipoTransacaoAtualizada)=> res.status(200).json(respTipoTransacaoAtualizada))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const tipoTransacao = controladorTipoTransacao.deletar(id);

    tipoTransacao
    .then((respTipoTransacaoDeletada)=> res.status(200).json(respTipoTransacaoDeletada))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;