const modeloCliente = require("../models/clienteModelo");

class ClienteControlador{
    buscar(){
        return modeloCliente.listar();
    }

    criar(novoCliente){
        return modeloCliente.criar(novoCliente);
    }

    alterar(clienteAtualizado, id_cliente){
        return modeloCliente.atualizar(clienteAtualizado, id_cliente);
    }
    
    deletar(id_cliente){
        return modeloCliente.deletar(id_cliente);
    }
}

module.exports = new ClienteControlador();