const express = require('express');
const perfilRoute = require('./routes/PerfilRoute') //Importar
const notificacaoRoute = require('./routes/NotificacaoRoute') //Importar
const loginRoute = require('./routes/LoginRoute') //Importar

const cors = require("cors");

const api = express();
const db = require("./db");

db.connect();

api.use(express.json()); 
api.use(cors({
    origin: "#"
}))
api.use('/perfil', perfilRoute);
api.use('/notificacao', notificacaoRoute);
api.use('/login', loginRoute);


//Rota Root/Raiz
api.get('/', (req, res) => {
    res.send('Bem vindo ao Perfil Profissional API')
})

module.exports = api;