var Product = require('../models/product');
var Order = require('../models/order');

function index(req, res) {
    Product.find({}, function (err, products) {
        if (err) return res.status(400).json(err);
        res.json(products);
    });
}

function addProduct(req, res) {
    Order.cartForUser(req.user._id, function (cart) {
        cart.addProduct(req.body.productId, function (cart) {
            res.json(cart);
        });
    });
}

module.exports = {
    index,
    addProduct
}
