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
console.log(`Live @ http://localhost: ${port}`);
app.get('/', async (req, res) => {
  const name = req.query.name || 'candidato';
  res.send(`Olá ${name}!\n Aqui está sua lista de registros: ${
    await model.find({})}`);
});

app.post('/', async (req, res) => {
  if (!req.body || !req.body.content) {
    console.log('Received invalid request body');
    return res.status(400).send({message: 'Enviar campo content'});
  }
  try {
    await model.create({ content: req.body.content });
    console.log(`Entry created: ${req.body.content}`);
  }  catch(err) {
    console.error(err);
  }
  return res.send({message: 'OK'});
});