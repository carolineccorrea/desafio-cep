## Table of contents
* [General info](#general-info)
* [Tecnologias](#tecnologias)
* [Setup](#setup)
* [Documentação](#documentação)

## General info
Projeto de cadastro de ceps
	
## 🚀 Technologias
Project is created with: 
* [Nest Framework](https://nestjs.com)
* [Mongoose](https://mongoosejs.com)
* [Swagger](https://swagger.io)
* [Axios](https://github.com/axios/axios)
---

## 📰 Documentação
Swagger Open API 🔥

```
$ npm run dev:server
$ localhost:3000/docs
```
---

## Setup
Para rodar esse projeto, use localmente npm:

```
$ git clone https://github.com/carolineccorrea/desafio-cep.git
$ cd desafio-cep
$ npm install
$ npm run dev:server
```
---

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
---
Desenvolvido por Caroline Correa 👽
