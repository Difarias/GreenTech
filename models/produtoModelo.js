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

    listarPorCategoria(categoriaId) {
        const sql = "SELECT * FROM TB_PRODUTOS WHERE id_categoria_TB_CATEGORIAS = ?";

        return new Promise((resolve, reject) => {
            conexao.query(sql, [categoriaId], (error, resposta) => {
                if (error) {
                    console.log("Erro ao consultar produtos por categoria");
                    reject(error);
                } else {
                    console.log("Sucesso ao consultar produtos por categoria");
                    resolve(resposta);
                }
            });
        });
    }

    buscarPorIds(ids = []) {
        const sql = "SELECT * FROM TB_PRODUTOS WHERE id_produto IN (?)";
        
        return new Promise((resolve, reject) => {
            conexao.query(sql, [ids], (error, resposta) => {
                if (error) {
                    console.log("Erro ao buscar produtos por IDs");
                    reject(error);
                }
                resolve(resposta);
            });
        });
    }

    buscarProdutoDetalhes(id) {
        const sql = "SELECT * FROM TB_PRODUTOS WHERE id_produto = ?";

        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log(`Erro ao buscar produto pelo ID ${id}`);
                    reject(error);
                } else {
                    if (resposta.length > 0) {
                        console.log(`Sucesso ao buscar produto pelo ID ${id}`);
                        resolve(resposta[0]);
                    } else {
                        console.log(`Produto com ID ${id} não encontrado`);
                        resolve(null);
                    }
                }
                console.log(resposta);
            });
        });
    }

    criar(novoProduto) {
        const sql = "INSERT INTO TB_PRODUTOS (nome_produto, preco_produto, imagem_produto, dataCadastro_produto, descricao_produto, id_categoria_TB_CATEGORIAS, avaliacao_produto) VALUES (?, ?, ?, ?, ?, ?, ?)";

        const valores = [
            novoProduto.nome_produto,
            novoProduto.preco_produto,
            novoProduto.imagem_produto,
            novoProduto.dataCadastro_produto,
            novoProduto.descricao_produto,
            novoProduto.id_categoria_TB_CATEGORIAS,
            novoProduto.avaliacao_produto
        ];

        return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (error, resposta) => {
                if (error) {
                    console.log("Erro ao criar produto: " + novoProduto);
                    reject(error);
                }
                console.log("Sucesso ao criar produto: " + novoProduto);
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