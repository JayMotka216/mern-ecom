const express = require('express');
const multer = require('multer');
const path = require('path');
const shortId = require('shortid');

const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { createCategory, getCategories } = require('../controllers/category');

const category = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads') );
    },
    filename: function (req, file, cb) {
      cb(null, shortId.generate() + '-' + file.originalname);
    }
});   
const upload = multer({ storage: storage });

category.post('/category/create',requireSignIn, adminMiddleware, upload.single('categoryImg'), createCategory);

category.get('/category/getCategories', getCategories);

module.exports = category;