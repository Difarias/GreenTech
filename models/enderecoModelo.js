const conexao = require("../infraestutura/conexao");

class EnderecoModelo{
    listar(){
       const sql = "SELECT * FROM TB_ENDERECOS";

       return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log("Erro ao consultar os endereços");
                    reject(error);
                }
                console.log("Sucesso ao consultar os endereços");
                resolve(resposta);
            });
        });  
    }

    criar(novoEndereco){
        const sql = "INSERT INTO TB_ENDERECOS SET ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, novoEndereco, (error, resposta) =>{
                if (error){
                    console.log("Erro ao criar endereço: " + novoEndereco);
                    reject(error);
                }
                console.log("Sucesso ao criar endereço: "+ novoEndereco);
                resolve(resposta);
            });
        });
    }  

    atualizar(enderecoAtualizado, id_endereco){
        const sql = "UPDATE TB_ENDERECOS SET ? WHERE id_endereco = ?";
        const sqlFormatado = conexao.format(sql, [enderecoAtualizado, id_endereco]);
        
        return new Promise((resolve, reject)=>{
            conexao.query(sqlFormatado, (error, resposta) =>{
                if (error){
                    console.log("Erro ao atualizar endereço: " + enderecoAtualizado);
                    reject(error);
                }
                console.log("Sucesso ao atualizar endereço: " + enderecoAtualizado);
                resolve(resposta);
            });
        });
    }  

    deletar(id_endereco){
        const sql = "DELETE FROM TB_ENDERECOS WHERE id_endereco = ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, id_endereco,  (error, resposta) =>{
                if (error){
                    console.log("Erro ao deletar endereço: " + id_endereco);
                    reject(error);
                }
                console.log("Sucesso ao deletar endereço: " + id_endereco);
                resolve(resposta);
            });
        });
    }  
}

module.exports = new EnderecoModelo();