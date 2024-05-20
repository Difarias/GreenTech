const routerAtendimento = require("./atendimentoRoute");

module.exports = (app) => {
    app.use(routerAtendimento);
};