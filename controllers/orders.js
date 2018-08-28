var Order = require('../models/order');

function getCart(req, res) {
    Order.cartForUser(req.user._id, function (cart) {
        cart.populate('items.product').execPopulate().then(cart => {
            res.json(cart);
        });
    });
}

module.exports = {
    getCart
}
