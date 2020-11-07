const express = require('express');

const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { createCategory, getCategories } = require('../controllers/category');

const category = express.Router();

category.post('/category/create',requireSignIn, adminMiddleware, createCategory);

category.get('/category/getCategories', getCategories);

module.exports = category;