const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/* 
Métodos HTTP:
    GET: buscar/listar uma informação do back-end;
    POST: criar uma informação no back-end;
    PUT: alterar uma informação no back-end;
    DELETE: deletar uma informação no back-end.
*/

/*
Tipos de parâmetros:
    Query: parâmetros nomeados enviados na rota após "?" (filtros, paginação);
    Route: parâmetros utilizados para identificar recursos;
    Request Body: corpo da requisição, utilizado para criar ou alterar recursos.
*/

/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc
*/