**Obrigatório 1** - Você deverá desenvolver as seguintes rotas:

<details open>
<summary>[GET] /</summary>
<p>
Retornar a mensagem "Fullstack Challenge 🏅 - Space X API"
</p>

```json
{
    "message": "Fullstack Challenge 🏅 - Space X API"
}
```
</details>

<details open>
<summary>[GET] /launches</summary>
<p>
Listar todos os dados da base, com paginação e suporte a busca. O endpoint de paginação de uma busca hipotética deve retornar a seguinte estrutura:
<br/>
[GET]/launches?search=tesla&limit=4
</p>

```json
{
    "results": [
        {.....},
        {.....},
        {.....},
        {.....},
    ],
    "totalDocs": 20,
    "page": 1,
    "totalPages": 5, 
    "hasNext": true,
    "hasPrev": false
}
```
</details>
<details open>
<summary>[GET] /launches/stats</summary>
<p>
Deve retornar os dados que serão usados nos gráficos da interface. O formato de saída final pode depender da biblioteca utilizada no frontend. Além disso, pode ser necessário criar mais de um endpoint para separar os dois gráficos, considerando a performance e a quantidade de cálculos e consultas ao banco.

- O campo `success` informa se o lançamento ocorreu com ou sem falhas. Faça a contagem dos registros para obter o resultado de sucessos e falhas;
- O campo `cores.reused` informa se o lançamento usou estágios reaproveitáveis. Para obter o nome do estágio, busque pelo nome do foguete usando o campo `rocket`;
- Ao analisar os registros será possível contabilizar a quantidade de lançamentos separados por foguete e renderizar o gráfico de pizza;
- Os dados do gráfico de barras são agrupados por mês/ano e por foguete.

</p>

</details>

Além disso, os endpoints devem utilizar os seguintes códigos de status:
- 200: sucesso com body ou sem body
- 204: sucesso sem body
- 400: mensagem de erro em formato humanizado, ou seja, sem informações internas e códigos de erro:

```json
{
    "message": "Error message"
}
```

**Obrigatório 2** - Para alimentar o seu banco de dados você deve criar um script que armazene os dados dos lançamentos da SpaceX API no seu back-end.

**Obrigatório 3** - Além disso, você precisa desenvolver um CRON para ser executado diariamente às 9h e armazenar os novos lançamentos ao seu banco de dados. (Para essa tarefa você pode precisar fazer alterações no modelo de dados)

**Obrigatório 4** - Descrever a documentação da API utilizando o conceito de Open API 3.0;

**Diferencial 1** - Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 2** - Configurar um sistema de alerta se houver alguma falha durante a sincronização dos lançamentos;

**Diferencial 3** - Escrever Unit Tests para os endpoints da API;

### Front-End:

Nessa etapa você deverá desenvolver uma aplicação web para consumir a API que você criou.

### INSTRUÇÕES

Obrigatório 1 - Você deverá atender aos seguintes casos de uso:
- Como usuário, devo ser capaz de visualizar um gráfico de pizza/setor sobre o lançamento dos foguetes;
- Como usuário, devo ser capaz de visualizar os resultados de lançamentos (sucesso e falha);
- Como usuário, devo ser capaz de visualizar um gráfico de colunas com o laçamento de foguetes por ano (atente-se para a coloração, ela deve ser semelhante  ao que foi atribuído no gráfico de pizza/setor);
- Como usuário, devo ser capaz de pesquisar pelo nome, missão e/ou resultado;
- Como usuário, devo ser capaz de visualizar o vídeo no YouTube ao apertar no ícone;
- Como usuário, devo ser capaz de mudar de página aparecendo os próximos 5 lançamentos.

**Obrigatório 2** - Seguir o wireframe para mostrar os dados necessários, estilização ao seu critério conforme seus conhecimentos de usabilidade.

<img src="./img/wireframe.png" width="100%" />

**Obrigatório 3** - A filtragem dos dados deve ser feito usando debounce.

**Diferencial 1** - Escrever Unit Tests e/ou E2E Test. Escolher a melhor abordagem e biblioteca;

**Diferencial 2** - Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 3** - Colocar na URL os parâmetros utilizados na busca, para compartilhar a URL;

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

Avisar sobre a finalização e enviar para correção.

1. Confira se você respondeu o Scorecard anexado na Vaga que se candidatou;
2. Confira se você respondeu o Mapeamento anexado na Vaga que se candidatou;
3. Acesse [https://coodesh.com/challenges/review](https://coodesh.com/challenges/review);
4. Adicione o repositório com a sua solução;
5. Grave um vídeo, utilizando o botão na tela de solicitar revisão da Coodesh, com no máximo 5 minutos, com a apresentação do seu projeto. Utilize o tempo para:
- Explicar o objetivo do desafio
- Quais tecnologias foram utilizadas
- Mostrar a aplicação em funcionamento
- Foque em pontos obrigatórios e diferenciais quando for apresentar.
6. Adicione o link da apresentação do seu projeto no README.md.
7. Verifique se o Readme está bom e faça o commit final em seu repositório;
8. Confira a vaga desejada;
9. Envie e aguarde as instruções para seguir no processo. Sucesso e boa sorte. =)

## Suporte

Use a [nossa comunidade](https://discord.gg/rdXbEvjsWu) para tirar dúvidas sobre o processo ou envie uma mensagem diretamente a um especialista no chat da plataforma. 
