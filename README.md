</p>
<h4 align="center"> 
	🚧 Api SpaceX 🚧
</h4>

<p align="center">
	<img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/STATUS-CONCLUÌDO-green">
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autora">Autora</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

<br>

## 💻 Sobre o projeto
Olá, bem-vindo ao projeto Fullstack Coodesh Challenge 🏅 Space X API!<br>
Este projeto é um aplicativo fullstack desenvolvido para listar informações da API SpaceX-API. O objetivo foi construir uma solução que seja capaz de exibir dados de lançamento de foguetes de forma interativa e intuitiva.<br>
Aqui está um breve resumo do que realizei neste projeto:
- O backend foi construído usando Node.js com TypeScript, utilizando o ORM Prisma para manipulação do banco de dados. O código segue os princípios do Clean Code, com uma separação clara entre as responsabilidades de cada módulo.<br>
- Para gerenciamento de banco de dados, foi escolhido PostgreSQL por sua eficiência e robustez. A configuração do banco de dados é gerenciada usando Docker, proporcionando um ambiente de desenvolvimento mais consistente e previsível.<br>
- A API RESTful desenvolvida possui várias rotas, incluindo uma rota principal (/) que retorna uma mensagem de boas-vindas, uma rota (/launches) que lista todos os dados da base com suporte a busca e paginação, e uma rota (/launches/stats) que retorna dados para gráficos de interface.<br>
- No frontend, utilizei React.js com TypeScript para criar uma interface de usuário interativa e responsiva. A aplicação foi projetada com um design Mobile First e utilizou os conceitos de programação funcional em JavaScript (incluindo .map, .filter e .reduce).<br>
- Os dados foram extraídos da SpaceX-API, transformados e carregados em nosso banco de dados por meio de um script de alimentação. Além disso, um CRON job foi configurado para ser executado diariamente às 9h, armazenando novos lançamentos no banco de dados.<br>
- Todos os scripts e tarefas foram monitorados usando a biblioteca Husky, para garantir que o código seja sempre formatado corretamente e os testes sejam executados antes de qualquer commit ou push.<br>
- Usei o JEST para conduzir testes unitários nos componentes, garantindo que funcionem corretamente e mantenham a integridade mesmo após mudanças no código.<br>

Este projeto é um ótimo exemplo de como várias tecnologias podem trabalhar juntas para criar uma solução de software coesa. Espero que você aprecie explorá-lo tanto quanto eu gostei de criá-lo!
<br>

---

## ⚙️ Funcionalidades

- Listar lançamentos:
- Monstrar estatíscas separado por foguetes usados e novos:
- Monstrar estatíscas por ano:

---

<br>

---
## 🛣️ Como executar o projeto

Esse Api precisa de alguns pré-requisitos para funcionar direito.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker]().
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando a api Space X

```bash

# Clone este repositório
$ git clone git@github.com:Amandalfs/SpaceX_Api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd SpaceX_Api

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

## Obs:
Ela vai vai precisar de ter as variaveis de ambiente colocada no arquivo .env igual esta no .env.example

# O servidor inciará na porta:PORT - acesse http://localhost:PORT

```
#### 🎲 Rodando os testes

```bash

# Clone este repositório
$ git clone git@github.com:Amandalfs/SpaceX_Api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd SpaceX_Api

# Instale as dependências
$ npm install

# Execute os testes unitarios
$ npm run test

# Execute os testes integração.
$ npm run test:integration

# Execute os testes ponta a ponta
$ npm run test:e2e

```

<br>

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### []()**Api**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express]()**
-   **[CORS]()**
-   **[Prisma]()**
-   **[pg]()**
-   **[tsx]()**
-   **[eslint]()**
-   **[dotENV]()**
-   **[supertest]()**
-   **[jest]()**
-   **[swagger-ui-express]()**
-   **[jsonwebtoken]()**

> Veja o arquivo  [package.json](https://github.com/Amandalfs/CRUD-bancoHzhong/blob/main/package.json)

## 🛠 Patterns e Conceitos usado no projeto.
- Suit
- Repositories
- Factory

---

## 🛠 Documentação.
- <a href="https://space-x-api.onrender.com/api-docs/">Clique aqui para ver mais</a>

<br>

## 🧙‍♀️ Autora

<a href="https://www.linkedin.com/in/amanda-rodrigues%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%E2%9A%A7%EF%B8%8F-a92271166/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/65101161?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Amanda Rodrigues</b></sub></a>✨</a>
 <br />

---

## 📝 Licença

<!-- Este projeto esta sobe a licença [MIT](./LICENSE). -->

Feito com ❤️ por Amanda Rodrigues [Entre em contato!](https://www.linkedin.com/in/amanda-rodrigues%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%E2%9A%A7%EF%B8%8F-a92271166/)
