var Product = require('./models/product');
var Order = require('./models/order');
var products = require('./products');
require('dotenv').config();
require('./config/database');

Promise.all([Product.remove({}), Order.remove({})]).then(() => {
    Product.create(products).then(() => {
        process.exit();
    });
})