const express = require('express');

const User = require('../models/user');
const { signup, signin } = require('../controllers/auth');

const user = express.Router();

user.post('/signup', signup);

user.post('/signin', signin );

module.exports = user;