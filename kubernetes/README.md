## Objetivo

Este desafio consiste em criar um cluster kubernetes contendo a [aplicação demo](https://github.com/idwall/desafios-security-devops/tree/master/kubernetes/app) e um banco de dados.

### Aplicação Web
Dentro deste repositório há um subdiretório **app** contendo um **Dockerfile**. Seus objetivos são os seguintes:
- Construir a imagem docker da aplicação
- Criar os manifestos de recursos kubernetes para rodar a aplicação (_deployments, services, ingresses, configmap_ e qualquer outro que você considere necessário)
- Criar as regras e permissões que você considera importantes para uma aplicação web exposta na internet
- Instalar um certificado SSL na aplicação

#### Observações
- A aplicação deve responder à uma URL específica configurada no _ingress_
- A aplicação irá acessar o banco através do host _mongo_ (sinta-se à vontade para alterar, caso deseje)

### Banco de Dados
A aplicação utiliza um banco de dados MongoDB. É recomendável utilizar o [container padrão do MongoDB](https://hub.docker.com/_/mongo).
Para este container, você deverá:
- Criar as regras e permissões de acesso que considera importantes para um banco de dados de uma aplicaçao

### Cluster
- Criar um _script_ para a execução do _deploy_ da aplicação e banco em uma única execução.
- Todos os _pods_ devem estar rodando

## Extras
- Melhorias no Dockerfile da aplicação Web
- Utilização de _health check_ na aplicação
- Utilizar algum gerenciador de Cache, como `Redis`, por exemplo
- Utilizar algum agregador de logs, como o [Loggly](https://www.loggly.com/), por exemplo
- Relatório de segurança da aplicação

## Notas

* Pode se utilizar o [Minikube](https://github.com/kubernetes/minikube) ou [Docker for Mac/Windows](https://docs.docker.com/docker-for-mac/) para execução do desafio e realização de testes.

* A aplicação sobe por _default_ utilizando a porta **3000**

* Não é necessário realizar o _upload_ da imagem Docker para um registro público, você pode construir a imagem localmente e utilizá-la diretamente.
