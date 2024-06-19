const { Router }             = require("express");
const router                 = Router();
const multer                 = require('multer');
const path                   = require('path');
const controladorProduto     = require("../controllers/produtoControlador");
const controladorCategoria   = require("../controllers/categoriaControlador");


// Defina o diretório raiz onde as imagens serão armazenadas no servidor
const rootDirectory = '/images/produtos/';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Define o diretório de destino como 'public/images/produtos' dentro do diretório raiz
        cb(null, path.join('public', 'images', 'produtos'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Limite de 5MB
});

router.get("/", (req, res) => {
    controladorProduto.buscar()
        .then((produtos) => {
            res.render("principal", { produtos: produtos });
        })
        .catch((error) => res.status(400).json(error.message));
});

router.post('/', upload.single('imagem_produto'), (req, res) => {
    const novoProduto = {
        nome_produto: req.body.nome_produto,
        preco_produto: req.body.preco_produto,
        dataCadastro_produto: req.body.dataCadastro_produto,
        descricao_produto: req.body.descricao_produto,
        id_categoria_TB_CATEGORIAS: req.body.id_categoria_TB_CATEGORIAS,
        imagem_produto: req.file.path.replace(/public[\\\/]/, ''),
        avaliacao_produto:req.body.avaliacao_produto
    };

    controladorProduto.criar(novoProduto)
        .then(ProdutoCriado => res.status(200).json(ProdutoCriado))
        .catch(error => res.status(400).json(error.message));
});


router.put("/:id", (req, res) => {
    const { id } = req.params;
    const produtoAtualizado = req.body;
    const produto = controladorProduto.alterar(produtoAtualizado, id);

    produto
    .then((respProdutoAtualizado)=> res.status(200).json(respProdutoAtualizado))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const produto = controladorProduto.deletar(id);

    produto
    .then((respProdutoDeletado)=> res.status(200).json(respProdutoDeletado))
    .catch(error => res.status(400).json(error.message));
});

router.get("/inserir", (req, res) => {
    res.render("inserirProduto", { title: "Inserir Novo Produto" });
});

router.get("/:id", (req, res) => {
    const categoriaId = req.params.id;

    Promise.all([
        controladorProduto.buscarPorCategoria(categoriaId),
        controladorCategoria.buscar()
    ])
    .then(([produtos, categorias]) => {
        res.render("produtos", { produtos: produtos, categorias: categorias, categoriaId });
    })
    .catch((error) => res.status(400).json(error.message));
});

module.exports = router;