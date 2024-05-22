const conexao = require("../infraestutura/conexao");

class CategoriaModel{
    listar(){
       const sql = "SELECT * FROM TB_CATEGORIAS";

       return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta) => {
                if (error){
                    console.log("Erro ao consultar as categorias");
                    reject(error);
                }
                console.log("Sucesso ao consultar as categorias");
                resolve(resposta);
            });
        });  
    }

    criar(novaCategoria){
        const sql = "INSERT INTO TB_CATEGORIAS SET ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, novaCategoria, (error, resposta) =>{
                if (error){
                    console.log("Erro ao criar categoria: " + novaCategoria);
                    reject(error);
                }
                console.log("Sucesso ao criar categoria: "+ novaCategoria);
                resolve(resposta);
            });
        });
    }  

    atualizar(categoriaAtualizada, id_categoria){
        const { nome_categoria } = categoriaAtualizada;
        const sql = "UPDATE TB_CATEGORIAS SET nome_categoria = ? WHERE id_categoria = ?";
        const sqlFormatado = conexao.format(sql, [nome_categoria, id_categoria]);
        
        return new Promise((resolve, reject)=>{
            conexao.query(sqlFormatado, (error, resposta) =>{
                if (error){
                    console.log("Erro ao atualizar categoria: " + categoriaAtualizada);
                    reject(error);
                }
                console.log("Sucesso ao atualizar categoria: " + categoriaAtualizada);
                resolve(resposta);
            });
        });
    }  

    deletar(id_categoria){
        const sql = "DELETE FROM TB_CATEGORIAS WHERE id_categoria = ?";

        return new Promise((resolve, reject)=>{
            conexao.query(sql, id_categoria,  (error, resposta) =>{
                if (error){
                    console.log("Erro ao deletar categoria: " + id_categoria);
                    reject(error);
                }
                console.log("Sucesso ao deletar categoria: " + id_categoria);
                resolve(resposta);
            });
        });
    }  
}

module.exports = new CategoriaModel();