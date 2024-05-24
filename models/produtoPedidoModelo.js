const conexao = require("../infraestutura/conexao");

class ProdutoPedidoModelo{
    listar(){
       const sql = "SELECT * FROM TB_PRODUTOS_PEDIDOS";

       return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log("Erro ao consultar os produtos pedidos");
                    reject(error);
                }
                console.log("Sucesso ao consultar os produtos pedidos");
                resolve(resposta);
            });
        });  
    }

    criar(novoProdutoPedido){
        const sql = "INSERT INTO TB_PRODUTOS_PEDIDOS SET ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoProdutoPedido, (error, resposta) =>{
                if (error){
                    console.log("Erro ao criar produtos pedidos");
                    reject(error);
                }
                console.log("Sucesso ao criar produtos pedidos");
                resolve(resposta);
            });
        });
    }  

    atualizar(produtoPedidoAtualizado, id_produto, id_pedido){
        const sql = "UPDATE TB_PRODUTOS_PEDIDOS SET ? WHERE id_produto = ? AND id_pedido = ?";
        const sqlFormatado = conexao.format(sql, [produtoPedidoAtualizado, id_produto, id_pedido]);
        
        return new Promise((resolve, reject)=>{
            conexao.query(sqlFormatado, (error, resposta) =>{
                if (error){
                    console.log("Erro ao atualizar produtos pedidos");
                    reject(error);
                }
                console.log("Sucesso ao atualizar produtos pedidos");
                resolve(resposta);
            });
        });
    }  

    deletar(id_produto, id_pedido){
        const sql = "DELETE FROM TB_PRODUTOS_PEDIDOS WHERE id_produto = ? and id_pedido = ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, [id_produto, id_pedido],  (error, resposta) =>{
                if (error){
                    console.log("Erro ao deletar produtos pedidos");
                    reject(error);
                }
                console.log("Sucesso ao deletar produtos pedidos");
                resolve(resposta);
            });
        });
    }  
}

module.exports = new ProdutoPedidoModelo();