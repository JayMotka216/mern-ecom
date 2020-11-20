const express = require('express');
const { initialData } = require('../../controllers/initialData');

const init = express.Router();

init.post('/initialdata', initialData );

module.exports = init;