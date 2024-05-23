const conexao = require("../infraestutura/conexao");

class ProdutoModelo{
    listar(){
       const sql = "SELECT * FROM TB_PRODUTOS";

       return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log("Erro ao consultar os produtos");
                    reject(error);
                }
                console.log("Sucesso ao consultar os produtos");
                resolve(resposta);
            });
        });  
    }

    criar(novoProduto){
        const sql = "INSERT INTO TB_PRODUTOS SET ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoProduto, (error, resposta) =>{
                if (error){
                    console.log("Erro ao criar produto: " + novoProduto);
                    reject(error);
                }
                console.log("Sucesso ao criar produto: "+ novoProduto);
                resolve(resposta);
            });
        });
    }  

    atualizar(produtoAtualizado, id_produto){
        const sql = "UPDATE TB_PRODUTOS SET ? WHERE id_produto = ?";
        const sqlFormatado = conexao.format(sql, [produtoAtualizado, id_produto]);
        
        return new Promise((resolve, reject)=>{
            conexao.query(sqlFormatado, (error, resposta) =>{
                if (error){
                    console.log("Erro ao atualizar produto: " + produtoAtualizado);
                    reject(error);
                }
                console.log("Sucesso ao atualizar produto: " + produtoAtualizado);
                resolve(resposta);
            });
        });
    }  

    deletar(id_produto){
        const sql = "DELETE FROM TB_PRODUTOS WHERE id_produto = ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, id_produto,  (error, resposta) =>{
                if (error){
                    console.log("Erro ao deletar produto: " + id_produto);
                    reject(error);
                }
                console.log("Sucesso ao deletar produto: " + id_produto);
                resolve(resposta);
            });
        });
    }  
}

module.exports = new ProdutoModelo();