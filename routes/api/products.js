var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/products');

router.get('/', productsCtrl.index);
router.post('/cart', productsCtrl.addProduct);
router.delete('/cart/:id', productsCtrl.removeProduct);

module.exports = router;