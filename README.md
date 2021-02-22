## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
Projeto de cadastro de ceps
	
## Technologies
Project is created with: 
* Nest Framework: 5.4.0
* Mongodb version: 7.2.2
* 
	
## Setup
Para rodar esse projeto, use localmente npm:

```
$ git clone https://github.com/carolineccorrea/desafio-cep.git
$ cd desafio-cep
$ npm install
$ npm run dev:server
```
## O servidor inciará na porta:3000 - acesse <http://localhost:3000> 

## Exemplos de uso
http://localhost:3000/v1/ceps

* para adicionar um CEP 
* use Content-Type - application/json

```
{
	"codigo_loja": "LOJA_B",
	"faixa_inicio": "1000000",
	"faixa_fim": "20000000"
}

```
