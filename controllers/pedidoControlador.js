const modeloPedido = require("../models/pedidoModelo");

class PedidoControlador{
    buscar(){
        return modeloPedido.listar();
    }

    criar(novoPedido){
        return modeloPedido.criar(novoPedido);
    }

    alterar(pedidoAtualizado, id_pedido){
        return modeloPedido.atualizar(pedidoAtualizado, id_pedido);
    }
    
    deletar(id_pedido){
        return modeloPedido.deletar(id_pedido);
    }

    buscarPorCliente(idCliente) {
        return modeloPedido.listarPorCliente(idCliente);
    }
}

module.exports = new PedidoControlador();