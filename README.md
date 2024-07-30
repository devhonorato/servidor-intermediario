# Servidor Intermediário - README

Este é um exemplo de um servidor intermediário criado usando Node.js e o framework Express. 
O servidor é configurado para receber dados JSON via POST e retorná-los via GET. 
Além disso, ele utiliza o middleware `cors` para lidar com problemas de política de mesma origem (CORS) e o middleware `body-parser` para analisar solicitações com corpo JSON.

## Requisitos

- Node.js: Certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Como Usar

1. Clone ou baixe este repositório em sua máquina.

2. Abra um terminal na pasta do projeto.

3. Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

Inicie o servidor executando o seguinte comando:

```bash
npm start
```

O servidor será executado na porta 3000. Você verá uma mensagem no console indicando que o servidor intermediário está ouvindo.

## Funcionalidades

### Rota POST '/receber-dados'

- Esta rota permite receber dados JSON via solicitação POST.
- Os dados recebidos são armazenados temporariamente no array dataCache.
- O servidor responde com um status de sucesso (código 200) e uma mensagem indicando que os dados foram recebidos com sucesso.


### Rota GET '/obter-dados'
- Esta rota permite obter os dados armazenados temporariamente no array dataCache.
- O servidor responde com um status de sucesso (código 200) e os dados armazenados em cache.

## Exemplo de Uso

### POST
Para enviar dados para o servidor, você pode usar ferramentas como o curl ou criar um cliente que faça solicitações POST para a rota '/receber-dados'.

#### Body (json)

```JSON
{
    "Teste": "Teste"
}
```

#### Retorno

```JSON
{
    "message": "Dados recebidos com sucesso no servidor intermediário."
}
```

### GET
Para obter os dados armazenados, faça uma solicitação GET para a rota '/obter-dados'.

#### Retorno

```JSON
[
    {
        "Teste": "Teste"
    }
]
```