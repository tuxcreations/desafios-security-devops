const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/test');

const model = require('./model');


const port = 3000;

app.listen(port);
console.log(`Aplicação teste executando em http://localhost: ${port}`);
app.get('/', async (req, res) => {
  const name = process.env.NAME || 'candidato';
  res.send(`Olá ${name}! Aqui está sua lista de registros: ${
    await model.find({})}`);
});

app.post('/', async (req, res) => {
  console.log(req.body);
  if (!req.body || !req.body.content) {
    return res.status(400).send({message: 'Enviar campo content'});
  }
  await model.create({ content: req.body.content });
  return res.send({message: 'OK'});
});