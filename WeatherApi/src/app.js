const express = require('express');
const router = require('./routers/weather');
const server = express()
const cors = require('cors');


server.use(cors());
server.options('*', cors());

server.use(express.json());

server.use('/', router);



module.exports = server;