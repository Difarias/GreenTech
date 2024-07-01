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
    controladorCategoria.buscar()
        .then((categorias) => res.render("inserirProduto", { title: "Inserir Novo Produto" , categorias}))
        .catch((error) => res.status(400).json(error.message));
});

router.get("/:id", (req, res) => {
    const categoriaId = req.params.id;
    const BASE_URL = 'http://localhost:3000/';

    Promise.all([
        controladorProduto.buscarPorCategoria(categoriaId),
        controladorCategoria.buscar()
    ])
    .then(([produtos, categorias]) => {
        res.render("produtos", { produtos: produtos, categorias: categorias, categoriaId, BASE_URL });
    })
    .catch((error) => res.status(400).json(error.message));
});

router.get('/detalhesProdutos', async (req, res) => {
    const { id } = req.query; // Obtém o ID do produto da query string
    console.log(id);
    try {
        // Busca o produto pelo ID usando o controlador
        const produto = await controladorProduto.buscarProdutoDetalhes(id);

        // Se o produto existe, retorna seus detalhes em JSON
        if (produto) {
            res.json(produto);
        } else {
            res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
});

function renderizarDetalhesProduto(req, res) {
    const { id } = req.query; // Obtém o ID do produto da query string
    Promise.all([
        controladorCategoria.buscar(), // Buscar categorias
        controladorProduto.buscarProdutoDetalhes(id) // Buscar detalhes do produto
    ])
    .then(([categorias, produto]) => {
        if (produto) {
            res.json({ categorias, produto }); // Responde com JSON
        } else {
            res.status(404).json({ mensagem: 'Produto não encontrado' });
        }
    })
    .catch((error) => res.status(400).json({ mensagem: error.message }));
}


module.exports = {router, renderizarDetalhesProduto};