const modeloPedido = require("../models/pedidoModelo");
const modeloProdutoPedido = require("../models/produtoPedidoModelo");
const modeloProduto = require("../models/produtoModelo"); // Importe o modelo de Produto


class PedidoControlador{

    async buscarDetalhesPedido(idPedido) {
        try {
            // Busca o pedido pelo ID, incluindo os produtos associados
            const pedido = await modeloPedido.buscarPorIdComProdutos(idPedido);
            //console.log("Detalhes do pedido:", pedido);

            if (!pedido) {
                throw new Error('Pedido não encontrado');
            }
            return pedido;
        } catch (error) {
            console.error("Erro ao buscar detalhes do pedido:", error);
            throw new Error("Erro ao buscar detalhes do pedido.");
        }
    }

    buscar(){
        return modeloPedido.listar();
    }

    async criar(novoPedido) {
        try {
            const pedidoCriado = await modeloPedido.criar({
                status_pedido: novoPedido.status_pedido,
                valorTotal_pedido: novoPedido.valorTotal_pedido,
                data_pedido: novoPedido.data_pedido,
                id_cliente_TB_CLIENTE: novoPedido.id_cliente_TB_CLIENTE,
                id_tipotransacao_TB_TIPOTRANSACAO: novoPedido.id_tipotransacao_TB_TIPOTRANSACAO
            });
            // Pegar o ID do pedido criado
            const id_pedido_TB_PEDIDOS = pedidoCriado.insertId;

            // Iterar sobre os produtos no pedido
            const produtosPedidos = novoPedido.produtos.map(produto => ({
                id_pedido_TB_PEDIDOS,
                id_produto_TB_PRODUTOS: produto.id_produto
            }));

            // Criar as associações de produtos com o pedido
            for (const produtoPedido of produtosPedidos) {
                await modeloProdutoPedido.criar(produtoPedido);
            }

            return pedidoCriado;
        } catch (error) {
            console.error("Erro ao finalizar o pedido:", error);
            throw new Error("Erro ao finalizar o pedido.");
        }
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