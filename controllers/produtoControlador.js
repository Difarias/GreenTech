const modeloProduto = require("../models/produtoModelo");

class ProdutoControlador{
    buscar(){
        return modeloProduto.listar();
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