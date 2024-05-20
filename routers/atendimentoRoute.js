const { Router } = require("express");
const router = Router();

router.get("/atendimentos", (req, res) =>{
    res.send("Chegou aqui, estamos listando os atendimentos");
});

router.post("/atendimentos", (req, res) => {
    res.send("Estamos criando um novo atendimento");
});

router.put("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Estamos atualizando um atendimento ${id}`);
});

router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Estamos deletando um atendimento ${id}`);
});

module.exports = router;