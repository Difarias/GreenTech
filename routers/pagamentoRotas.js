const express = require('express');
const router = express.Router();
const controladorProduto = require("../controllers/produtoControlador");
const controladorCategoria = require("../controllers/categoriaControlador"); // Importe o controlador de categoria

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
        controladorProduto.buscarPorIds(idsArray) // Buscar produtos por IDs
    ])
    .then(([categorias, produtos]) => {
        res.render(nomePagina, { title: nomePagina, categorias, produtos });
    })
    .catch((error) => res.status(400).json({ message: error.message }));
};

module.exports = { router, renderizarCarrinho };
