# GreenTech

## Descrição

GreenTech é um e-commerce sustentável que visa promover produtos eco-friendly e com impacto ambiental reduzido. Este projeto foi desenvolvido como parte da disciplina de Empreendedorismo em Informática, sob a orientação do professor Sergio Fred, no curso de Ciência da Computação da Universidade Estadual de Santa Cruz (UESC).

A plataforma foi criada para oferecer uma experiência de compra focada na sustentabilidade, permitindo aos usuários encontrar e adquirir produtos que contribuem para a preservação do meio ambiente.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para Node.js que simplifica o desenvolvimento de aplicações web.
- **EJS**: Motor de templates para gerar HTML dinâmico.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional para armazenar dados da aplicação.
- **HTML/CSS/JavaScript**: Tecnologias fundamentais para o desenvolvimento frontend.

## Como Rodar o Projeto

### Requisitos

- Node.js (v14 ou superior)
- MySQL

### Passo a Passo

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Difarias/GreenTech

2. **Instale as Dependências**
   ```bash
   npm install
   
3. **Configure o Banco de Dados**

   Após clonar o repositório e instalar as dependências, você precisará configurar as credenciais de conexão com o banco de dados. Siga estes passos:

   - Navegue até a pasta `infraestrutura` no diretório do seu projeto:

   - Abra o arquivo `conexao.js` em um editor de texto de sua escolha.

   - No arquivo `conexao.js`, modifique as seguintes configurações para corresponder às suas credenciais de banco de dados MySQL:

     ```javascript
     const mysql = require("mysql");

     const conexao = mysql.createConnection({
         host: "localhost",        // Endereço do servidor MySQL
         port: 3306,               // Porta do servidor MySQL
         user: "seu_usuario",      // Substitua por seu usuário MySQL
         password: "sua_senha",    // Substitua por sua senha MySQL
         database: "greenTech"    // Certifique-se de que o banco de dados 'greenTech' está criado
     });

     module.exports = conexao;
     ```

   - Certifique-se de que o banco de dados `greenTech` está criado no MySQL. Caso ainda não tenha sido criado, você pode fazê-lo executando o seguinte comando SQL no MySQL:

     ```sql
     CREATE DATABASE greenTech;
     ```

   - Após configurar o arquivo `conexao.js`, salve as alterações e feche o editor.

   Isso garante que o seu projeto possa se conectar ao banco de dados MySQL corretamente.

4. **Inicie o Servidor**
    ```bash
   npm start
   ```
    O servidor estará disponível em http://localhost:3000.
   
## Conclusão

Gostaríamos de expressar nossa sincera gratidão ao professor Sergio Fred, cuja orientação e suporte foram essenciais para a realização deste projeto. O desenvolvimento do GreenTech foi uma experiência profundamente enriquecedora para todos nós, alunos, proporcionando a oportunidade de aplicar conhecimentos teóricos em um projeto prático e significativo.
O GreenTech não apenas nos permitiu explorar e utilizar tecnologias modernas como Node.js, Express, EJS e MySQL, mas também nos ensinou a importância de incorporar práticas sustentáveis no desenvolvimento de soluções tecnológicas. Trabalhar neste projeto foi uma experiência transformadora, que ampliou nossa compreensão sobre o impacto das nossas escolhas tecnológicas no meio ambiente e reforçou nosso compromisso com a sustentabilidade.
Agradecemos ao professor pela paciência, orientação e inspiração ao longo desta jornada. Sua orientação foi crucial para o sucesso do projeto e para o nosso crescimento como futuros profissionais de tecnologia.

Obrigado por acompanhar o GreenTech. Esperamos que nossa plataforma contribua para um futuro mais sustentável e que você, usuário, tenha uma ótima experiência ao usá-la.

---

## Integrantes

Este projeto foi desenvolvido por:

- **Diego Farias de Freitas**  
  GitHub: (https://github.com/Difarias)

- **Isaias Rodrigues Mendes**  
  GitHub: (https://github.com/Mendespro)

Agradecemos a todos que contribuíram para o desenvolvimento do GreenTech. Para mais informações ou para entrar em contato com os desenvolvedores, você pode visitar os perfis do GitHub listados acima.

---




