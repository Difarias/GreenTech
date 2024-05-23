const modeloCategoria = require("../models/categoriaModelo");

class CategoriaControlador{
    buscar(){
        return modeloCategoria.listar();
    }

    criar(novaCategoria){
        return modeloCategoria.criar(novaCategoria);
    }

    alterar(categoriaAtualizada, id_categoria){
        return modeloCategoria.atualizar(categoriaAtualizada, id_categoria);
    }
    
    deletar(id_categoria){
        return modeloCategoria.deletar(id_categoria);
    }
}

module.exports = new CategoriaControlador();