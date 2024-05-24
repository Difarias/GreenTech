const { Router }             = require("express");
const router                 = Router();
const controladorCategoria = require("../controllers/categoriaControlador");

router.get("/categorias", (req, res) => {
    const listaCategorias = controladorCategoria.buscar();
    
    listaCategorias
    .then((categorias) => res.status(200).json(categorias))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/categorias", (req, res) => {
    const novaCategoria = req.body;
    const categoria = controladorCategoria.criar(novaCategoria);

    categoria
    .then(categoriaCriada => res.status(201).json(categoriaCriada))
    .catch(error => res.status(400).json(error.message));
});

router.put("/categoria/:id", (req, res) => {
    const { id } = req.params;
    const categoriaAtualizada = req.body;
    const categoria = controladorCategoria.alterar(categoriaAtualizada, id);

    categoria
    .then((respCategoriaAtualizada)=> res.status(200).json(respCategoriaAtualizada))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/categoria/:id", (req, res) => {
    const { id } = req.params;
    const categoria = controladorCategoria.deletar(id);

    categoria
    .then((respCategoriaDeletada)=> res.status(200).json(respCategoriaDeletada))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;