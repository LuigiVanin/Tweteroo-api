<h1 align="center">Tweteroo API</h1>

<p align='center'>
<img src="./images/tweteroo.svg" width="285px">
<p>

### Descrição 📎

Uma API construida em node com a framework Express que simula o funcionamento do tweeter. A aplicação backend tem as funcionalidades principais de: registrar ususários, receber tweetes e retornar tweets.

### Funcionalidades 🚀

-   Geral

    -   [x] A porta utilizada pelo seu servidor deve ser a 5000.
    -   [x] Versionamento usando Git é obrigatório, crie um repositório público no seu perfil do GitHub.
    -   [x] Commits a cada funcionalidade implementada.

-   Armazenamento de dados

    -   [x] Para persistir os dados (usuários e tweets), utilize variáveis globais em memória.
    -   [x] Receber o usuário com "username" e "avatar no body.
    -   [x] Devolver os tweets com "username", "avatar" e "tweet" no body.

-   Requisições
    -   [x] Requisição de "/sign-up" que cria usuários.
    -   [x] Requisição de "/tweets" que retorna os 10 últimos tweets.
    -   [x] Requisição "/tweets/USERNAME" que retorna os tweets de um usuário específico.

#### Bônus

-   Validação de dados

    -   [x] Todas as rotas deverão validar os dados recebidos, caso algum dado venha vazio ou no formato inválido, o servidor deverá retornar o status code 400 (BAD REQUEST) e não continuará com a execução da função.
    -   [x] `/sign-up` precisa validar se os valores de username e avatar foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”.
    -   [x] `/tweets` precisa validar se os valores de username e tweet foram enviados e caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”.

-   Status codes de requisições POST

    -   [x] Caso a validação falhe é necessário responder com Status code 400 (BAD REQUEST).
    -   [x] Todo método POST deve retornar status code 200 (CREATED) quando sucedida.

-   Paginação

    -   [x] O endpoint GET `/tweets` deverá passar a receber a página identificada via query string (?page=1). Esse é um recurso diferente do que vimos até agora (route params e body)
    -   [x] Cada página deve mandar de dez em dez tweets.

-   Recebendo username por Header
    -   [x] O endpoint POST `tweet` deve receber o username como header.

### Ferramentas 🛠️

<br>

<p align='center'>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white">
<p>

### Entre em contato 📞

<br>

<p align="center">
<a href="https://www.linkedin.com/in/luis-felipe-vanin-martins-5a5b38215">
<img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue">
</a>
<a href="mailto:luisfvanin2@gmail.com">
<img src="https://img.shields.io/badge/Gmail:%20luisfvanin2@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>
</p>
