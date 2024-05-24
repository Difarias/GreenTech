const modeloTipoTransacao = require("../models/tipoTransacaoModelo");

class TipoTransacaoControlador{
    buscar(){
        return modeloTipoTransacao.listar();
    }

    criar(novoTipoTransacao){
        return modeloTipoTransacao.criar(novoTipoTransacao);
    }

    alterar(tipoTransacaoAtualizado, id_tipotransacao){
        return modeloTipoTransacao.atualizar(tipoTransacaoAtualizado, id_tipotransacao);
    }
    
    deletar(id_tipotransacao){
        return modeloTipoTransacao.deletar(id_tipotransacao);
    }
}

module.exports = new TipoTransacaoControlador();