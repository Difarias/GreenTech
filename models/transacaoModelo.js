const conexao = require("../infraestutura/conexao");

class TransacaoModelo{
    listar(){
       const sql = "SELECT * FROM TB_TRANSACAO";

       return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log("Erro ao consultar as transações");
                    reject(error);
                }
                console.log("Sucesso ao consultar as transações");
                resolve(resposta);
            });
        });  
    }

    criar(novaTransacao){
        const sql = "INSERT INTO TB_TRANSACAO SET ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, novaTransacao, (error, resposta) =>{
                if (error){
                    console.log("Erro ao criar tipo de transação: " + novaTransacao);
                    reject(error);
                }
                console.log("Sucesso ao criar tipo de transação: "+ novaTransacao);
                resolve(resposta);
            });
        });
    }  

    atualizar(transacaoAtualizada, id_transacao){
        const sql = "UPDATE TB_TRANSACAO SET ? WHERE id_transacao = ?";
        const sqlFormatado = conexao.format(sql, [transacaoAtualizada, id_transacao]);
        
        return new Promise((resolve, reject)=>{
            conexao.query(sqlFormatado, (error, resposta) =>{
                if (error){
                    console.log("Erro ao atualizar transação: " + transacaoAtualizada);
                    reject(error);
                }
                console.log("Sucesso ao atualizar transação: " + transacaoAtualizada);
                resolve(resposta);
            });
        });
    }  

    deletar(id_transacao){
        const sql = "DELETE FROM TB_TRANSACAO WHERE id_transacao = ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, id_transacao,  (error, resposta) =>{
                if (error){
                    console.log("Erro ao deletar transação: " + id_transacao);
                    reject(error);
                }
                console.log("Sucesso ao deletar transação: " + id_transacao);
                resolve(resposta);
            });
        });
    }  
}

module.exports = new TransacaoModelo();