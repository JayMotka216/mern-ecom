const express = require('express');
const multer = require('multer');
const shortId = require('shortid');
const path = require('path');

const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { createProduct, getProducts } = require('../controllers/product');

const product = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads') );
    },
    filename: function (req, file, cb) {
      cb(null, shortId.generate() + '-' + file.originalname);
    }
});   
const upload = multer({ storage: storage })

product.post('/product/create',requireSignIn, adminMiddleware, upload.array('productPicture'), createProduct);

product.get('/product/getProducts', getProducts);

module.exports = product;