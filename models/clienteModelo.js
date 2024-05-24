const conexao = require("../infraestutura/conexao");

class ClienteModelo{
    listar(){
       const sql = "SELECT * FROM TB_CLIENTES";

       return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log("Erro ao consultar os clientes");
                    reject(error);
                }
                console.log("Sucesso ao consultar os clientes");
                resolve(resposta);
            });
        });  
    }

    criar(novoCliente){
        const sql = "INSERT INTO TB_CLIENTES SET ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoCliente, (error, resposta) =>{
                if (error){
                    console.log("Erro ao criar cliente: " + novoCliente);
                    reject(error);
                }
                console.log("Sucesso ao criar cliente: "+ novoCliente);
                resolve(resposta);
            });
        });
    }  

    atualizar(clienteAtualizado, id_cliente){
        const sql = "UPDATE TB_CLIENTES SET ? WHERE id_cliente = ?";
        const sqlFormatado = conexao.format(sql, [clienteAtualizado, id_cliente]);
        
        return new Promise((resolve, reject)=>{
            conexao.query(sqlFormatado, (error, resposta) =>{
                if (error){
                    console.log("Erro ao atualizar cliente: " + id_cliente);
                    reject(error);
                }
                console.log("Sucesso ao atualizar cliente: " + id_cliente);
                resolve(resposta);
            });
        });
    }  

    deletar(id_cliente){
        const sql = "DELETE FROM TB_CLIENTES WHERE id_cliente = ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, id_cliente,  (error, resposta) =>{
                if (error){
                    console.log("Erro ao deletar cliente: " + id_cliente);
                    reject(error);
                }
                console.log("Sucesso ao deletar cliente: " + id_cliente);
                resolve(resposta);
            });
        });
    }  
}

module.exports = new ClienteModelo();