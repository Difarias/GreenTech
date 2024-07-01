const fs = require('fs');
const path = require('path');

class Populacao {
    init(conexao) {
        this.conexao = conexao;
        this.populationFlagFile = path.join(__dirname, 'population_done.flag'); // Caminho para o arquivo de marcação
        this.verificarEScriptDePopulacao();
    }

    verificarEScriptDePopulacao() {
        fs.access(this.populationFlagFile, fs.constants.F_OK, (err) => {
            if (err) {
                // Se o arquivo não existe, executa o script de população
                this.executarScriptDePopulacao()
                    .then(() => {
                        // Cria o arquivo de marcação para indicar que o script foi executado
                        fs.writeFile(this.populationFlagFile, '', (err) => {
                            if (err) {
                                console.error('Erro ao criar arquivo de marcação:', err.message);
                            } else {
                                console.log('Script de população executado e arquivo de marcação criado.');
                            }
                        });
                    })
                    .catch((error) => {
                        console.error('Erro ao executar script de população:', error.message);
                    });
            } else {
                console.log('O script de população já foi executado anteriormente.');
            }
        });
    }

    executarScriptDePopulacao() {
        return new Promise((resolve, reject) => {
            const sqlFilePath =  './population.sql'; // Altere para o caminho correto do seu arquivo

            fs.readFile(sqlFilePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Erro ao ler o arquivo population.sql:', err.message);
                    return reject(err);
                }

                // Divida o conteúdo do arquivo SQL em comandos individuais
                const sqlCommands = data.split(';').filter(command => command.trim() !== '');

                // Execute cada comando SQL em sequência
                this.executarComandosSQL(sqlCommands)
                    .then(() => resolve())
                    .catch((error) => reject(error));
            });
        });
    }

    executarComandosSQL(comandos) {
        return comandos.reduce((promise, comando) => {
            return promise.then(() => new Promise((resolve, reject) => {
                this.conexao.query(comando, (error) => {
                    if (error) {
                        console.error('Erro ao executar comando SQL:', error.message);
                        return reject(error);
                    }
                    resolve();
                });
            }));
        }, Promise.resolve());
    }
}

module.exports = new Populacao();
