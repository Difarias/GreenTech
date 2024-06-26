const modeloCliente = require("../models/clienteModelo");
const modeloEndereco = require("../models/enderecoModelo");

class ClienteControlador{
    buscar(){
        return modeloCliente.listar();
    }

    async criar(novoCliente) {
        try {
            // Verificar se o email já está em uso
            const emailExiste = await modeloCliente.verificarEmailExistente(novoCliente.email);
            if (emailExiste) {
                throw { status: 409, message: 'Este e-mail já está em uso.' };
            } else {
                // Se o email não estiver em uso, criar o cliente
                const clienteCriado = await modeloCliente.criar({
                    nome_cliente: novoCliente.nome,
                    email_cliente: novoCliente.email,
                    senha_cliente: novoCliente.senha,
                    telefone_cliente: novoCliente.telefone,
                    cpf_cliente: novoCliente.cpf,
                    dataNascimento_cliente: novoCliente.dataNascimento,
                    dataCadastro_cliente: new Date(), // data atual
                });
    
                const idClienteNovo = await modeloCliente.obterUltimoIDCliente();
    
                const enderecoCriado = await modeloEndereco.criar({
                    cidade_endereco: novoCliente.endereco.cidade,
                    estado_endereco: novoCliente.endereco.estado,
                    logradouro_endereco: novoCliente.endereco.logradouro,
                    cep_endereco: novoCliente.endereco.cep,
                    numero_endereco: novoCliente.endereco.numero,
                    id_cliente_TB_CLIENTE: idClienteNovo[0]['MAX(id_cliente)']
                });
    
                return clienteCriado;
            }
        } catch (error) {
            throw error;
        }
    }
    


    alterar(clienteAtualizado, id_cliente){
        return modeloCliente.atualizar(clienteAtualizado, id_cliente);
    }
    
    deletar(id_cliente){
        return modeloCliente.deletar(id_cliente);
    }

    verificarCliente(email, senha) {
        return modeloCliente.verificarUsuario(email, senha);
    }  
}

module.exports = new ClienteControlador();