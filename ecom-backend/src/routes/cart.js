const express = require('express');

const { requireSignIn, userMiddleware } = require('../common-middleware');
const { addToCart } = require('../controllers/cart');

const cart = express.Router();

cart.post('/user/cart/addToCart',requireSignIn, userMiddleware, addToCart);

module.exports = cart;