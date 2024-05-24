const modeloEndereco = require("../models/enderecoModelo");

class EnderecoControlador{
    buscar(){
        return modeloEndereco.listar();
    }

    criar(novoEndereco){
        return modeloEndereco.criar(novoEndereco);
    }

    alterar(enderecoAtualizado, id_endereco){
        return modeloEndereco.atualizar(enderecoAtualizado, id_endereco);
    }
    
    deletar(id_endereco){
        return modeloEndereco.deletar(id_endereco);
    }
}

module.exports = new EnderecoControlador();