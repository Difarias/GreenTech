const { Router }             = require("express");
const router                 = Router();
const controladorCliente = require("../controllers/clienteControlador");

router.get("/", (req, res) => {
    const listaClientes = controladorCliente.buscar();
    
    listaClientes
    .then((clientes) => res.status(200).json(clientes))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/", (req, res) => {
    const novoCliente = req.body;
    const cliente = controladorCliente.criar(novoCliente);

    cliente
    .then(clienteCriado => res.status(200).json(clienteCriado))
    .catch(error => res.status(400).json(error.message));
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const clienteAtualizado = req.body;
    const cliente = controladorCliente.alterar(clienteAtualizado, id);

    cliente
    .then((respClienteAtualizado)=> res.status(200).json(respClienteAtualizado))
    .catch(error => res.status(400).json(error.message));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const cliente = controladorCliente.deletar(id);

    cliente
    .then((respClienteDeletado)=> res.status(200).json(respClienteDeletado))
    .catch(error => res.status(400).json(error.message));
});

router.post("/login", (req, res) => {
    const { email, senha } = req.body;

    controladorCliente.verificarCliente(email, senha)
        .then(cliente => {
            if (cliente) {
                res.status(200).json(cliente);
            } else {
                res.status(401).send('Email ou senha inválidos');
            }
        })
        .catch(error => res.status(500).json({ message: error.message }));
});

module.exports = router;