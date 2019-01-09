'use strict';
const Schema = require('mongoose').Schema;
const mySchema = Schema({content: String});

/* global db */
module.exports = require('mongoose').model('MyModel', mySchema);