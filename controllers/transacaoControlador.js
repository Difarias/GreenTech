const modeloTransacao = require("../models/transacaoModelo");

class TransacaoControlador{
    buscar(){
        return modeloTransacao.listar();
    }

    criar(novaTransacao){
        return modeloTransacao.criar(novaTransacao);
    }

    alterar(transacaoAtualizada, id_transacao){
        return modeloTransacao.atualizar(transacaoAtualizada, id_transacao);
    }
    
    deletar(id_transacao){
        return modeloTransacao.deletar(id_transacao);
    }
}

module.exports = new TransacaoControlador();