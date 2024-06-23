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

    async buscarPorIdComProdutos(idPedido) {
        const sql = `
            SELECT p.*,
                   pr.id_produto,
                   pr.nome_produto, 
                   pr.preco_produto, 
                   pr.imagem_produto, 
                   pr.id_categoria_TB_CATEGORIAS,
                   e.cidade_endereco,
                   e.estado_endereco,
                   e.cep_endereco,
                   e.logradouro_endereco,
                   e.numero_endereco
            FROM TB_PEDIDOS p
            INNER JOIN TB_PRODUTOS_PEDIDOS pp ON p.id_pedido = pp.id_pedido_TB_PEDIDOS
            INNER JOIN TB_PRODUTOS pr ON pp.id_produto_TB_PRODUTOS = pr.id_produto
            INNER JOIN TB_ENDERECOS e ON e.id_cliente_TB_CLIENTE = p.id_cliente_TB_CLIENTE
            WHERE p.id_pedido = ?
        `;
        return new Promise((resolve, reject) => {
            conexao.query(sql, [idPedido], (error, resultado) => {
                if (error) {
                    console.error("Erro ao buscar detalhes do pedido:", error);
                    reject(error);
                }
                
                if (resultado.length === 0) {
                    resolve(null); // Retorna null se o pedido não for encontrado
                } else {
                    const pedido = {
                        id_pedido: resultado[0].id_pedido,
                        status_pedido: resultado[0].status_pedido,
                        valorTotal_pedido: resultado[0].valorTotal_pedido,
                        data_pedido: resultado[0].data_pedido,
                        tipoTransacao: resultado[0].id_tipotransacao_TB_TIPOTRANSACAO,
                        endereco: {
                            cidade: resultado[0].cidade_endereco,
                            estado: resultado[0].estado_endereco,
                            cep: resultado[0].cep_endereco,
                            logradouro: resultado[0].logradouro_endereco,
                            numero: resultado[0].numero_endereco
                        },
                        produtos: resultado.map(item => ({
                            id_produto: item.id_produto,
                            nome_produto: item.nome_produto,
                            preco_produto: item.preco_produto,
                            imagem_produto: item.imagem_produto,
                            id_categoria: item.id_categoria_TB_CATEGORIAS
                        }))
                    };
                    console.log(pedido);
                    resolve(pedido);
                }
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