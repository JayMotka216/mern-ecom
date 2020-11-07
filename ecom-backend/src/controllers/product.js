const slugify = require('slugify');
const shortid = require('shortid');

const Product = require('../models/product');

exports.createProduct = (req,res) => {
    //res.status(200).json({ file: req.files, body: req.body});
    const { name, price, description, category, quantity } = req.body;
    
    let productPicture = [];
    if(req.files.length > 0){
        productPicture = req.files.map(file => {
            return { img: file.filename};
        });
    }
    const product = new Product({
        name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPicture,
        category,
        createdBy: req.user._id,
    });

    product.save((error, product) => {
        if(error) {
            return res.status(400).json({ error });
        }
        if(product) {
            res.status(201).json({ product });
        }
    });
};

exports.getProducts = (req,res) => {
    Product.find({}).exec((error,products) => {
        if(error) {
            return res.status(400).json({ error });
        }
        if(products) {
            return res.status(200).json({ products });
        }
    })
};