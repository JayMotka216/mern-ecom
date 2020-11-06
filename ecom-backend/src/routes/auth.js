const express = require('express');

const { signup, signin, requireSignIn } = require('../controllers/auth');

const user = express.Router();

user.post('/signup', signup);

user.post('/signin', signin );

// user.post('/profile', requireSignIn, (req, res) => {
//     res.status(200).json({
//         user: 'profile'
//     })
// });

module.exports = user;