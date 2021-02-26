## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Documentation](#documentation)

## General info
Projeto de cadastro de ceps
	
## Technologies
Project is created with: 
* Nest Framework: 7.5.1
* Mongodb version: 7.2.2
* Swagger version: 4.7.15

## Documentation
Swagger Open API :fire:
```
$ npm run dev:server
$ localhost:3000/docs

```
	
## Setup
Para rodar esse projeto, use localmente npm:

```
$ git clone https://github.com/carolineccorrea/desafio-cep.git
$ cd desafio-cep
$ npm install
$ npm run dev:server
```
## O servidor inciará na porta:3000 - acesse <http://localhost:3000> 

## Exemplos de uso { GET , POST , PUT , DELETE }
http://localhost:3000/v1/ceps

* para adicionar um CEP 

```
{
	"codigo_loja": "LOJA_B",
	"faixa_inicio": "1000000",
	"faixa_fim": "20000000"
}

```
