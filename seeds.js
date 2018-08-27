var Product = require('./models/product');
var products = require('./products');
require('dotenv').config();
require('./config/database');

Product.remove({}).then(() => {
    Product.create(products).then(() => {
        process.exit();
    });
})