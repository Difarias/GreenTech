const conexao = require("../infraestutura/conexao");

class PedidoModelo{
    listar(){
       const sql = "SELECT * FROM TB_PEDIDOS";

       return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log("Erro ao consultar os pedidos");
                    reject(error);
                }
                console.log("Sucesso ao consultar os pedidos");
                resolve(resposta);
            });
        });  
    }

    criar(novoPedido){
        const sql = "INSERT INTO TB_PEDIDOS SET ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoPedido, (error, resposta) =>{
                if (error){
                    console.log("Erro ao criar pedido: " + novoPedido);
                    reject(error);
                }
                console.log("Sucesso ao criar pedido: "+ novoPedido);
                resolve(resposta);
            });
        });
    }  

    atualizar(pedidoAtualizado, id_pedido){
        const sql = "UPDATE TB_PEDIDOS SET ? WHERE id_pedido = ?";
        const sqlFormatado = conexao.format(sql, [pedidoAtualizado, id_pedido]);
        
        return new Promise((resolve, reject)=>{
            conexao.query(sqlFormatado, (error, resposta) =>{
                if (error){
                    console.log("Erro ao atualizar pedido: " + pedidoAtualizado);
                    reject(error);
                }
                console.log("Sucesso ao atualizar pedido: " + pedidoAtualizado);
                resolve(resposta);
            });
        });
    }  

    deletar(id_pedido){
        const sql = "DELETE FROM TB_PEDIDOS WHERE id_pedido = ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, id_pedido,  (error, resposta) =>{
                if (error){
                    console.log("Erro ao deletar pedido: " + id_pedido);
                    reject(error);
                }
                console.log("Sucesso ao deletar pedido: " + id_pedido);
                resolve(resposta);
            });
        });
    }
    
    listarPorCliente(idCliente) {
        const sql = "SELECT * FROM TB_PEDIDOS WHERE id_cliente_TB_CLIENTE = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [idCliente], (error, resposta) => {
                if (error) {
                    console.log("Erro ao consultar os pedidos do cliente");
                    reject(error);
                }
                console.log("Sucesso ao consultar os pedidos do cliente");
                resolve(resposta);
            });
        });
    }
 }

module.exports = new PedidoModelo();