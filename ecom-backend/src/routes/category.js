const express = require('express');
const { createCategory, getCategories } = require('../controllers/category');
const category = express.Router();

category.post('/category/create', createCategory);

category.get('/category/getCategories', getCategories);

module.exports = category;