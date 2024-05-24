const { Router }             = require("express");
const router                 = Router();
const controladorProduto = require("../controllers/produtoControlador");

router.get("/produtos", (req, res) => {
    const listaProdutos = controladorProduto.buscar();
    
    listaProdutos
    .then((produtos) => res.status(200).json(produtos))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/produtos", (req, res) => {
    const novoProduto = req.body;
    const produto = controladorProduto.criar(novoProduto);

    produto
    .then(ProdutoCriado => res.status(200).json(ProdutoCriado))
    .catch(error => res.status(400).json(error.message));
});

router.put("/produto/:id", (req, res) => {
    const { id } = req.params;
    const produtoAtualizado = req.body;
    const produto = controladorProduto.alterar(produtoAtualizado, id);

    produto
    .then((respProdutoAtualizado)=> res.status(200).json(respProdutoAtualizado))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/produto/:id", (req, res) => {
    const { id } = req.params;
    const produto = controladorProduto.deletar(id);

    produto
    .then((respProdutoDeletado)=> res.status(200).json(respProdutoDeletado))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;