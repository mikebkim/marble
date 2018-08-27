var Product = require('../models/product');

function index(req, res) {
    Product.find({}, function (err, products) {
        if (err) return res.status(400).json(err);
        res.json(products);
    });
}
module.exports = {
    index
}
