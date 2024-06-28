class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        return this.criarTodasTabelas();
    }

    criarTodasTabelas() {
        const tabelas = [
            { nome: 'TB_CLIENTES', criacao: this.criarTabelaClientes },
            { nome: 'TB_ENDERECOS', criacao: this.criarTabelaEnderecos },
            { nome: 'TB_CATEGORIAS', criacao: this.criarTabelaCategorias },
            { nome: 'TB_PRODUTOS', criacao: this.criarTabelaProdutos },
            { nome: 'TB_TIPOTRANSACAO', criacao: this.criarTabelaTipoTransacao },
            { nome: 'TB_TRANSACAO', criacao: this.criarTabelaTransacao },
            { nome: 'TB_PEDIDOS', criacao: this.criarTabelaPedidos },
            { nome: 'TB_PRODUTOS_PEDIDOS', criacao: this.criarTabelaProdutosPedidos },
            { nome: 'TB_LOG', criacao: this.criarTabelaLog }
        ];

        const promises = tabelas.map(tabela => {
            return new Promise((resolve, reject) => {
                this.verificarETabela(tabela.nome, tabela.criacao.bind(this))
                    .then(resolve)
                    .catch(reject);
            });
        });

        return Promise.all(promises);
    }

    verificarETabela(nomeTabela, criarTabelaFunc) {
        return new Promise((resolve, reject) => {
            const sql = `SHOW TABLES LIKE '${nomeTabela}'`;

            this.conexao.query(sql, (error, results) => {
                if (error) {
                    console.error(`Erro ao verificar existência da tabela ${nomeTabela}:`, error.message);
                    reject(error);
                    return;
                }

                if (results.length === 0) {
                    criarTabelaFunc()
                        .then(resolve)
                        .catch(reject);
                } else {
                    resolve();
                }
            });
        });
    }

    criarTabelaClientes() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_CLIENTES (
                id_cliente INT AUTO_INCREMENT PRIMARY KEY,
                nome_cliente VARCHAR(100) NOT NULL,
                email_cliente VARCHAR(100) NOT NULL,
                senha_cliente VARCHAR(30) NOT NULL,
                telefone_cliente VARCHAR(15) NOT NULL,
                cpf_cliente VARCHAR(11) NOT NULL,
                dataNascimento_cliente DATE NOT NULL,
                dataCadastro_cliente DATE NOT NULL
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_CLIENTES:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_CLIENTES criada com sucesso!");
                    resolve();
                }
            });
        });
    }

    criarTabelaEnderecos() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_ENDERECOS (
                id_endereco INT AUTO_INCREMENT PRIMARY KEY,
                cidade_endereco VARCHAR(50) NOT NULL,
                estado_endereco VARCHAR(30) NOT NULL,
                logradouro_endereco VARCHAR(200) NOT NULL,
                cep_endereco INTEGER NOT NULL,
                numero_endereco INTEGER NOT NULL,
                id_cliente_TB_CLIENTE INTEGER,
                FOREIGN KEY (id_cliente_TB_CLIENTE) REFERENCES TB_CLIENTES(id_cliente)
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_ENDERECOS:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_ENDERECOS criada com sucesso!");
                    resolve();
                }
            });
        });
    }

    criarTabelaCategorias() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_CATEGORIAS (
                id_categoria INT AUTO_INCREMENT PRIMARY KEY,
                nome_categoria VARCHAR(50) NOT NULL
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_CATEGORIAS:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_CATEGORIAS criada com sucesso!");
                    resolve();
                }
            });
        });
    }

    criarTabelaProdutos() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_PRODUTOS (
                id_produto INT AUTO_INCREMENT PRIMARY KEY,
                nome_produto VARCHAR(100) NOT NULL,
                preco_produto FLOAT NOT NULL,
                imagem_produto TEXT NOT NULL,
                dataCadastro_produto DATE NOT NULL,
                descricao_produto VARCHAR(500) NOT NULL,
                id_categoria_TB_CATEGORIAS INTEGER,
                avaliacao_produto INTEGER,
                FOREIGN KEY (id_categoria_TB_CATEGORIAS) REFERENCES TB_CATEGORIAS(id_categoria)
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_PRODUTOS:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_PRODUTOS criada com sucesso!");
                    resolve();
                }
            });
        });
    }

    criarTabelaTipoTransacao() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_TIPOTRANSACAO (
                id_tipotransacao INT AUTO_INCREMENT PRIMARY KEY,
                nome_tipotransacao VARCHAR(20) NOT NULL
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_TIPOTRANSACAO:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_TIPOTRANSACAO criada com sucesso!");
                    resolve();
                }
            });
        });
    }

    criarTabelaTransacao() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_TRANSACAO (
                id_transacao INT AUTO_INCREMENT PRIMARY KEY,
                data_transacao DATE NOT NULL,
                valor_transacao FLOAT NOT NULL,
                metodoPagamento_transacao VARCHAR(50) NOT NULL,
                id_tipotransacao_TB_TIPOTRANSACAO INTEGER,
                FOREIGN KEY (id_tipotransacao_TB_TIPOTRANSACAO) REFERENCES TB_TIPOTRANSACAO(id_tipotransacao)
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_TRANSACAO:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_TRANSACAO criada com sucesso!");
                    resolve();
                }
            });
        });
    }

    criarTabelaPedidos() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_PEDIDOS (
                id_pedido INT AUTO_INCREMENT PRIMARY KEY,
                status_pedido INTEGER NOT NULL,
                valorTotal_pedido FLOAT NOT NULL,
                data_pedido DATE NOT NULL,
                id_cliente_TB_CLIENTE INTEGER,
                id_tipotransacao_TB_TIPOTRANSACAO INTEGER,
                FOREIGN KEY (id_cliente_TB_CLIENTE) REFERENCES TB_CLIENTES(id_cliente),
                FOREIGN KEY (id_tipotransacao_TB_TIPOTRANSACAO) REFERENCES TB_TIPOTRANSACAO(id_tipotransacao)
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_PEDIDOS:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_PEDIDOS criada com sucesso!");
                    resolve();
                }
            });
        });
    }

    criarTabelaProdutosPedidos() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_PRODUTOS_PEDIDOS (
                id_pedido_TB_PEDIDOS INTEGER,
                id_produto_TB_PRODUTOS INTEGER,
                FOREIGN KEY (id_pedido_TB_PEDIDOS) REFERENCES TB_PEDIDOS(id_pedido),
                FOREIGN KEY (id_produto_TB_PRODUTOS) REFERENCES TB_PRODUTOS(id_produto)
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_PRODUTOS_PEDIDOS:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_PRODUTOS_PEDIDOS criada com sucesso!");
                    resolve();
                }
            });
        });
    }

    criarTabelaLog() {
        return new Promise((resolve, reject) => {
            const sql = `
            CREATE TABLE IF NOT EXISTS TB_LOG (
                id_log INT AUTO_INCREMENT PRIMARY KEY,
                descricao_log VARCHAR(250) NOT NULL,
                data_log DATE NOT NULL
            );
            `;
            this.conexao.query(sql, (error) => {
                if (error) {
                    console.error("Erro ao criar tabela TB_LOG:", error.message);
                    reject(error);
                } else {
                    console.log("Tabela TB_LOG criada com sucesso!");
                    resolve();
                }
            });
        });
    }
}

module.exports = new Tabelas();
