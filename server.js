const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o bd
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);