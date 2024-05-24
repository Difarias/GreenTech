const modeloProdutoPedido = require("../models/produtoPedidoModelo");

class ProdutoPedidoControlador{
    buscar(){
        return modeloProdutoPedido.listar();
    }

    criar(novoProdutoPedido){
        return modeloProdutoPedido.criar(novoProdutoPedido);
    }

    alterar(produtoPedidoAtualizado, id_produto, id_pedido){
        return modeloProdutoPedido.atualizar(produtoPedidoAtualizado, id_produto, id_pedido);
    }
    
    deletar(id_produto, id_pedido){
        return modeloProdutoPedido.deletar(id_produto, id_pedido);
    }
}

module.exports = new ProdutoPedidoControlador();