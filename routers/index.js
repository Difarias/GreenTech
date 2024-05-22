const routerCategoria = require("./categoriaRoutes");

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get('/', (req, res) => {
        res.render('index', { title: "Página Inicial" });
    });
    
    app.use(routerCategoria);
};

