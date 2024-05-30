const conexao = require("../infraestutura/conexao");

class ClienteModelo {
    listar() {
        const sql = "SELECT * FROM TB_CLIENTES";

        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if (error) {
                    console.error("Erro ao consultar os clientes", error);
                    reject(error);
                    return;
                }
                console.log("Sucesso ao consultar os clientes");
                resolve(resposta);
            });
        });
    }

    criar(novoCliente) {
        const sql = "INSERT INTO TB_CLIENTES SET ?";

        return new Promise((resolve, reject) => {
            conexao.query(sql, novoCliente, (error, resposta) => {
                if (error) {
                    console.error("Erro ao criar cliente: " + novoCliente.email, error);
                    reject(error);
                    return;
                }
                console.log("Sucesso ao criar cliente: " + novoCliente.email);
                resolve(resposta);
            });
        });
    }

    atualizar(clienteAtualizado, id_cliente) {
        const sql = "UPDATE TB_CLIENTES SET ? WHERE id_cliente = ?";
        const sqlFormatado = conexao.format(sql, [clienteAtualizado, id_cliente]);

        return new Promise((resolve, reject) => {
            conexao.query(sqlFormatado, (error, resposta) => {
                if (error) {
                    console.error("Erro ao atualizar cliente: " + id_cliente, error);
                    reject(error);
                    return;
                }
                console.log("Sucesso ao atualizar cliente: " + id_cliente);
                resolve(resposta);
            });
        });
    }

    deletar(id_cliente) {
        const sql = "DELETE FROM TB_CLIENTES WHERE id_cliente = ?";

        return new Promise((resolve, reject) => {
            conexao.query(sql, id_cliente, (error, resposta) => {
                if (error) {
                    console.error("Erro ao deletar cliente: " + id_cliente, error);
                    reject(error);
                    return;
                }
                console.log("Sucesso ao deletar cliente: " + id_cliente);
                resolve(resposta);
            });
        });
    }

    verificarUsuario(email, senha) {
        const sql = "SELECT * FROM TB_CLIENTES WHERE email_cliente = ?";
        console.log(email, senha);
        
        return new Promise((resolve, reject) => {
            conexao.query(sql, [email], (error, results) => {
                if (error) {
                    console.error("Erro ao buscar cliente por email: " + email, error);
                    reject(error);
                    return;
                }

                if (results && results.length > 0) {
                    const usuario = results[0];
                     
                     if (usuario.senha_cliente === senha) {
                         resolve(usuario);
                     } else {
                         resolve(null);
                     }
                    resolve(usuario);
                } else {
                    console.log("Nenhum usuário encontrado com o email: " + email);
                    resolve(null);
                }
            });
        });
    }
}

module.exports = new ClienteModelo();
