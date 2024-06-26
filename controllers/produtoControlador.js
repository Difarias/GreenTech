const modeloProduto = require("../models/produtoModelo");

class ProdutoControlador{
    buscar(){
        return modeloProduto.listar();
    }

    buscarPorCategoria(categoriaId) {
        return modeloProduto.listarPorCategoria(categoriaId);
    }

    buscarPorIds(listaProdutos =[]){
        return modeloProduto.buscarPorIds(listaProdutos);
    }

    buscarProdutoDetalhes(produtoID){
        return modeloProduto.buscarProdutoDetalhes(produtoID);
    }
    
    criar(novoProduto){
        return modeloProduto.criar(novoProduto);
    }

    alterar(produtoAtualizado, id_produto){
        return modeloProduto.atualizar(produtoAtualizado, id_produto);
    }
    
    deletar(id_produto){
        return modeloProduto.deletar(id_produto);
    }
}

module.exports = new ProdutoControlador();