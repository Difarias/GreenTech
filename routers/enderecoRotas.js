const { Router }             = require("express");
const router                 = Router();
const controladorEndereco = require("../controllers/enderecoControlador");

router.get("/enderecos", (req, res) => {
    const listaEnderecos = controladorEndereco.buscar();
    
    listaEnderecos
    .then((enderecos) => res.status(200).json(enderecos))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/enderecos", (req, res) => {
    const novoEndereco = req.body;
    const endereco = controladorEndereco.criar(novoEndereco);

    endereco
    .then(enderecoCriado => res.status(200).json(enderecoCriado))
    .catch(error => res.status(400).json(error.message));
});

router.put("/endereco/:id", (req, res) => {
    const { id } = req.params;
    const enderecoAtualizado = req.body;
    const endereco = controladorEndereco.alterar(enderecoAtualizado, id);

    endereco
    .then((respEnderecoAtualizado)=> res.status(200).json(respEnderecoAtualizado))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/endereco/:id", (req, res) => {
    const { id } = req.params;
    const endereco = controladorEndereco.deletar(id);

    endereco
    .then((respEnderecoDeletado)=> res.status(200).json(respEnderecoDeletado))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;