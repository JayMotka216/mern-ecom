const express = require('express');

const { signup, signin } = require('../../controllers/admin/auth');

const user = express.Router();

user.post('/admin/signup', signup);

user.post('/admin/signin', signin );

module.exports = user;