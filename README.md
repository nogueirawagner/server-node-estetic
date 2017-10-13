# serverbase
Base de servidor NodeJs com autenticação, autorização, mvc e mongodb.

1º Iniciar uma aplicação node, utiliza o comando node init -y. Irá gerar o package.json;

2º Instalar os pacotes básicos, http express e debug. Utiliza o comando npm install http express e debug --save

3º Criar o arquivo app.js dentro da pasta src. Neste arquivo será o controlador de nossa aplicação, nele que estarão registrado as rotas, os modelos, a conexão com o banco e o CORS.

4º Cria uma pasta bin na raiz, e dentro dela coloca o arquivo que irá iniciar o servidor node. Neste caso a arquivo server.js; Neste arquivo que irá ficar as configurações do servidor, como porta, criação do servidor a partir das configurações registradas no meu app.js, funções para tratar erros, debug.

5º Cria um arquivo de configuração. Neste irá conter dados que são globais à aplicação, suas chaves de serviços externos, connections strings e etc.

6º Cria estrutura de pastas dentro da src, aqui está ordenado pela hierarquia que deverá seguir dentro do projeto.
--> 1- Models: Irá conter as entidades de modelo que irão compor o projeto.
--> 2- Repositories: No repositorio é onde será exportado as operações (CRUD) de cada entididade.
--> 3- Controllers: Irá processar as requisições recebidas.
--> 4- Routes: Irá direcionar a requisição para a operação contida dentro do controller.
---> Services: Irá conter serviços de autenticações e autorizações, e emails.
---> Validators: Classe utilizada para validar propriedade de modelos. Ex: É e-mail válido, é telefone...

------------------- ## -------- MODELS ----------- ## ---------------
Modelo de exemplo está utilizando um Schema do pacote mongoose. Este esquema representa o tipo da tabela no banco de dados NOSQL.





