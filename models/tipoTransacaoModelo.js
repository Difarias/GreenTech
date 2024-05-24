const conexao = require("../infraestutura/conexao");

class TipoTransacaoModelo{
    listar(){
       const sql = "SELECT * FROM TB_TIPOTRANSACAO";

       return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log("Erro ao consultar os tipos de transações");
                    reject(error);
                }
                console.log("Sucesso ao consultar os tipos de transações");
                resolve(resposta);
            });
        });  
    }

    criar(novoTipoTransacao){
        const sql = "INSERT INTO TB_TIPOTRANSACAO SET ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoTipoTransacao, (error, resposta) =>{
                if (error){
                    console.log("Erro ao criar tipo de transação: " + novoTipoTransacao);
                    reject(error);
                }
                console.log("Sucesso ao criar tipo de transação: "+ novoTipoTransacao);
                resolve(resposta);
            });
        });
    }  

    atualizar(tipoTransacaoAtualizado, id_tipotransacao){
        const sql = "UPDATE TB_TIPOTRANSACAO SET ? WHERE id_tipotransacao = ?";
        const sqlFormatado = conexao.format(sql, [tipoTransacaoAtualizado, id_tipotransacao]);
        
        return new Promise((resolve, reject)=>{
            conexao.query(sqlFormatado, (error, resposta) =>{
                if (error){
                    console.log("Erro ao atualizar tipo de transação: " + tipoTransacaoAtualizado);
                    reject(error);
                }
                console.log("Sucesso ao atualizar tipo de transação: " + tipoTransacaoAtualizado);
                resolve(resposta);
            });
        });
    }  

    deletar(id_tipotransacao){
        const sql = "DELETE FROM TB_TIPOTRANSACAO WHERE id_tipotransacao = ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, id_tipotransacao,  (error, resposta) =>{
                if (error){
                    console.log("Erro ao deletar tipo de transação: " + id_tipotransacao);
                    reject(error);
                }
                console.log("Sucesso ao deletar tipo de transação: " + id_tipotransacao);
                resolve(resposta);
            });
        });
    }  
}

module.exports = new TipoTransacaoModelo();