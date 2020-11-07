const express = require('express');

const { signup, signin } = require('../controllers/auth');
const { validateSignUpRequest, validateSignInRequest, isRequestValidated } = require('../validators/auth');

const route = express.Router();

route.post('/signup', validateSignUpRequest, isRequestValidated, signup);
route.post('/signin', validateSignInRequest, isRequestValidated, signin );

// user.post('/profile', requireSignIn, (req, res) => {
//     res.status(200).json({
//         user: 'profile'
//     })
// });

module.exports = route;