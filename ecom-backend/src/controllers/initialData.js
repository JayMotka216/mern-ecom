const Category = require('../models/category');
const Product = require('../models/product');

function createCategoryList(categories, parentId = null) {
    let category;
    const categoryList = [];
    if(parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined);
    } else {
        category = categories.filter(cat => cat.parentId == parentId); 
    }

    for(let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            categoryImg: cate.categoryImg,
            children: createCategoryList(categories, cate._id)
        });
    }
    return categoryList;
};

exports.initialData = async (req, res) => {
    const categories = await Category.find({}).exec();
    const products = await Product.find({})
    .select('_id name price quantity slug description productPicture category')
    .exec();
    res.status(200).json({
        categories: createCategoryList(categories),
        products
    });
};