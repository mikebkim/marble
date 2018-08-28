var express = require('express');
var router = express.Router();
var ordersCtrl = require('../../controllers/orders');

router.get('/cart', ordersCtrl.getCart);

module.exports = router;