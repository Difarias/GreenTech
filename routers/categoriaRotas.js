const { Router } = require("express");
const router = Router();
const controladorCategoria = require("../controllers/categoriaControlador");
const controladorProduto = require("../controllers/produtoControlador");

router.get("/", (req, res) => {
    controladorCategoria.buscar()
        .then((categorias) => res.status(200).json(categorias))
        .catch((error) => res.status(400).json(error.message));
});

router.post("/", (req, res) => {
    const novaCategoria = req.body;
    controladorCategoria.criar(novaCategoria)
        .then((categoriaCriada) => res.status(201).json(categoriaCriada))
        .catch((error) => res.status(400).json(error.message));
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const categoriaAtualizada = req.body;
    controladorCategoria.alterar(categoriaAtualizada, id)
        .then((respCategoriaAtualizada) => res.status(200).json(respCategoriaAtualizada))
        .catch((error) => res.status(400).json(error.message));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    controladorCategoria.deletar(id)
        .then((respCategoriaDeletada) => res.status(200).json(respCategoriaDeletada))
        .catch((error) => res.status(400).json(error.message));
});

function renderizarCategorias(req, res, nomePagina) {
    controladorCategoria.buscar()
        .then((categorias) => res.render(nomePagina, { title: nomePagina, categorias }))
        .catch((error) => res.status(400).json(error.message));
}

function renderizarCategoriasEProdutos(req, res, nomePagina, cartItems = []) {
    Promise.all([
        controladorCategoria.buscar(), // Buscar categorias
        controladorProduto.buscar()    // Buscar produtos
    ])
    .then(([categorias, produtos]) => {
        res.render(nomePagina, { title: nomePagina, categorias, produtos, cartItems });
    })
    .catch((error) => res.status(400).json(error.message));
}

module.exports = { router, renderizarCategorias, renderizarCategoriasEProdutos };
