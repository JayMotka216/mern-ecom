const express = require('express');

const { signup, signin } = require('../../controllers/admin/auth');
const { validateSignUpRequest, validateSignInRequest, isRequestValidated } = require('../../validators/auth');

const user = express.Router();

user.post('/admin/signup', validateSignUpRequest, isRequestValidated, signup);

user.post('/admin/signin',validateSignInRequest, isRequestValidated, signin );

module.exports = user;