const express = require('express');

const { requireSignIn } = require('../../common-middleware');
const { signup, signin, signout } = require('../../controllers/admin/auth');
const { validateSignUpRequest, validateSignInRequest, isRequestValidated } = require('../../validators/auth');

const user = express.Router();

user.post('/admin/signup', validateSignUpRequest, isRequestValidated, signup);
user.post('/admin/signin',validateSignInRequest, isRequestValidated, signin );
user.post('/admin/signout', requireSignIn, signout);

module.exports = user;